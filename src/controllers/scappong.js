const puppeteer = require('puppeteer');
const News = require('../models/news');
const Organization = require('../models/organization');
const Country = require('../models/country');
const NewsBreakdown = require('../models/newsBreakdown');




async function getNews() {
    var url = "https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFIzWjJnU0FtWnlLQUFQAQ?hl=fr&gl=MA&ceid=MA%3Afr";
    // document.querySelector("#gb > div.gb_Cc.gb_Ac.gb_la.gb_Fc.gb_Hc.gb_Ec > div.gb_Ic > div > c-wiz > div > div:nth-child(5) > div:nth-child(4)")
    var browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    var page = (await browser.pages())[0];
    page.setDefaultNavigationTimeout(0);
    await page.goto(url, { waitUntil: 'networkidle2' });
    let newsUrls = await page.evaluate(() => {
        var articlesurls = []
        // var maroc = document.querySelector("#gb > div.gb_Cc.gb_Ac.gb_la.gb_Fc.gb_Hc.gb_Ec > div.gb_Ic > div > c-wiz > div > div:nth-child(5) > div:nth-child(4)");
        // var inter = document.querySelector("#gb > div.gb_Cc.gb_Ac.gb_la.gb_Fc.gb_Hc.gb_Ec > div.gb_Ic > div > c-wiz > div > div:nth-child(5) > div:nth-child(5)");
        var articles = document.querySelectorAll('.VDXfz');
        console.log(articles);



    });
    await browser.close();
    // forward google news urls to target urls

    for (var i = 0; i < newsUrls.length; i++) {
        var targetUrl = await forwardUrl(newsUrls[i].article_url);
        newsUrls[i].article_url = targetUrl[0];
    }
    return newsUrls
}

async function getSubOrgsInfo() {
    var subOrganizations = await Organization.find({head_office_id:{$nin:[null]}});
    var infos = []
    for (let i = 0; i < subOrganizations.length; i++) {
        var info = {
            "orgId": subOrganizations[i]._id,
            "orgName": subOrganizations[i].name,
            "countryId": subOrganizations[i].country,
        }
        infos.push(info)
    }
    return infos
}


async function saveOrgArticles(orgInfo) {
    // search Organization Articles and save each article
    const articles = await getNews(orgInfo.orgId, orgInfo.orgName, orgInfo.countryId);
    if (articles.length == 0) {
        return null;
    }

    for (let i = 0; i < articles.length; i++) {
        var article = new News({
            article_url: articles[i].article_url,
            article_title: articles[i].title,
            organization: articles[i].organization,
            country: articles[i].country,
            posted_at: articles[i].posted_at
        });

        article.save();
    };

}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


exports.addOrgArticles = async(req, res, next) => {
    const subOrgInfos = await getSubOrgsInfo();

    var offsetVal = await NewsBreakdown.find({});
    var offset = offsetVal[0].offset;
    var errorIndex = offset;
    try {
        for (let i = offset; i < subOrgInfos.length; i++) {
            errorIndex++;
            try {
                await saveOrgArticles(subOrgInfos[i]);

                await sleep(60000);
            } catch (error) {

                await NewsBreakdown.updateOne({ "_id": "61015409cc93eb146c668f6d" }, { $set: { interrupted: true, error_description: error, organization: subOrgInfos[i], offset: i } })
                return null;
            }
            await NewsBreakdown.updateOne({ "_id": "61015409cc93eb146c668f6d" }, { $set: { interrupted: true, error_description: "", organization: {}, offset: i } });

        }

        await NewsBreakdown.updateOne({ "_id": "61015409cc93eb146c668f6d" }, { $set: { interrupted: false, error_description: "", organization: {}, offset: 0 } });

        // res.status(200).json("ok");
    } catch (error) {
        console.error(error);
        await NewsBreakdown.updateOne({ "_id": "61015409cc93eb146c668f6d" }, { $set: { interrupted: true, error_description: error, organization: {}, offset: errorIndex } });
        // res.status(404).json(error);

    }
}

