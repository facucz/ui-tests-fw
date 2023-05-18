const Page = require("../page");

class WikiLandingPage extends Page {
    
    get wikipediaTitle () {
        return $('span[id="Bienvenidos_a_Wikipedia,"]');
    }

    async navigate() {
        await browser.maximizeWindow()
        return browser.url(`https://es.wikipedia.org/`)
    }
}

module.exports = new WikiLandingPage();
