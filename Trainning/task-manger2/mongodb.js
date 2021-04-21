const db = require("mongodb");

const mongodb=require('mongodb')
const MongoClint=mongodb.MongoClient
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manger'
const ObjectId=mongodb.ObjectID
const id= new ObjectId
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString().length);



MongoClint.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        return console.log('unable to connect to database')
    }
    console.log('connected')
    const db = client.db(databaseName)


    // db.collection('users').deleteMany({
    //     age:25
    // }).then((result)=>{
    //     console.log(result);
    
    // }).catch((error)=>{
    //     console.log(error);
    
    // })

    db.collection('tasks').deleteOne({
        description:'clean the house'
    }).then((result)=>{
        console.log(result);
    
    }).catch((error)=>{
        console.log(error);
    
    })

    // db.collection('users').updateOne({_id:new ObjectId("607fde673560708ac0f896e6")},{
    //     $set:{
    //         name:'foad'
    //     }
    // }).then((result)=>{
    //     console.log(result);

    // }).catch((error)=>{
    //     console.log(error);

    // })

    // db.collection('users').findOne({name:'osama'},
    // (error,result)=>{
    //         if(error){
    //             return console.log('unable to fetch')
    //         }
    //         console.log(result);
    //     }
    // )

    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'foad',
    //     age:22

    // },(error,result)=>{
    //     if(error){
    //         return console.log('unable to insert tasks')
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'clean the house',
    //         completed:true
    //     },{
    //         description:'renew inspection',
    //         completed:false
    //     },{
    //         description:'pot plants',
    //         completed:false
    //     },
    
    
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('unable to insert tasks')
    //     }
    //     console.log(result.ops);
    // })

})
