const { Builder, By } = require('selenium-webdriver');

async function runTest(url) {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(url);
    let title = await driver.getTitle();
    console.log(`Page Title: ${title}`);
  } finally {
    await driver.quit();
  }
}

test('Google Test', async () => {
  await runTest('https://www.google.com');
});

test('Wikipedia Test', async () => {
  await runTest('https://www.wikipedia.org');
});

test('GitHub Test', async () => {
  await runTest('https://github.com');
});
