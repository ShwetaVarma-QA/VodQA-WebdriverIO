import FormPage from '../pageobjects/form.page';

describe('auth form', () => {

    //  const { addFeature } = require('@wdio/allure-reporter').default;

    it('should deny access with wrong creds', () => {
        FormPage.open();
        FormPage.username.setValue('foo');
        FormPage.password.setValue('bar');
        FormPage.submit();
        FormPage.flash.waitForDisplayed({timeout: 3000});
        expect(FormPage.flash.getText()).toContain('Your username is invalid!');
    });

    it('should allow access with correct creds', () => {
        // allureReporter.addFeature('login')
        FormPage.open();
        FormPage.username.setValue('tomsmith');
        FormPage.password.setValue('SuperSecretPassword!');
        FormPage.submit();
       // browser.
        // FormPage.flash.waitForDisplayed({ timeout: 3000 });
        expect(FormPage.flash.getText()).toContain('You logged into a secure area!');
    });
});