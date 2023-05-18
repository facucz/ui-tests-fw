const trainingLandingPage = require("../pageobjects/training/TrainingLandingPage");
const trainingSignUpPage = require("../pageobjects/training/TrainingSignUpPage")
const trainingCreateProfilePage = require("../pageobjects/training/TrainingCreateProfilePage");

describe('Sign up in Deel', () => {
    it('should Create Your Deel account be enable', async () => {
        const userData = {
            firstName: "Facundo",
            lastName: "Zaragoza",
            email: "example@email.com",
            password: "#examplePass123"
        }
        const contractAccount = "Contract";

        await trainingLandingPage.navigate();
        await trainingLandingPage.clickOnSignUp();

        await trainingSignUpPage.selectAccount(contractAccount);
        await trainingSignUpPage.clickOnNextBtn();
       
        await trainingCreateProfilePage.fillForm(userData);
        expect(trainingCreateProfilePage.createDeelAccountBtn).toBeEnabled();
    })
})
