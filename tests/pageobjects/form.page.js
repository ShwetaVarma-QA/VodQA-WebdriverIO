import Page from './page';

class FormPage extends Page {
    /**
     * define elements
     */
    get username () { return $('#username'); }
    get password () { return $('#password'); }
    get submitButton () { return $('#login button[type=submit]'); }
    get flash () { return $('#flash'); }

    open () {
        super.open('login');
    }

    submit () {
        this.submitButton.click();
    }
    setUserName(value){
        this.username.setValue(value)
    }
    setPWD(pwd){
        this.password.setValue(pwd)
    }
}

export default new FormPage();
