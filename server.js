var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Campaign = require('./api/models/campaignsModel.js'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://campaigns_db/');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/campaignsRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('campaign ms server started on: ' + port);
