'use strict';

var _mochaSteps = require('mocha-steps');

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe.skip('Mocha Steps Demo', function () {
    var page = void 0;
    //let mobile;

    before('setUp', async function () {
        page = await _builder2.default.build('Desktop');
        //mobile = await Page.build('Mobile');
    });

    after('tearDown', async function () {
        await page.close();
        //await mobile.close();
    });

    (0, _mochaSteps.step)('Should load google homepage', async function () {
        await page.goto('http://zero.webappsecurity.com/');
        await page.waitAndClick('#onlineBankingMenu');
        await page.waitForTimeout(2000);
    });
});