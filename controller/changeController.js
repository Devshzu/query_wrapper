const express = require('express')
const connection = require("../config/db")
const { execute } = require('../config/use')

const changeController = async(req, res) =>{
    const {name, salary}  = req.body
    const {id} = req.params
const query = "UPDATE empl SET name=?, salary=? WHERE id=?"
 const val = await execute(query, [name, salary, id])
//  console.log(name, salary)
 if(val){
    res.status(200).json({success:true,res: val,message:'hello i haved one '})
  }else{
    res.status(500).json({
        sucess:false,
        message:'internal server error'
    })
  }
}

module.exports = changeController