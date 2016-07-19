describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        browser.get('http://localhost/AureliaTSApp');

        var getGreting = function () {
            return element(by.tagName('h2')).getText();
        };

        var pp = getGreting();

        expect(pp).toEqual('Welcome to the Aurelia Navigation App!22')
    });
});