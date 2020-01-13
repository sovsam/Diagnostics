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

describe('Scan function', function () {
  this.timeout(40000);
  beforeEach(function () {
    return app.start()
  })
  afterEach(function () {
    if (app && app.isRunning()) {
      return app.stop()
    }
  })

  it('Verify Scan function', function () {
    return app.browserWindow.maximize()
      .then(function () {
        return app.client.element("//input[@type='text']").setValue('fake')
      }).then(function () {
        return app.client.element("//input[@type='password']").setValue('password')
      }).then(function () {
        return app.client.waitUntilWindowLoaded().click("//button[@type='submit']")
      }).then(function () {
        var e = new Date().getTime() + (6000);
        while (new Date().getTime() <= e) { }
      }).then(function () {
        return app.client.waitUntilWindowLoaded().element("//div[@class='q-item__label']")
          .isVisible().should.eventually.equal(true)
      }).then(function () {
        return app.client.waitUntilWindowLoaded().element("//input[@class='q-field__native q-placeholder']")
          .getValue().should.eventually.equal('Honda-Diagnostics-Scan')
      }).then(function () {
        return app.client.waitUntilWindowLoaded().element("//i[@class='material-icons q-icon q-select__dropdown-icon']").click()
      }).then(function () {
        var e = new Date().getTime() + (4000);
        while (new Date().getTime() <= e) { }
      }).then(function () {
        return app.client.waitUntilWindowLoaded().element("(//div[@class='q-virtual-scroll__content'])/div/div[2]/div").click()
      }).then(function () {
        return app.client.waitUntilWindowLoaded().element("//textarea[@type='textarea']").setValue(' Scanning for first time')
      }).then(function () {
        return app.client.waitUntilWindowLoaded().element("//div[@label='Available Scanning Device(s)']/button").click()

      }).then(function () {
        var e = new Date().getTime() + (5000);
        while (new Date().getTime() <= e) { }

      }).then(function () {
        return app.client.waitUntilWindowLoaded().element("//div[@class='col-12']/button").click()
      }).then(function () {
        var e = new Date().getTime() + (14000);
        while (new Date().getTime() <= e) { }
      }).then(function () {
        return app.client.waitUntilWindowLoaded().element("//div[@class='col-12']/button[3]")
          .isVisible().should.eventually.equal(true)
      })
  })
})