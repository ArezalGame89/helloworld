// imports dog
const pug = require('pug');

// compile nonshit
const templateCompiler = pug.compileFile('poopshit.pug');

// Insert your data into the template file
console.log(templateCompiler({ name: 'Whatever your name is!' });