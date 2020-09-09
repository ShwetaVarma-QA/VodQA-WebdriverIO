import FormPage from '../pageobjects/form.page';

describe('auth form', () => {

    it('should deny access with wrong creds', () => {
        FormPage.open();
        FormPage.setUserName('foo');
        FormPage.setPWD('bar');
        FormPage.submit();
        FormPage.flash.waitForDisplayed({timeout: 3000});
        expect(FormPage.flash.getText()).toContain('Your username is invalid!');
        expect(browser.checkFullPageScreen('InvalidCredentials')).toEqual(0);
    });

    it('should allow access with correct creds', () => {
        FormPage.open();
        FormPage.setUserName('tomsmith');
        FormPage.setPWD('SuperSecretPassword!');
        FormPage.submit();
        expect(FormPage.flash.getText()).toContain('You logged into a secure area!');
        expect(browser.checkFullPageScreen('InvalidCredentials')).toEqual(0);
    });
});
