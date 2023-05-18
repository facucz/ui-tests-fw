class TrainingCreateProfilePage {

    get firstNameInput() {
        return $('input[id=":ra:"]');
    }

    get lastNameInput() {
        return $('input[id=":rb:"]');
    }

    get emailInput() {
        return $('input[id=":rc:"]');
    }

    get passwordInput() {
        return $('input[id=":re:"]');
    }

    get createDeelAccountBtn() {
        return $('button[type="submit"]');
    }

    async fillForm(data) {
        await this.firstNameInput.setValue(data.firstName);
        await this.lastNameInput.setValue(data.lastName);
        await this.emailInput.setValue(data.email);
        await this.passwordInput.setValue(data.password);
    }

}

module.exports = new TrainingCreateProfilePage();