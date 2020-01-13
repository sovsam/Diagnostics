const Application = require('spectron').Application
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const allure = require("mocha-allure-reporter");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./env/dev.properties');

global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
});

var app = new Application({
    path: properties.get('main.app')
})

describe('Verify Login Function With Positive Credentials', function () {
    this.timeout(40000);
    before(function () {
        return app.start()
    })
    after( function() {
         if (app && app.isRunning()) {
            return app.stop()
        }
    })
    it('User inserts positive username:  '+properties.get('credentials.username'),function () {
        app.client.element("//input[@type='text']").setValue('\uE003\uE003\uE003\uE003')
        return app.client.element("//input[@type='text']").setValue(properties.get('credentials.username'))
    })  
    it('User inserts positive password:  '+properties.get('credentials.password'),function(){
        app.client.element("//input[@type='password']").setValue('\uE003\uE003\uE003\uE003')
        return app.client.element("//input[@type='password']").setValue(properties.get('credentials.password'))
    }) 
    it('When user clicks on login button', function(){
        var e = new Date().getTime() + (2000);
        while (new Date().getTime() <= e) {}
        return app.client.waitUntilWindowLoaded().click("//button[@type='submit']")
    })
    it('Then user should see scan page', function(){
        var e = new Date().getTime() + (6000);
        while (new Date().getTime() <= e) {}
        return app.client.waitUntilWindowLoaded().element("//div[@class='q-item__label']")
       .isVisible().should.eventually.equal(true)
    })
})   