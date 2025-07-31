const express = require ( 'express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./db/db')
const userRoutes = require('./routes/user.route');

const app = express()
connectDB()
app.use(cors())
app.use(express.json());

app.get('/', (req , res ) =>{
    res.send("hello abhi")
}
)

app.use('/users', userRoutes);


 module.exports = app;
