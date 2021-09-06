import { step } from 'mocha-steps'
import Page from '../builder'

describe.skip('Mocha Steps Demo', ()=>{
    let page; 
    //let mobile;

    before('setUp', async()=>{
        page = await Page.build('Desktop');
        //mobile = await Page.build('Mobile');
    })

    after('tearDown',async()=>{
        await page.close();
        //await mobile.close();

    })

    step('Should load google homepage', async()=>{
        await page.goto('http://zero.webappsecurity.com/');
        await page.waitAndClick('#onlineBankingMenu');
        await page.waitForTimeout(2000);
    })
})