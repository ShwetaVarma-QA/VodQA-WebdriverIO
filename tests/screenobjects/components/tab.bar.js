export default class TabBar {

    static openLogin () {
        $('~Login').click();
    }

    static openForms () {
        $('~Forms').click();
    }

    static waitForTabBarShown () {
        $('~Home').waitForDisplayed({
            timeout: 20000,
        });
    }
}
