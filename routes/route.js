const express = require('express')
const route = express.Router();
const removeController = require('../controller/removeController')
const changeController = require('../controller/changeController')
const getperController = require("../controller/getpertController")
const addMysql2 = require("../controller/addMysql2")
const getnewController = require("../controller/getMysql2")


route.get('/getnew', getnewController)
route.get('/get/:id', getperController)
route.post('/addnew', addMysql2)
route.delete('/remove/:id', removeController)
route.put('/change/:id', changeController)

module.exports = route