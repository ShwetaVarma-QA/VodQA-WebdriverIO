import Page from './page';

// const SELECTORS = {
//     USERNAME: {
//         web: '#username',
//         android: '~username',
//         ios: '~username'
//     },
//     PASSWORD: {
//         web: '#password',
//         android: '~password',
//         ios: '~password'
//     }
//
//
//
// }


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
}

export default new FormPage();
