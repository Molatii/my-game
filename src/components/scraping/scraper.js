//required modules
const puppeteer = require('puppeteer');
const cheerio = require('cheerio'); 
const scraping = require('website-scraper');
const got = require('got');


(async () => {
 

    //async helps with loading of puppeteer,browser and web page in order
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    const url = 'https://emojiisland.com/products/anguished-iphone-emoji-image'; 
    await page.goto(url);
            
     
    //Scraping images links
      const logos = await page.evaluate(() =>
      Array.from(document.querySelectorAll("img "))
      .map(logo =>logo.src)
      )
 
      const urli = 'https://commons.wikimedia.org/wiki/File:Noto_Emoji_Oreo_1f642.svg';
      await page.goto(urli);

          //Scraping images links
          const logoss = await page.evaluate(() =>
          Array.from(document.querySelectorAll("img "))
          .map(logo =>logo.src)
          )
          
     await browser.close();
})();

























