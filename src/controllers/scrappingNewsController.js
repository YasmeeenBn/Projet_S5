const puppeteer = require('puppeteer');
const News = require('../models/news');



async function getNews() {
    var url = "https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFIzWjJnU0FtWnlLQUFQAQ?hl=fr&gl=MA&ceid=MA%3Afr";
    // document.querySelector("#gb > div.gb_Cc.gb_Ac.gb_la.gb_Fc.gb_Hc.gb_Ec > div.gb_Ic > div > c-wiz > div > div:nth-child(5) > div:nth-child(4)")
    var browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    var page = (await browser.pages())[0];
    page.setDefaultNavigationTimeout(0);
    await page.goto(url, { waitUntil: 'networkidle2' });
    let newsUrls = await page.evaluate(() => {
        var articles = []
         //var maroc = document.querySelector("#gb > div.gb_Cc.gb_Ac.gb_la.gb_Fc.gb_Hc.gb_Ec > div.gb_Ic > div > c-wiz > div > div:nth-child(5) > div:nth-child(4)");
         //var inter = document.querySelector("#gb > div.gb_Cc.gb_Ac.gb_la.gb_Fc.gb_Hc.gb_Ec > div.gb_Ic > div > c-wiz > div > div:nth-child(5) > div:nth-child(5)");
        
         var articles = document.querySelectorAll('.VDXfz');
         var article_url = articles.href;
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


async function getArticleNews() {
    
    //lien de l'article
    var article_url = "https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFIzWjJnU0FtWnlLQUFQAQ?hl=https://news.google.com/articles/CBMiSmh0dHBzOi8vd3d3LmNubi5jb20vMjAyMS8xMS8xOS91cy9reWxlLXJpdHRlbmhvdXNlLXRyaWFsLWZyaWRheS9pbmRleC5odG1s0gFOaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyMS8xMS8xOS91cy9reWxlLXJpdHRlbmhvdXNlLXRyaWFsLWZyaWRheS9pbmRleC5odG1s?hl=en-US&gl=US&ceid=US%3Aen&gl=MA&ceid=MA%3Afr";
    // document.querySelector("#gb > div.gb_Cc.gb_Ac.gb_la.gb_Fc.gb_Hc.gb_Ec > div.gb_Ic > div > c-wiz > div > div:nth-child(5) > div:nth-child(4)")
    var browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    var page = (await browser.pages())[0];
    page.setDefaultNavigationTimeout(0);
    await page.goto(article_url, { waitUntil: 'networkidle2' });
    let newsUrls = await page.evaluate(() => {
        //container de l'article dont on doit acceder au titre etc ..               
        var article = document.querySelector('.l-container');
        console.log(article);
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


