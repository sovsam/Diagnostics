const Application = require('spectron').Application
const assert = require('assert')
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./env/dev.properties');

global.before(function () {

  chai.should();
  chai.use(chaiAsPromised)
})

var app = new Application({
  path: properties.get('main.app')

})

describe('User is on the Diagnostic Result(s) View window', function () {
  this.timeout(40000)

  beforeEach('Logging in to Diagnostic Result(s) View window', function () {
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
        var e = new Date().getTime() + (3000);
        while (new Date().getTime() <= e) { }
        return app.client.waitUntilWindowLoaded()
          .click("//div[@class='q-list']/div[2]")
      })
  })

  afterEach(function () {
    if (app && app.isRunning()) {
    return app.stop()
    }
  })

  it('On-click, available scan results for the vehicle can be viewed',function(){
    var e = new Date().getTime() + (6000);
    while (new Date().getTime() <= e) { }
    return app.client.waitUntilWindowLoaded()
    .click("//div[@class='full-width width-99-perc q-list q-list--bordered']/div")
    .then(function () {
        var e = new Date().getTime() + (2000);
        while (new Date().getTime() <= e) { }
        return app.client.waitUntilWindowLoaded()
        .element("//div[@class='row']//div[contains(text(),'Scan Type')]")
          .isVisible().should.eventually.equal(true)
      })
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
    it('User should able to log out to login page by clicking on the log out icon',function(){
        return app.client.waitUntilWindowLoaded().click("//i[contains(text(),'logout')]")
        .then(function () {
        return app.client.waitUntilWindowLoaded()
        .element("//a[@id='reset-link']")
        .isVisible().should.eventually.equal(true)   
     })
    })

    it('Maximize buttons should be displayed and function properly',function(){
        return app.client.waitUntilWindowLoaded().click("//i[contains(text(),'crop_square')]")
        .then(function () {
        return app.client.waitUntilWindowLoaded().browserWindow.isMaximized()
       .should.eventually.equal(true)   
     })
    })

    it('Minimize buttons should be displayed and function properly',function(){
        return app.client.waitUntilWindowLoaded().click("//i[contains(text(),'minimize')]")
        .then(function () {
        return app.client.waitUntilWindowLoaded().browserWindow.isMinimized()
       .should.eventually.equal(true)   
     })
})
it('Scan History table should contain following columns (Year, Make, Model, VIN, Scan Date, Scan Phase, Scan Type)'
,function(){
    var e = new Date().getTime() + (7000);
    while (new Date().getTime() <= e) { }
    return app.client.waitUntilWindowLoaded()
    .click("//div[@class='full-width width-99-perc q-list q-list--bordered']/div")
    .then(function () {
        var e = new Date().getTime() + (2000);
       while (new Date().getTime() <= e) { }
        return app.client.waitUntilWindowLoaded()
        .element("//div[@class='row']//div[contains(text(),'Scan Type')]")
        .isVisible().should.eventually.equal(true)
        .then(function () {
            return app.client.waitUntilWindowLoaded()
            .element("//div[@class='row']//div[contains(text(),'Scan Phase')]")
            .isVisible().should.eventually.equal(true)
        .then(function () {
             return app.client.waitUntilWindowLoaded()
         .element("//div[@class='row']//div[contains(text(),'Scan Date')]")
          .isVisible().should.eventually.equal(true)
          .then(function () {
            return app.client.waitUntilWindowLoaded()
            .element("//div[@class='row']//div[contains(text(),'Vehicle Year')]")
            .isVisible().should.eventually.equal(true)
            .then(function () {
                return app.client.waitUntilWindowLoaded()
                .element("//div[@class='row']//div[contains(text(),'Vehicle Make')]")
                .isVisible().should.eventually.equal(true)
                .then(function () {
                    return app.client.waitUntilWindowLoaded()
                    .element("//div[@class='row']//div[contains(text(),'Vehicle Model')]")
                    .isVisible().should.eventually.equal(true)
                    .then(function () {
                        return app.client.waitUntilWindowLoaded()
                        .element("//div[@class='row']//div[contains(text(),'VIN')]")
                        .isVisible().should.eventually.equal(true)
                      })
                  })
              })
          })
              })
          })  
      })
})

it('(CCCDiagnostics) title should be displayed on the page ', function () {
    return app.client.waitUntilWindowLoaded()
    .getTitle().should.eventually.equal(properties.get('main.title'))
 })

 it('Settings, Scan History, Scan buttons should be displayed on the window',function(){
    var e = new Date().getTime() + (7000);
    while (new Date().getTime() <= e) { }
    return app.client.waitUntilWindowLoaded().element("//div[@class='q-list']/div[2]")
    .isVisible().should.eventually.equal(true)
    .then(function () {
        return app.client.waitUntilWindowLoaded()
        .element("//div[@class='q-list']/div[3]")
        .isVisible().should.eventually.equal(true)
        .then(function () {
            return app.client.waitUntilWindowLoaded()
            .element("//div[@class='q-list']/div[1]")
            .isVisible().should.eventually.equal(true)
          })
      })
 })
 it('User should land to Settings window by clicking Settings button',function(){
  var e = new Date().getTime() + (7000);
  while (new Date().getTime() <= e) { }
  return app.client.waitUntilWindowLoaded().click("//div[@class='q-list']/div[3]")
  .then(function () {
    var e = new Date().getTime() + (3000);
  while (new Date().getTime() <= e) { }
    return app.client.waitUntilWindowLoaded()
    .element("//div[contains(text(),'REGISTRATIONS')]")
    .getText().should.eventually.equal('REGISTRATIONS')
  })
 })
 it('User should land to Scan window by clicking Scan button',function(){
  var e = new Date().getTime() + (7000);
  while (new Date().getTime() <= e) { }
  return app.client.waitUntilWindowLoaded().click("//div[@class='q-list']/div[1]")
  .then(function () {
    var e = new Date().getTime() + (3000);
  while (new Date().getTime() <= e) { }
    return app.client.waitUntilWindowLoaded()
    .element("//div[contains(text(),'DIAGNOSTIC SCAN')]")
    .getText().should.eventually.equal('DIAGNOSTIC SCAN')
  })
 })
 it('User should land to Scan History window by clicking Scan History button',function(){
  var e = new Date().getTime() + (7000);
  while (new Date().getTime() <= e) { }
  return app.client.waitUntilWindowLoaded().click("//div[@class='q-list']/div[2]")
  .then(function () {
    var e = new Date().getTime() + (3000);
  while (new Date().getTime() <= e) { }
    return app.client.waitUntilWindowLoaded()
    .element("//div[contains(text(),'DIAGNOSTIC RESULT(S) VIEW')]")
    .getText().should.eventually.equal('DIAGNOSTIC RESULT(S) VIEW')
  })
 })
 it('Scan results table should contain following columns(Modules, DTC and Data List)',function(){
  var e = new Date().getTime() + (9000);
  while (new Date().getTime() <= e) { }
  return app.client.waitUntilWindowLoaded()
  .click("//div[@class='full-width width-99-perc q-list q-list--bordered']/div")
  .then(function () {
      var e = new Date().getTime() + (2000);
     while (new Date().getTime() <= e) { }
      return app.client.waitUntilWindowLoaded().click("//div[@class='col-1']")
      .then(function(){
        var e = new Date().getTime() + (2000);
     while (new Date().getTime() <= e) { }
     return app.client.waitUntilWindowLoaded()
    .element("//input[@aria-label='Modules']/../div")
    .getText().should.eventually.equal('Modules')
    .then(function(){
     return app.client.waitUntilWindowLoaded()
  .element("//div[@class='q-card__section q-pt-none q-pb-none'][2]/div/div[2]")
  .getText().should.eventually.equal('DTC and Data List')
      })
 })
})
})
})