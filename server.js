const express = require("express")

const app = express()

const route = require('./routes/route')

app.get('/', (req, res)=>{
  res.send("Server is running")

})
app.use(express.json())
app.use('/api/v1', route)

app.listen(3000, () => {
    console.log("Bhai Server chal rha hai!");
  })

    
 