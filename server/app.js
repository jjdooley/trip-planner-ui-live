const path = require('path');
const express = require('express');
const app = express();
const db = require('../models').db;
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const routes = require('../routes')

// you'll of course want static middleware so your browser can request things like your 'index.html' and 'bundle.js'.  
app.use(express.static(path.join(__dirname, '..', 'public')))


app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);

var port = 3023;
app.listen(port, function() {
  console.log("The server is listening closely on port", port);
  db
    .sync()
    .then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});

// Any routes or other various middlewares should go here!