const puppeteer = require('puppeteer');
//exepmle yotuube
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://marketingplatform.google.com/about/partners/find-a-partner?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fpartners%2F'
  await page.goto(url);
//   await page.screenshot({ path: 'example.png' });

  const titles = await page.evaluate(()=> 
    Array.from(document
        .querySelectorAll('div.description h3.title')
        .map(partner => 
            partner.innerText.trim())
  ));

  const logo = await page.evaluate(()=> 
    Array.from(document
        .querySelectorAll('div.description .logo img')
        .map(logo => 
            logo.src)
  ));  

  console.log(titles);
  console.log(logo);
  await browser.close();
})();