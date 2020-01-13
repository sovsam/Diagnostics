const Application = require('spectron').Application
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

describe('User is on the Scan window', function () {
  this.timeout(40000);
  beforeEach(function () {
    return app.start()
      .then(function () {
        return app.client.element("//input[@type='text']") .setValue('\uE003\uE003\uE003\uE003')
       }).then(function(){
        return app.client.element("//input[@type='text']")
       .setValue(properties.get('credentials.username'))
      }).then(function () {
        return app.client.element("//input[@type='password']").setValue('\uE003\uE003\uE003\uE003')
       }).then(function(){
        return app.client.element("//input[@type='password']")
      .setValue(properties.get('credentials.password'))
      }).then(function () {
        var e = new Date().getTime() + (2000);
        while (new Date().getTime() <= e) { }
        return app.client.waitUntilWindowLoaded().click("//button[@type='submit']")
      }).then(function () {
        var e = new Date().getTime() + (6000);
        while (new Date().getTime() <= e) { }
        return app.client.waitUntilWindowLoaded()
          
      })
  })
  afterEach(function () {
    if (app && app.isRunning()) {
      return app.stop()
    }
  })

  it('Diagnostics Scan title should be displayed on the page', function () {
    return app.client.waitUntilWindowLoaded()
            .element("//div[contains(text(),'DIAGNOSTIC SCAN')]")
              .getText().should.eventually.equal('DIAGNOSTIC SCAN') 
  })
  it('User name, shop name should be displayed on the page ',function(){
    return app.client.waitUntilWindowLoaded()
    .element("//div[@class='q-toolbar row no-wrap items-center']/button[2]/div[2]")
      .getText().should.eventually.equal(properties.get('credentials.username'))
      .then(function () {
        return app.client.waitUntilWindowLoaded()
        .element("//div[@class='q-toolbar row no-wrap items-center']/button[3]/div[2]")
          .getText().should.eventually.equal(properties.get('main.shopName'))   
 })
})
it('User should able to select one of the options from Active Registration dropdown',function(){
  return app.client.waitUntilWindowLoaded().click("//i[contains(text(),'arrow_drop_down')]")
  .then(function () {
    var e = new Date().getTime() + (2000);
    while (new Date().getTime() <= e) { }
    return app.client.waitUntilWindowLoaded()
    .element("//div[contains(text(),'Honda - Provider')]")
      .isVisible().should.eventually.equal(true)
      .then(function () {
        return app.client.waitUntilWindowLoaded()
    .click("//div[contains(text(),'Honda - Provider')]")
})
})
})
it('User should able to select one of the options from Available Scanning Device(s) dropdown',function(){
  return app.client.waitUntilWindowLoaded().click("(//i[contains(text(),'arrow_drop_down')])[2]")
  .then(function () {
    var e = new Date().getTime() + (3000);
    while (new Date().getTime() <= e) { }
    return app.client.waitUntilWindowLoaded()
    .element("//div[contains(text(),'MDX2014.emu')]")
      .isVisible().should.eventually.equal(true)
      .then(function () {
        return app.client.waitUntilWindowLoaded()
    .click("//div[contains(text(),'MDX2014.emu')]")
})
})
})
it('Prior to choosing the active registration and available scanning devices scan button should be disabled',function(){
  return app.client.waitUntilWindowLoaded().element("//div[@class='col-9 q-pa-sm q-pr-lg']/button")
  .isEnabled().should.eventually.equal(false)
})
})