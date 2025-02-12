const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function headlessTest() {
    // Set Chrome options for headless mode
    let options = new chrome.Options();
    options.addArguments('--headless'); // Run in headless mode
    options.addArguments('--disable-gpu'); // Disable GPU acceleration (useful for headless)
    options.addArguments('--window-size=1920,1080'); // Set window size to avoid viewport issues

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    let startTime = Date.now(); 
    try {
        await driver.get('https://selenium-practice.netlify.app/');

        let nameField = await driver.findElement(By.xpath("//input[@name='name']"));
        await nameField.sendKeys('Naveen Meena');

        let dropdown = await driver.findElement(By.id('selection'));
        await dropdown.sendKeys('Item 2'); 

        let checkbox = await driver.findElement(By.xpath("//input[@name='check2']"));
        await checkbox.click();

        let dateField = await driver.findElement(By.xpath("//input[@name='date']"));
        await dateField.sendKeys('2025-02-21');

        let submitButton = await driver.findElement(By.xpath("//button[text()='Submit']"));
        await submitButton.click();

        let successMessage = await driver.wait(
            until.elementLocated(By.className("success")),
            5000
        );

        console.log("Test Passed: Form submitted successfully!");
    } catch (error) {
        console.error("Test Failed:", error);
    } finally {
        let endTime = Date.now(); 
        console.log(`Execution Time: ${(endTime - startTime) / 1000} seconds`);
        await driver.quit(); 
    }
})();
