const express=require('express');
const router=express.Router();
// const workerJSON=require('./workers.json');
const workerController=require('./controllers/workers.controller')
const fs=require('fs');


router.get('/',(req,res)=>{
    // console.log(workerJSON)
    // return res.status(200).json({workers:workerJSON})
    console.log(workerController)
    workerController.getWorkers(req,res)
}).get('/:id',(req,res)=>{
    // const duplicateworker=workerJSON.find((worker)=>worker.id==req.params.id)
    // if(duplicateworker){
    //     return res.status(200).json({worker:duplicateworker})
    // }
    // else {
    //     return res.status(200).json({error:"worker is undinded"})
    // }
    workerController.getWokerById(req,res);
    // return res.status(200).json({workers:workerJSON.workers[req.params.id]})
}).post('/',(req,res)=>{
    // const {id, name} = req.body;
    // const duplicateworker=workerJSON.find((worker)=>worker.id===id)
    // console.log(duplicateworker)
    // if(duplicateworker){
    //     return res.status(200).json({error: "the exist in db"})
    // }
    // else if(!name||!id){
    //     return res.status(200).json({error: "enter id and name"})
    // }else if(name.length<6 || !name.includes(' ')){
    //     return res.status(200).json({error: "name must include space and length bigger than 5"})

    // }
    
    // else{
    //     const workers=workerJSON
    //     console.log(workerJSON)
    //     const obj={
    //         id: id,
    //         name: name,
    //         isActive: false
    //     }
    //     workers.push(obj)
    //     // console.log(workers)
    //     const dataJSON=JSON.stringify(workers)
    //     fs.writeFileSync('exercise-express/workers.json',dataJSON)
    //     //return res.status(200).json({success: "user add to db"})
    //     return res.send(obj)

    // }

    workerController.addWorkers(req,res)
    
})


module.exports=router;