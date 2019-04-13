const chalk= require('chalk')
const validator=  require('validator')
const fs= require('fs')
//fs.writeFileSync('Note1','this is a place where we can do any things')
fs.appendFileSync('notes.txt','this file was created by the node js');
fs.appendFileSync('notes.txt','My name is arvind kumar yadav')
console.log(validator.isEmail("arvind.yadav@.com"));
console.log(validator.isURL("http:/.gmail.com"))
console.log(chalk.red.inverse.blue("this is my ball"))