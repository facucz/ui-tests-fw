class TrainingSignUpPage {

    get businessTab() {
        // implement here the contract tab locator
    }

    get contractTab() {
        return $('button[data-qa="contractor"]');
    }

    get nextBtn() {
        return $('span=Next');
    }

    //Select an account type
    async selectAccount(accountType) {
        //Business or Contract
        switch(accountType) {
            case 'Business':
                break;
            case 'Contract':
                this.contractTab.click();
                break;
            default:
                throw new Error(`The account type ${accountType} does not exists. It only can be: Business or Contract`)
        }
    }

    //Click on the Next button
    async clickOnNextBtn() {
        await this.nextBtn.click();
    }
}

module.exports = new TrainingSignUpPage();