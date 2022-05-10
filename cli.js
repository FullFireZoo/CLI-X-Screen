const inquirer = require('inquirer')
import {screen} from './screenshot.js'
inquirer.prompt([
    {
        type:'input',
        message:'quel est votre lien à screen ?',
        name:'lien'
    },
    {
        type:'input',
        message:'quel est le nom du screen ?',
        name:'nom'
    },
    {
        type:'confirm',
        message: 'le lien et le nom sont-ils corrects ?',
        default: false,
        name: 'confirmation'
    },
    {
        type: screen(lien, nom),
        when:answer =>answer.confirmation

    }
]).then(answers => {console.log(answers);})