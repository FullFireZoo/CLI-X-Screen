const puppeteer = require("puppeteer")


function screen (lien, name){
const getScreenshot = async () => {
//const browser = await puppeteer.launch({ headless: false })
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(lien)
  await page.setViewport({ width: 1400, height: 900 })
  await page.screenshot({ path:name })
  await browser.close()
}
getScreenshot()
}

screen("http://www.google.com", "ggscreen2.png")