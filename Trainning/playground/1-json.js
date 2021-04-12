const fs = require('fs')
// const book={
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON=JSON.stringify(book)
// console.log(bookJSON);
// console.log(book);

// // const parseData=JSON.parse(bookJSON);
// // console.log(parseData.title);
// fs.writeFileSync('1-jsion.json',bookJSON)

// const dataBuffer=fs.readFileSync('1-jsion.json')
// const dataJSON=dataBuffer.toString();
// console.log(dataBuffer.toString());
// const data=JSON.parse(dataJSON);
// console.log(data);

const dataBuffer1=fs.readFileSync('1-jsion.json')
const dataJSON1=dataBuffer1.toString();
const user=JSON.parse(dataJSON1);
user.name="foad"
user.age=54

const userJSON=JSON.stringify(user);
fs.writeFileSync('1-jsion.json',userJSON)






