// const express=require('express');
// const bodyParser=require('body-parser');
// const app=express();
// const port=8002;
// const usersRoute=require('../routes/users.routes')

// // const usersJSON=require('./users.json')
// console.log(usersRoute)
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())

// app.use('/api/users',usersRoute)

// // app.get('/',(req,res)=>{
// //     res.json({success:'isgood'})
// // });

// // app.get('/users/:id',(req,res)=>{
// //     console.log(req.params)
// //     let result=usersJSON.users.filter((user)=>{
// //         return user.id==req.params.id
// //     })
// //     if(result.length===0){
// //         res.status(200).json({error:"user not found"})
// //     }
// //     else{
// //         res.json({success:result})
// //     }
// // });

// // app.get('/users',(req,res)=>{
// //     res.status(200).json({success:[1,2,3,4]})
// // });


// // app.post('/',(req,res)=>{
// //     console.log(req.body)
// //     return res.send("test")
// // })

// app.listen(port,()=>{
//     console.log(port)
// })

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =8002;
const usersRoute = require('../routes/users.routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users',usersRoute);

app.listen(port,()=>{
    console.log(`application start at ${port}`)
})