const puppeteer = require('puppeteer');
const News = require('../models/news');


async function getArticleNews() {
    //lien de l'article
    var article_url = "https://en.hespress.com/society";
    var browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    var page = (await browser.pages())[0];
    page.setDefaultNavigationTimeout(0);
    await page.goto(article_url, { waitUntil: 'networkidle2' });
    let newsUrls = await page.evaluate(() => {
        //container de l'article dont on doit acceder au titre etc ..               
         var link = document.querySelectorAll('div.card-img-top a.stretched-link')
         var title = document.querySelectorAll('h3.card-title')

         var article_url = articles.href;
        console.log(newsUrls);
    });
    await browser.close();
    // forward google news urls to target urls
    // for (var i = 0; i < newsUrls.length; i++) {
    //     var targetUrl = await forwardUrl(newsUrls[i].article_url);
    //     newsUrls[i].article_url = targetUrl[0];
    // }
    return newsUrls
}
 
async function saveArticles() {
    // search Organization Articles and save each article
    const articles = await getArticleNews();
    if (articles.length == 0) {
        return null;
    }
    for (let i = 0; i < articles.length; i++) {
        var article = new News({
            article_url: articles[i].article_url,
            article_title: articles[i].title,
            article_description: articles[i].description,
            article_image: articles[i].image_url,
        });
        article.save();
    };
}

async function getNews2() {
    var url = "https://news.google.com/search?q=%20when%3A30d";
    console.log(url);
    var browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    var page = (await browser.pages())[0];
    page.setDefaultNavigationTimeout(0);
    await page.goto(url, { waitUntil: 'networkidle2' });
    let newsUrls = await page.evaluate((organizationId, countryId) => {
        var urls = document.querySelectorAll('div[class = "NiLAwe y6IFtc R7GTQ keNKEd j7vNaf nID9nc"] > a');
        if (urls == null) {
            return null;
        }
        var dates = document.querySelectorAll('time[class = "WW6dff uQIVzc Sksgp"]');
        var titles = document.querySelectorAll('h3[class = "ipQwMb ekueJc RD0gLb"] > a')
        let articles = [];
        for (var i = 0; i < urls.length; i++) {
            try {
                var articleUrl = urls[i].href;
                var title = titles[i].innerText
            } catch (error) {
                // empty div
                continue
            }
            articles.push({
                "article_url": articleUrl,
                "title": title,
            })
        }
        return articles
    }, organizationId, countryId);
    await browser.close();
    // forward google news urls to target urls
    for (var i = 0; i < newsUrls.length; i++) {
        var targetUrl = await forwardUrl(newsUrls[i].article_url);
        newsUrls[i].article_url = targetUrl[0];
    }
    return newsUrls
}






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

// async function getArticleNews() {
//     //lien de l'article
//     var article_url = "https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFIzWjJnU0FtWnlLQUFQAQ?hl=https://news.google.com/articles/CBMiSmh0dHBzOi8vd3d3LmNubi5jb20vMjAyMS8xMS8xOS91cy9reWxlLXJpdHRlbmhvdXNlLXRyaWFsLWZyaWRheS9pbmRleC5odG1s0gFOaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyMS8xMS8xOS91cy9reWxlLXJpdHRlbmhvdXNlLXRyaWFsLWZyaWRheS9pbmRleC5odG1s?hl=en-US&gl=US&ceid=US%3Aen&gl=MA&ceid=MA%3Afr";
//     // document.querySelector("#gb > div.gb_Cc.gb_Ac.gb_la.gb_Fc.gb_Hc.gb_Ec > div.gb_Ic > div > c-wiz > div > div:nth-child(5) > div:nth-child(4)")
//     var browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
//     var page = (await browser.pages())[0];
//     page.setDefaultNavigationTimeout(0);
//     await page.goto(article_url, { waitUntil: 'networkidle2' });
//     let newsUrls = await page.evaluate(() => {
//         //container de l'article dont on doit acceder au titre etc ..               
//          var articles = document.querySelectorAll('.VDXfz');
//          var article_url = articles.href;
//         console.log(article);
//     });
//     await browser.close();
//     // forward google news urls to target urls
//     for (var i = 0; i < newsUrls.length; i++) {
//         var targetUrl = await forwardUrl(newsUrls[i].article_url);
//         newsUrls[i].article_url = targetUrl[0];
//     }
//     return newsUrls
// }