const { Builder, By, Key, until } = require('selenium-webdriver');

(async function bingSearch() {
    console.time("Execution Time"); 

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.bing.com/hp?mkt=us-eN');

        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('selenium vs playwright', Key.RETURN);

        await driver.wait(until.elementLocated(By.css('li.b_algo h2 a')), 10000);

        console.log('Search completed');
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await driver.quit();
        console.timeEnd("Execution Time"); 
    }
})();
