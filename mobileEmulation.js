import { Builder, Capabilities } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

(async function mobileEmulation() {
    let options = new chrome.Options();

    // ✅ Use a valid device name
    options.setMobileEmulation({
        deviceMetrics: { width: 430, height: 932, pixelRatio: 3 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.177 Mobile Safari/537.36'
    });
    

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .withCapabilities(Capabilities.chrome())
        .build();

    try {
        await driver.get('https://www.google.com');
        console.log("Mobile emulation successful!");

    } finally {
        await driver.quit();
    }
})();
