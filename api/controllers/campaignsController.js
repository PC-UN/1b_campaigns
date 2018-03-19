'use strict';


var mongoose = require('mongoose'),
  Campaign = mongoose.model('Campaigns');

//Get all campaigns
exports.getCampaigns = function(req, res) {
  Campaign.find({}, function(err, campaign) {
    if (err)
      res.send(err);
    res.json(campaign);
  });
};

//Create campaign
exports.createCampaign = function(req, res) {
  var new_campaign = new Campaign(req.body);
  new_campaign.save(function(err, campaign) {
    if (err)
      res.send(err);
    res.json(campaign);
  });
};

//Get campaign
exports.getCampaign = function(req, res) {
  Campaign.findById(req.params.campaignId, function(err, campaign) {
    if (err)
      res.send(err);
    res.json(campaign);
  });
};

//Update campaign
exports.updateCampaign = function(req, res) {
  Campaign.findOneAndUpdate({_id: req.params.campaignId}, req.body, {new: true}, function(err, campaign) {
    if (err)
      res.send(err);
    res.json(campaign);
  });
};

//Delete campaign
exports.deleteCampaign = function(req, res) {
  Campaign.remove({
    _id: req.params.campaignId
  }, function(err, campaign) {
    if (err)
      res.send(err);
    res.json({ message: 'Campaign successfully deleted' });
  });
};
