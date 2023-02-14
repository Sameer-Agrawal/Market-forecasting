const puppeteer = require('puppeteer');

(async () => {  // Functional Programming
    const browserInstance = await puppeteer.launch( { headless: false , defaultViewport : null , args : ['--start-fullscreen'] } );  // Browser, without UI
    const webPageInstance = await browserInstance.newPage();  // Web-page fabrication
    const googleNewsInstance = await webPageInstance.goto("https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en");  // Ping, specified URL
    await webPageInstance.waitForSelector('.EctEBd');

    // Faith --> Return HTML element, holding up specified class identifier
    const categoryShowcase = await webPageInstance.evaluate( "document.querySelectorAll('.EctEBd a')" );  

    for( let key in categoryShowcase ){  // Looping through, category showcase
        if( parseInt( key ) > 3 ){
            const categoryAbstractURL = categoryShowcase[ key ].__incrementalDOMData.j[5];
            const categoryURL = 'https://news.google.com' + categoryAbstractURL.substr( 1 );  // Represent, unique category URL
            const newsCategoryInstance = await webPageInstance.goto(categoryURL);  // Ping, specified URL
    
            // Data extraction provided, infinite scroll
            await Scraper( 10 , webPageInstance );  // Faith --> Scrap element
            break;
        }
    }
})();

const Scraper = async ( count , webPageInstance ) => {
    
}
