const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const config = require('./config/database');


//Connect to Database
mongoose.connect(config.database, { useMongoClient: true });
mongoose.Promise = global.Promise;

//On Connection
mongoose.connection.on('connected', () => {
  console.log('connected to database ' +config.database);
});

//on error
mongoose.connection.on('error', (err) => {
  console.log('error to database ' +err);
});
app.use(express.static('public'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json());

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// url route localhost:3000/present/
app.use('/present', require('./routes/api'));

// error handling
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || port, function(){
console.log('listening on 3000');
})