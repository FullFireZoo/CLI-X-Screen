const inquirer = require('inquirer')
const {screen} = require("./screenshot")
console.log(screen)


inquirer.prompt([
    {
        type:'input',
        message:'quel est votre lien à screen ?',
        name:'lien'
    },
    {
        type:'input',
        message:"quel est le nom du screen ?",
        name:'nom'
    },
    {
        type:'input',
        message:`Dans quel dossier veux-tu mettre ton screen ? \n(exemple : /Users/admin/Downloads) `,
        name:'root'
    },
    {
        type:'confirm',
        message: 'le lien et le nom sont-ils corrects ?',
        default: false,
        name: 'confirmation'
    }
]).then(answer => {
    console.log(`Vous avez fait screen de ${answer.lien} est le screen s'appelle ${answer.nom}...`)
      screen(answer.lien, answer.nom, answer.root)
})