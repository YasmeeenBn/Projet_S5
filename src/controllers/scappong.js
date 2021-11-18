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
        var articles = []
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


