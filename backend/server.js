const express = require('express')
const session = require('express-session');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const txnRoutes = require('./routes/transac')
const contactRoute = require("./routes/contact");
const nodemailer = require("nodemailer");
require('dotenv').config()

//express app
const app=express()

// const mongoose=require('mongoose')
connectDB();

//deployment
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

// middleware
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000', // Your frontend origin
    credentials: true,
  }));

  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", "https://expense-tracker-y2l8.onrender.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/txn', txnRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoute);

// connect to db
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         // listen for requests
//         app.listen(process.env. PORT, () => {
//         console.log('connected to db and listening on port', process.env.PORT)
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
