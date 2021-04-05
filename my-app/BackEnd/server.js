const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://admin:studentmania@cluster0.ryrsz.mongodb.net/modulesDB?retryWrites=true&w=majority";



// Connecting to the MongoDB
mongoose.connect(mongoDB,{useNewUrlParser:true});

// Cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse Application/Json
app.use(bodyParser.json())

// Database Schemas
const Schema = mongoose.Schema;

// mongoose 
const forumSchema = new Schema({
    name:String,
    email:String,
    feedback:String
})

const ForumModel = mongoose.model('forum', forumSchema);

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

app.delete('/api/forums/:id', (req, res)=>{
    console.log(req.params.id);

    ForumModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})

app.post('/api/forums', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.feedback);

    ForumModel.create({
        name:req.body.name,
        email:req.body.email,
        feedback:req.body.feedback
    })
    res.json('post received!');
})
app.post('/api/forums/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.feedback);

    ForumModel.create({
        name:req.body.name,
        email:req.body.email,
        feedback:req.body.feedback
    })
    res.json('post received!');
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