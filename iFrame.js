import { Builder, By } from 'selenium-webdriver';

(async function iframeExample() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://the-internet.herokuapp.com/iframe');

        // Switch to iframe by ID
        await driver.switchTo().frame('mce_0_ifr');

        // Locate text area and type
        let editor = await driver.findElement(By.css('#tinymce'));
        await editor.clear();
        await editor.sendKeys('Hello from Selenium!');

        console.log("Text entered in iframe!");

        // Switch back to main document
        await driver.switchTo().defaultContent();
    } finally {
        await driver.quit();
    }
})();
