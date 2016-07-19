describe('aurelia homepage', function () {
    let browserEl;
    beforeEach(function () {
        browserEl = browser.get('http://localhost/AureliaTSApp');
    })

    it('should have proper header text set and username', function () {
        browser.sleep(3000);

        let ele = element(by.valueBind('user.UserName'));
        expect(ele.getAttribute('value')).toBe('atul2212');//.toBeDefined();

        element(by.valueBind('user.UserName')).clear().sendKeys('Test user');
        browser.sleep(3000);
        expect(ele.getAttribute('value')).toBe('Test user');//.toBeDefined();

        let list = element.all(by.css('.nav li'));
        expect(list.count()).toBe(5);

        expect(element(by.tagName('h2')).getText()).toBe('Welcome to the Aurelia Navigation App!');

    });

    it('should navigate to login screen', function () {

        let list = element.all(by.css('.nav li'));
        let body = element(by.tagName('body'));
       
    });

});