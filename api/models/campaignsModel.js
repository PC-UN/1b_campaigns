'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampaignSchema = new Schema({
  //Campaign name
  name: String,
  //Campaign city
  city: String,
  //Campaign address
  address: String,
  ubication: [Array],
  //Campaign dates
  //created_date: String,
  created_date: { type: Date, default: Date.now },
  start_date: Date,
  end_date: Date,
  //Campaign status
  status: { type: String,  enum: ['active', 'inactive'], default: 'active'},
  // Campaign program
  program: String
});

module.exports = mongoose.model('Campaigns', CampaignSchema);
