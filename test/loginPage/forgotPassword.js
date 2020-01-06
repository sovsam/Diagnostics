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

describe('Verify Forgot Password function', function () {
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
    it('User inserts random password:  '+properties.get('credentials.passwordN'),function(){
        app.client.element("//input[@type='password']").setValue('\uE003\uE003\uE003\uE003')
        return app.client.element("//input[@type='password']").setValue(properties.get('credentials.passwordN'))
    }) 
    it('When user clicks on login button', function(){
        var e = new Date().getTime() + (2000);
        while (new Date().getTime() <= e) {}
        return app.client.waitUntilWindowLoaded().click("//button[@type='submit']")
    })
    it('Then user should see invalid password error message', function(){
       
    })
    it('And user should able to click Forgot Password link', function(){
        return app.client.waitUntilWindowLoaded().click("//a[@id='reset-link']")
    })
    it('When user lands to Password Reset window', function(){

    })
    it('Then user should reset password ',function(){

    })
    it('And login to the app', function(){

    })
})   