const puppeteer = require("puppeteer");

function screen(lien, name, root) {
  const getScreenshot = async () => {
    //const browser = await puppeteer.launch({ headless: false })
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(lien);
    await page.setViewport({ width: 1400, height: 900 });
    await page.screenshot({ path:root+"/"+name +".png" });
    await browser.close();
  };
  getScreenshot();
}

module.exports = {screen};

