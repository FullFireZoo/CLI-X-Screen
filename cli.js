const inquirer = require('inquirer')
/* It's importing the function `screen` from the file `screenshot.js` */
// const screen = require("./screenshot.js")
const puppeteer = require("puppeteer");



inquirer.prompt([
    {
        type:'input',
        message:'quel est votre lien à screen ?',
        name:'lien'
    },
    {
        type:'input',
        message:"quel est le nom du screen (n'oublie pas le .png) ?",
        name:'nom'
    },
    {
        type:'confirm',
        message: 'le lien et le nom sont-ils corrects ?',
        default: false,
        name: 'confirmation'
    }
]).then(answer => {
    console.log(`Vous avez fait screen de ${answer.lien} est le screen s'appelle ${answer.nom}...`)

    function screen(lien,nom) {
        const getScreenshot = async () => {
          //const browser = await puppeteer.launch({ headless: false })
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto(lien,);
          await page.setViewport({ width: 1400, height: 900 });
          await page.screenshot({ path:nom });
          await browser.close();
        };
        getScreenshot();
      }
      screen(answer.lien, answer.nom)
})