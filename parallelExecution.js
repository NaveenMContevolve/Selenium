import { Builder, By } from 'selenium-webdriver';
import { expect } from 'chai';

async function runTest(url) {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(url);
    let title = await driver.getTitle();
    console.log(`Page Title: ${title}`);
    expect(title).to.not.be.empty;
  } finally {
    await driver.quit();
  }
}

describe('Parallel Selenium Tests', function () {
  this.timeout(60000); 

  it('Test Google', async function () {
    return runTest('https://www.google.com'); 
  });

  it('Test Wikipedia', async function () {
    return runTest('https://www.wikipedia.org'); 
  });

  it('Test GitHub', async function () {
    return runTest('https://github.com'); 
  });
});
