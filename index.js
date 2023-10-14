require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser')
const router =require('./routes/routes')


const app = express();

// Setting Up view engine and Views Folder
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

// Database
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://shivanshu:shivanshu@htracker.ythnzxi.mongodb.net/habitTracker?retryWrites=true&w=majority',
    { useNewUrlParser: true })
    .then(()=>{
        console.log("connected to database!");
    })
    .catch((err)=>{
        console.log(err);
    })


// Connecting Assets Folder / Static Files
app.use("/assets", express.static('./assets'));
app.use( bodyParser.urlencoded({ extended: true }) );

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Setting up routes
app.use(router);
const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`Server running at port: http://localhost:${PORT}`);
})
