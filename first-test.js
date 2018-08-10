require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();

driver.get("https://andreidbr.github.io/JS30/");

driver.findElement(By.xpath('/html/body/div[2]/div[1]')).click();

driver.wait(until.titleIs('JS30: 01 Drums'), 1000);

driver.close();