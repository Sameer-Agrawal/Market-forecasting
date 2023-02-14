const puppeteer = require('puppeteer'); 

(async function extraction(){  // Functional Programming
    const browserInstance = await puppeteer.launch( { headless: false , defaultViewport : null , args : ['--start-fullscreen'] } );  // Browser, without UI
    const webPageInstance = await browserInstance.newPage();  // Web-page fabrication
    const googleNewsInstance = await webPageInstance.goto("https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en");  // Ping, specified URL
    await webPageInstance.waitForSelector('.EctEBd');
    const category = await webPageInstance.evaluate( function(){  // Faith --> Return HTML element, holding up specified class identifier
        const categoryShowcase = document.querySelectorAll('.EctEBd a');
        for( let index = 4 ; index < categoryShowcase.length ; index++ ){  // Looping through, category showcase
            categoryShowcase[index].click();

        }
    } );  
})();