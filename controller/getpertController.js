const express = require('express')
const connection =require('../config/db')
const { execute } = require('../config/use')

const getperController = async(req, res) =>{
    const {id} = req.params
    console.log(id)
 const query = "SELECT * FROM empl WHERE id = ?"
   const val = await execute(query, id)
   if(val){
    res.status(200).json({success:true,res: val,message:'hello i haved one '})
  }else{
    res.status(500).json({
        sucess:false,
        message:'internal server error'
    })
  }
}

module.exports = getperController