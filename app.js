const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors');
const express = require('express')
const connectToDb = require('./db/db')


connectToDb()

const app =  express()

app.use(cors());
app.get('/', function(req, res ){
    res.send("hii abhi")
})

module.exports = app;