const {pool} = require("../config/db")
const mysql2 = require("mysql2")

 pool.getConnection((err, res)=>{
  if (err) {
    console.log("Bhai db nhi chal rha hai!")
  }
 console.log("Bhai db chal gya hai!")
 })

 exports.execute = ((sql, val)=>{
    console.log("sql value",val)
    return new Promise((resolve, reject)=>{
        pool.query(sql, val, (err, res)=>{
    if (err) {
        console.log('hello')
        reject(err)
        console.log('error',err)
        return 
    }
    else{
        console.log('res--',res)
        resolve(res)
    }
        })
    })
 })
