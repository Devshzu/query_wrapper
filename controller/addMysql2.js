const express = require('express')
// const connection =require('../config/db')
// const connection = require("../../test/db2")
const {execute} = require("../config/use")

const addController = async (req,res) =>{
  const sql = "INSERT INTO empl (name, salary) VALUES (?,?)"
  const {name, salary} = req.body
//   console.log(name, salary)
  const data= await execute(sql, [name, salary]);
  console.log('data')
  if(data){
    res.status(200).json({success:true,message:'hello i haved one '})
  }else{
    res.status(500).json({
        sucess:false,
        message:'internal server error'
    })
  }
 
 
}

module.exports = addController
