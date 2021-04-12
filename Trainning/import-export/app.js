const validator=require('validator')
const chalk=require('chalk')
const yargs =require('yargs')

const notes =require('./calc')



// const name =require('./utils.js')


// console.log(name);

// const add =require('./utils.js')


// console.log(add(4,-2));

const notes =require('./notes')

const msg=getnotes();

console.log(msg);

console.log(validator.isURL('hotmail.com'));

console.log(chalk.bold.bgYellow.inverse.red("osama"));

console.log(process.argv)

const command=process.argv[2]

if(command==='add'){
    console.log(command);
}
else if(command=='remove'){
    console.log('remove');
}

console.log(yargs.argv);


