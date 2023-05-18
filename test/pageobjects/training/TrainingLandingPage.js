class TrainingLandingPage {

    get signUpLink() {
        return $('a[class="anchor"]');
    }

    async clickOnSignUp() {
        await this.signUpLink.click();
    }

    async navigate() {
        await browser.maximizeWindow()
        return browser.url(`https://www-dev-6kzlvo697r.giger.training/`);
    }
}

module.exports = new TrainingLandingPage();