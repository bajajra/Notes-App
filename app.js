const validator = require('validator')
const chalk = require('chalk')
const fs = require('fs')
const  getNotes = require('./utils/notes.js')
const msg = getNotes()
//fs.writeFileSync('notes.txt','This file was created by JS');
//fs.appendFileSync('note1.json', JSON.stringify({1:"rahul"}) );
//require('')
console.log(msg)
console.log(validator.isEmail('rbajaj@gmail.com'))
console.log(chalk.bold.bgBlueBright("Success!"))