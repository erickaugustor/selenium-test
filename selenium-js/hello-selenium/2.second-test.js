require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();

driver.get("https://www.google.com/");

// driver.findElement(By.id('sb_ifc0')).click();

// driver.wait(until.titleIs('JS30: 01 Drums'), 1000);

driver.close();