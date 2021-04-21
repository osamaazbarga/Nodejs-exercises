const mongoose=require('mongoose')


const connectionURL='mongodb://127.0.0.1:27017/products'
mongoose.connect('mongodb://127.0.0.1:27017/products',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false

})

//const ObjectId=mongoose.Types.ObjectId()
// console.log(ObjectId.getTimestamp());

// const id= new ObjectId
// console.log(id);


// const me=new product({
//                 name:'jjjjt',
//                 category:'cars',
//                 isActive:true,
//                 details:{
//                     description:'red',
//                     price:-1,
//                     pic:["osama","foad"],
//                     phone:'0507323314'
//                 }
//             }
// )

// const me=new product({
//     name:'mazda',
//     category:'cars',
//     isActive:true,
//     details:{
//         description:'black mazda 2011',
//         price:20,
//         discount:30,
//         pic:[],
//         phone:'0507323312',
//         DateAdded:new Date()
//     }
// }
// )


// const me=new product({
//     name:'table',
//     category:'home garden',
//     isActive:true,
//     details:{
//         description:'wood table 120*20',
//         price:120,
//         discount:30,
//         pic:[],
//         phone:'0507323432',
//         DateAdded:new Date()
//     }
// }
// )


// me.save().then(()=>{
//     console.log(me);

// }).catch((error)=>{
//     console.log('Error',error);
// })
