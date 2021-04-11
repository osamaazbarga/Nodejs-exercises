const fs=require('fs')
fs.writeFileSync('note.txt','this file was created by Node.js')
fs.copyFileSync('note.txt','copynote.txt')
fs.renameSync('copynote.txt','copynote2.txt')
fs.readdirSync('./').forEach(file => {
    console.log(file);
});

fs.appendFileSync('note.txt',' osama')

