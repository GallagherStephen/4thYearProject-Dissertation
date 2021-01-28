const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://Admin:ED0X5B0zjIwgqThr@cluster0-5yrpw.mongodb.net/partsDb?retryWrites=true&w=majority";

//===========================
// Connecting to the MongoDB
//===========================
mongoose.connect(mongoDB,{useNewUrlParser:true});

//==========================
// Cors : required for Auth
//==========================
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//========================================
// Parse application/x-www-form-urlencoded
//========================================

app.use(bodyParser.urlencoded({ extended: false }))


//======================
// Parse Application/Json
//======================

app.use(bodyParser.json())

//=====================
// Module Schemas
//=====================
const Schema = mongoose.Schema;
const moduleSchema = new Schema({
    name:String,
    lecturer:String,
    semester:String
    
})

const forumSchema = new Schema({
    name:String,
    email:String,
    question:String
})

//=====================
// Mongoose Models
//=====================
const ModuleModel = mongoose.model('module', moduleSchema);


const ForumModel = mongoose.model('forum', forumSchema);

//==================================================================================
// Handling various requests from client, to the server, to the relevent databases.
// Get Requests
//==================================================================================
app.get('/modulesDb', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

//-----------
//modules
//-----------
app.get('/api/modules', (req, res) => {
    ModuleModel.find((error, data) =>{
        res.json({modules:data});
    })
})
app.get('/api/modules/:id', (req, res) => {
    console.log(req.params.id);

    ModuleModel.findById(req.params.id, (error,data)=>{
        res.json({modules:data});
    })
})
//-----------
//forums
//-----------
app.get('/api/forums', (req, res) => {
    ForumModel.find((error, data) =>{
        res.json({forums:data});
    })
})
app.get('/api/forums/:id', (req, res) => {
    console.log(req.params.id);

    ForumModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

//==========================
// Delete Requests 
//==========================

app.delete('/api/modules/:id', (req, res)=>{
    console.log(req.params.id);

    ModuleModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})
app.delete('/api/forums/:id', (req, res)=>{
    console.log(req.params.id);

    ForumModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})
//==========================
// Post Requests
//==========================

//--------
//modules
//--------
app.post('/api/modules', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.lecturer);
    console.log(req.body.semester);

    ModuleModel.create({
        name:req.body.name,
        lecturer:req.body.lecturer,
        semester:req.body.semester
    })
    res.json('post received!');
})
app.post('/api/modules/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.lecturer);
    console.log(req.body.semester);

    ModuleModel.create({
        name:req.body.name,
        lecturer:req.body.lecturer,
        semester:req.body.semester
    })
    res.json('post received!');
})

//--------
//forums
//--------
app.post('/api/forums', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.question);

    ForumModel.create({
        name:req.body.name,
        email:req.body.email,
        question:req.body.question
    })
    res.json('post received!');
})
app.post('/api/forums/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.question);

    ForumModel.create({
        name:req.body.name,
        email:req.body.email,
        question:req.body.question
    })
    res.json('post received!');
})


//===============
// Put Requests
//===============
app.put("/api/modules/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    ModuleModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})

app.put("/api/forums/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    ForumModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})

// Port Listener (Port 4000)
app.listen(port, () => console.log(`Listening on port ${port}!`))