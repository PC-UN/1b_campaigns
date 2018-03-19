'use strict';
module.exports = function(app) {
  var campaigns = require('../controllers/campaignsController.js');

  // campaigns Routes
  app.route('/campaigns')
    .get(campaigns.getCampaigns)
    .post(campaigns.createCampaign);


  app.route('/campaigns/:campaignId')
    .get(campaigns.getCampaign)
    .put(campaigns.updateCampaign)
    .delete(campaigns.deleteCampaign);
};
