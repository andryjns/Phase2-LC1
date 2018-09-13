'use strict'

require('dotenv').config()
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require('cors')

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_MONGO);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected')
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router)    

app.listen(3000, () => {
    console.log("App server is running on port 3000")
})