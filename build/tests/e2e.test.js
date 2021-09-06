'use strict';

var _chai = require('chai');

var _mochaSteps = require('mocha-steps');

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

var _LoginPage = require('../pages/LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocha Steps Demo', function () {
    var page = void 0;
    var loginPage = void 0;

    before('setUp', async function () {
        page = await _builder2.default.build('Desktop');
        loginPage = await new _LoginPage2.default(page);
    });

    after('tearDown', async function () {
        await page.close();
    });

    (0, _mochaSteps.step)('Should load homepage', async function () {
        await page.goto('http://zero.webappsecurity.com/');
        var signInButton = await page.isElementVisible('#signin_button');
        (0, _chai.expect)(signInButton).to.be.true;
    });

    (0, _mochaSteps.step)('Should display the login form', async function () {
        await page.waitAndClick('#signin_button');
        var loginForm = await page.isElementVisible('#login_form');
        (0, _chai.expect)(loginForm).to.be.true;
        var signInButton = await page.isElementVisible('#signin_button');
        (0, _chai.expect)(signInButton).to.be.false;
    });

    (0, _mochaSteps.step)('Should login to the appplication', async function () {
        //await page.waitAndType('#user_login', 'username');
        //await page.waitAndType('#user_password', 'password');
        //await page.waitAndClick('input[type=submit]');

        await loginPage.login('username', 'password');

        await page.waitAndClick('#details-button');
        await page.waitAndClick('#proceed-link');

        var navBar = await page.isElementVisible('.nav.nav-tabs');
        (0, _chai.expect)(navBar).to.be.true;
    });

    (0, _mochaSteps.step)('Should have 6 links', async function () {
        var navbarLinksCount = await page.getCount('.nav-tabs li');
        (0, _chai.expect)(navbarLinksCount).to.equal(6);
    });
});