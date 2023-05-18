const wikiLandingPage = require("../pageobjects/wikipedia/WikiLandingPage");

describe('Wikipedia landing page', () => {
    it('should navigate to wikipedia landing page', async () => {
        await wikiLandingPage.navigate();
        await expect(wikiLandingPage.wikipediaTitle).toBeDisplayed();
    })
})
