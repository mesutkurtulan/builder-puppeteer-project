import { expect } from 'chai';
import { step } from 'mocha-steps'
import Page from '../builder'
import LoginPage from '../pages/LoginPage'

describe('Mocha Steps Demo', ()=>{
    let page; 
    let loginPage

    before('setUp', async()=>{
        page = await Page.build('Desktop');
        loginPage = await new LoginPage(page);
    })

    after('tearDown',async()=>{
        await page.close();

    })

    step('Should load homepage', async()=>{
        await page.goto('http://zero.webappsecurity.com/');
        const signInButton = await page.isElementVisible('#signin_button')
        expect(signInButton).to.be.true;

    })

    step('Should display the login form', async()=>{
        await page.waitAndClick('#signin_button')
        const loginForm = await page.isElementVisible('#login_form')
        expect(loginForm).to.be.true;
        const signInButton = await page.isElementVisible('#signin_button')
        expect(signInButton).to.be.false;
    })

    step('Should login to the appplication', async()=>{
        //await page.waitAndType('#user_login', 'username');
        //await page.waitAndType('#user_password', 'password');
        //await page.waitAndClick('input[type=submit]');

        await loginPage.login('username','password');

        await page.waitAndClick('#details-button');
        await page.waitAndClick('#proceed-link');

        const navBar = await page.isElementVisible('.nav.nav-tabs');
        expect(navBar).to.be.true;
    })

    step('Should have 6 links', async()=>{
        const navbarLinksCount = await page.getCount('.nav-tabs li');
        expect(navbarLinksCount).to.equal(6);
        
    })
})