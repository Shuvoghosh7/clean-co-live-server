const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port=process.env.PORT || 5000;
const app=express()


//meddle ware
app.use(cors());
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.zvnon.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log('db connectedss')
});

app.get('/',(req,res)=>{
    res.send('running clean co server')
})


app.listen(port,()=>{
    console.log('lising the port',port)
})


