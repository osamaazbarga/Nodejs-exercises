const express=require('express');
const router=express.Router();
const userJSON=require('../import-export/users.json')

router.get('/',(req,res)=>{
    console.log(userJSON)
    return res.status(200).json({users:userJSON.users})
}).get('/:id',(req,res)=>{
    return res.status(200).json({users:userJSON.users[req.params.id]})

}).post('/',(req,res)=>{
    const {name, capsule} = req.body;
    console.log(userJSON);
    users.push({
        id: users[users.length - 1].id + 1,
        name: name,
        capsule: capsule
    })
    return res.status(200).json({success: "user add to db"})
}).put('/:id', (req, res) => {
    const {id} = req.params;
    const {capsule} = req.body;

    if (!capsule || id < 0) {
        res.status(204).send("error")
    }

    let user = users.find((u) => {
        return u.id == id
    })

    if (!user) {
        res.status(204).send("error")
    }

    users[id].capsule = capsule
    res.status(200).send("success")
}).delete('/:id',(req,res)=>{

})

module.exports=router;