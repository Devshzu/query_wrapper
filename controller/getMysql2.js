const express = require('express')
const { execute } = require('../config/use')
// const connection =require('../../test/db2')

const getController = async (req, res) =>{
 const query = "SELECT * FROM empl"
const val = await execute(query)
if(val){
    res.status(200).json({success:true,res: val,message:'hello i haved one '})
  }else{
    res.status(500).json({
        sucess:false,
        message:'internal server error'
    })
  }
}

module.exports = getController