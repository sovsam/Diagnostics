const Application = require('spectron').Application
const assert = require('assert')
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./env/dev.properties');

global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
})

var app = new Application({
    path: properties.get('main.app')
})

describe('Verify Main functions', function () {
    this.timeout(20000);
    before(function () {
        return app.start()
    })
   after(function() {
    if (app && app.isRunning()) {
       return app.stop()
    }
    })
   
    it('Number of the windows should be 1', function () {
        app.client.waitUntilWindowLoaded().getWindowCount().then(function (count) {
        assert.equal(count, 1)
    }) 
    })
    it('Title of the window should equal to CCCDiagnostics', function () {
       return app.client.waitUntilWindowLoaded()
       .getTitle().should.eventually.equal('CCCDiagnostics')
    })
    it('Dev tools should be closed', function () {
        return app.client.waitUntilWindowLoaded().browserWindow.isDevToolsOpened()
        .should.eventually.equal(false)
    })
    it('Window should be visible to the user', function () {
        return app.client.browserWindow.isVisible().should.eventually.equal(true)
    })
    it('User should able to maximimize the window', function () {
       return app.client.waitUntilWindowLoaded().browserWindow.maximize()
       .then(function(){
       return app.client.waitUntilWindowLoaded().browserWindow.isMaximized()
       .should.eventually.equal(true)
    })
    })
    it('User should able to minimize the window', function () {
        return app.client.waitUntilWindowLoaded().browserWindow.minimize()
        .then(function(){
        return app.client.waitUntilWindowLoaded().browserWindow.isMinimized()
        .should.eventually.equal(true)
    })
    })
    it('"CCC Diagnostics" dispalyed on the window', function () {
        return app.client.waitUntilWindowLoaded().element("//div[contains(text(),'CCC Diagnostics')]")
      .getText().should.eventually.equal('CCC Diagnostics')
    })
    it('User closes the application', function () {
       return app.stop()
    })
    it('Then user starts the app',function(){
       return app.start()
    })
    it('Number of the windows should be 1', function () {
        app.client.waitUntilWindowLoaded().getWindowCount().then(function (count) {
        assert.equal(count, 1)
    }) 
    })
    
    })

