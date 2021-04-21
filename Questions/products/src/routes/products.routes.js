const express=require('express');
const router=express.Router();
const productsController=require('../controllers/products.controller')
require('../db/mongoose')
const Product=require('../models/product.model')


router.get('/',(req,res)=>{
    Product.find({}).then((products)=>{
        res.send(products)
    }).catch((e)=>{
        res.status(500).send()
    })
}).get('/five',(req,res)=>{
    //console.log("osama")
    //let newProducts=[]
    // Product.find({}).then((products)=>{
        // for (let i = 0; i < products.length; i++) {
            
        //     if(products[i].details.price>=50&&products[i].details.price<=100){
        //         newProducts.push(products[i])
        //         console.log(products[i].details.price);
        //     }
            
        // }

        Product.find({ $and: [{ "details.price": { $gte: 0 } }, { "details.price": { $lt: 100 } }] }).then((products)=>{
            res.send(products)
        })

        // res.send(newProducts)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })


}).put('/:id',(req,res)=>{
    const {id}=req.params;
    const{price}=req.body;
    // Product.findById(id).then((product)=>{
    //     product.price=price
    //     product.save();
    //     res.send('succsess')
    // })
    // Product.findOneAndUpdate({_id:id},{price:price},(err,res)=>{
    //     if(err) return res.send(err)
    //     return res.send(res)
    // })

    Product.findByIdAndUpdate(id,{price:price},(err,doc)=>{
        if(err) return res.send(err)
        if(!doc) return res.json({error:"error no doc"})
        return res.send({sucsses:doc})
    })
    
}).delete('/:id',(req,res)=>{
    const {id}=req.params
    //Product.findByIdAndDelete(id)
    Product.findOneAndDelete({_id:id},(err,doc)=>{
        if(err) return res.send(err)
        if(doc) res.send(doc)
        return res.json({error:'id not found'})
    })
}).get('/:id',(req,res)=>{
    const _id=req.params.id
    console.log("request")
    Product.findById(_id).then((product)=>{
        if(!product){
            return res.status(404).send()
        }
        res.send(product)
    }).catch((e)=>{
        res.status(500).send()
    })
    console.log(req.params._id)

}).post('/',(req,res)=>{
    console.log(req.body);
    const product=new Product(req.body)
    product.save().then(()=>{
        res.status(201).send(product)
    }).catch((error)=>{
        res.status(400).send("error: "+error)

    })
})


module.exports = router;