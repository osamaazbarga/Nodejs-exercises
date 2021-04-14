const express=require('express');
const router=express.Router();
const roomJSON=require('./rooms.json');
const workerJSON=require('./workers.json');
const roomController=require('./controllers/rooms.controller')
const workerController=require('./controllers/workers.controller')

const fs=require('fs');


router.get('/',(req,res)=>{
    roomController.getRooms(req,res);
}).get('/:id',(req,res)=>{
    roomController.getRoomById(req,res)
}).post('/',(req,res)=>{
    roomController.addRoom(req,res)
}).post('/addworker',(req,res)=>{
    roomController.addWorkerToRoom(req,res)
}).delete('/deleteworker',(req,res)=>{
    roomController.deleteWorkerFromRoom(req,res)
})

module.exports=router;