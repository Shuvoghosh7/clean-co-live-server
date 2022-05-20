const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port=process.env.PORT || 5000;
const app=express()


//meddle ware
app.use(cors({
    origin:"*",
}));
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.zvnon.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const servicesCollection=client.db("cleanCo").collection("services")
        console.log("DB Connected sss")

        app.get('/service',async(req,res)=>{
            
            const services=await servicesCollection.find({}).toArray()
            res.send(services)
        })

    }
    finally{

    }

}
run().catch(console.dir)

app.get('/',(req,res)=>{
    res.send('running clean co server')
})


app.listen(port,()=>{
    console.log('lising the port',port)
})


