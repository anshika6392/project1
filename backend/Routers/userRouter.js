const express = require('express');
const router=express.Router();
const Model=require('../Models/userModel');


router.post('/add',(req,res)=>{
    console.log(req.body);
   
    new Model(req.body).save()
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((err)=>{
        console.log(err);
    });
    
})

//get or read data
router.get('/getall',(req,res)=>{
    Model.find()
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  })


//update data
router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result)=>{
      res.status(200).json(result);
    }).catch((err)=>{
      console.log(err);
      res.status(500).json(err);
      
    });
    });
    

    //delete data


    router.delete('/delete/:id',(req,res)=>{
      Model.findByIdAndDelete(req.params.id) 
      .then((result)=>{
        res.status(200).json(result);
      }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
        
      });
    });



module.exports = router;