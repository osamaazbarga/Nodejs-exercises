const validator=require('validator')
const chalk=require('chalk')
const yargs =require('yargs');
const { argv } = require('yargs');
const notes =require('./notes')

const command=process.argv[2];
const num1=parseInt(process.argv[3]);
const num2=parseInt(process.argv[4]);



yargs.command({
    command:'add',
    describe:'sum of 2 numbers',
    builder:{
        title:{
            describe:"note title add",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"note body add",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(){
        console.log(argv._[1]+argv._[2]);
    }
})


yargs.command({
    command:'sub',
    describe:'sub of 2 numbers',
    handler:function(){
        console.log(argv._[1]-argv._[2]);
        // console.log(argv.title)
    }
})

yargs.command({
    command:'mul',
    describe:'multiply of 2 numbers',
    handler:function(){
        console.log(argv._[1]*argv._[2]);
    }
})

yargs.command({
    command:'mul',
    describe:'ppwer of the number',
    handler:function(){
        console.log(argv._[1]*argv._[1]);
    }
})
// const calctotal=function(){

//     switch (command) {
//         case 'add':return num1+num2;break;
//         case 'sub':return num1-num2;break;
//         case 'mult':return num1*num2;break;
//         case 'pow':return num1*num1;break;
    
    
//         default:
//             break;
//     }
// }

// console.log(calctotal());

// console.log(yargs.argv._);
yargs.parse()
