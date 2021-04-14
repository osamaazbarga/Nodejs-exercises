const roomJSON=require('../rooms.json');

const getRooms=(req,res)=>{
    console.log(roomJSON)
    return res.status(200).json({rooms:roomJSON})
}

const getRoomById=(req,res)=>{
    const duplicateroom=roomJSON.find((room)=>room.roomNumber==req.params.id)
    if(duplicateroom){
        return res.status(200).json({room:duplicateroom})
    }
    else {
        return res.status(200).json({error:"room is undinded"})
    }
}

const addRoom=(req,res)=>{
    const {roomNumber} = req.body;
    const duplicateroom=roomJSON.find((room)=>room.roomNumber===roomNumber)
    if(duplicateroom){
        return res.status(200).json({error: "the exist in db"})
    }
    else if(!roomNumber){
        return res.status(200).json({error: "enter room number"})
    }else{
        const rooms=roomJSON
        console.log(roomJSON)
        const obj={
            roomNumber:roomNumber,
            amount:0,
            isActive: false,
            workers:[]
        }
        rooms.push(obj)
        // console.log(rooms)
        const dataJSON=JSON.stringify(rooms)
        fs.writeFileSync('exercise-express/rooms.json',dataJSON)
        //return res.status(200).json({success: "user add to db"})
        return res.send(obj)

    }
}


const addWorkerToRoom=(req,res)=>{
    const {roomNumber,workerId}=req.body
    // console.log(req.body);
    // console.log(workerId);
    // console.log(roomNumber);


    // console.log(req.params.roomnum);
    const duplicateroom=roomJSON.find((room)=>room.roomNumber==roomNumber);
    // console.log(duplicateroom)
    const duplicateworker=workerJSON.find((worker)=>worker.id==workerId);
    // console.log(duplicateworker)
    

    if(duplicateroom==undefined||duplicateworker==undefined)
    {
        return res.status(200).json({error: "the exist is undefinded"})
    }
    // else if(roomNumber==''||workerId==''){
    //     return res.status(200).json({error: "enter room number and worker id"})
    // }
    else if(duplicateroom){
        for (let i = 0; i < duplicateroom.workers.length; i++) {
            // console.log(duplicateworker)
            if(duplicateroom.workers[i].id===duplicateworker.id){
                return res.status(200).json({error: "the worker is allready in room"})
            }
        }

        let rooms=roomJSON
        for (let i = 0; i < rooms.length; i++) {
            if(rooms[i].roomNumber==duplicateroom.roomNumber){
                rooms[i].workers.push(duplicateworker)
                // return res.status(200).json({success: "user add to room"})
            } 
        }
        // rooms.workers.push(duplicateworker)
        const dataJSON=JSON.stringify(rooms)
        fs.writeFileSync('exercise-express/rooms.json',dataJSON)
        return res.status(200).json({success: "user added to room"})
    }
}

const deleteWorkerFromRoom=(req,res)=>{
    const {roomNumber,workerId}=req.body
    const duplicateroom=roomJSON.find((room)=>room.roomNumber==roomNumber);
    console.log(duplicateroom);
    const duplicateworker=workerJSON.find((worker)=>worker.id==workerId);

    if(duplicateroom==undefined||duplicateworker==undefined)
    {
        return res.status(200).json({error: "the exist is undefinded"})
    }else if(duplicateroom){
        for (let i = 0; i < duplicateroom.workers.length; i++) {
            // console.log(duplicateworker)
            if(duplicateroom.workers[i].id===duplicateworker.id){
                let rooms=roomJSON
                for (let j = 0; j < rooms.length; j++) {
                    if(rooms[j].roomNumber==duplicateroom.roomNumber){
                        // rooms[i].workers.push(duplicateworker)
                        // console.log(rooms[j].workers.find((work)=>console.log(work)))
                        for (let w = 0; w < rooms[j].workers.length; w++) {
                            if(rooms[j].workers[w].id==duplicateworker.id){
                                rooms[j].workers.splice(i,1);
                                const dataJSON=JSON.stringify(rooms)
                                fs.writeFileSync('exercise-express/rooms.json',dataJSON)
                                return res.status(200).json({success: "user has been deleted"})
                            }
                            
                        }

                        // return res.status(200).json({success: "user add to room"})
                    } 
                }
            }
        }
    }
}




module.exports={
    getRooms,
    getRoomById,
    addRoom,
    addWorkerToRoom,
    deleteWorkerFromRoom

}