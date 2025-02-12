import { Builder, By } from 'selenium-webdriver';

(async function shadowDomExample() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.htmlelements.com/demos/button/shadow-dom/index.htm');

        let shadowHost = await driver.findElement(By.css('smart-ui-button'));

        let shadowRoot = await driver.executeScript("return arguments[0].shadowRoot", shadowHost);

        let shadowButton = await shadowRoot.findElement(By.css('button'));

        await shadowButton.click();

        console.log("Shadow DOM button clicked!");
    } finally {
        await driver.quit();
    }
})();
