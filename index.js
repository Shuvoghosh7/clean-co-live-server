const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port=process.env.PORT || 5000;
const app=express()


//meddle ware
app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('running genuse server')
})


app.listen(port,()=>{
    console.log('lising the port',port)
})


