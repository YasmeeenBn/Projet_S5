const puppeteer = require('puppeteer');
//exepmle yotuube
async function getArticleNews() {
            console.log("dd1")
    var article_url = "https://en.hespress.com/society";
    var browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    var page = (await browser.pages())[0];
    page.setDefaultNavigationTimeout(0);
    await page.goto(article_url, { waitUntil: 'networkidle2' });

         var title = document.querySelector("#listing > div.col-12.col-md-7.col-lg-8.col-xl-9 > div.posts-categoy.row > div:nth-child(6) > div > div > div.card-img-top > a").title
         var link = document.querySelector("#listing > div.col-12.col-md-7.col-lg-8.col-xl-9 > div.posts-categoy.row > div:nth-child(6) > div > div > div.card-img-top > a").href
         var image = document.querySelector("#listing > div.col-12.col-md-7.col-lg-8.col-xl-9 > div.posts-categoy.row > div:nth-child(6) > div > div > div.card-img-top > a > div > img").src
         var date = document.querySelector("#listing > div.col-12.col-md-7.col-lg-8.col-xl-9 > div.posts-categoy.row > div:nth-child(6) > div > div > div.card-body > div > div > span > small").textContent
        // console.log(newsUrls)
        console.log(title);
        console.log(date);
        console.log(image);
        console.log(link);

        console.log("dd")
  await browser.close();
    };
    console.log(getArticleNews())

    async function tutorial() {
      try {
          const URL = 'https://en.hespress.com/society'
          const browser = await puppeteer.launch()
          const page = await browser.newPage()
   
          await page.goto(URL)
          let data = await page.evaluate(() => {
              let results = []
              let items = document.querySelectorAll("#listing > div.col-12.col-md-7.col-lg-8.col-xl-9 > div.posts-categoy.row > div:nth-child(1) > div > div > div.card-img-top > a")
              items.forEach((item) => {
                  results.push({
                      url: item.href,
                      title: item.title,
                      image: document.querySelector("#listing > div.col-12.col-md-7.col-lg-8.col-xl-9 > div.posts-categoy.row > div:nth-child(1) > div > div > div.card-img-top > a > div > img").src,
                      date : document.querySelector("#listing > div.col-12.col-md-7.col-lg-8.col-xl-9 > div.posts-categoy.row > div:nth-child(1) > div > div > div.card-body > div > div > span > small").textContent,
                  })
              })
              return results
            
          })
   
          console.log(data)
          await browser.close()
   
      } catch (error) {
          console.error(error)
      }
   }
   
   tutorial()
