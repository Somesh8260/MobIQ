const express = require('express');
const router = express.Router();
const {
  getPhones,
  getPhoneById,
  comparePhones,
  getRecommendations,
  getPriceTrackerDeals,
  createPriceAlert
} = require('../controllers/phoneController');

router.get('/phones', getPhones);
router.get('/phones/:id', getPhoneById);
router.get('/compare', comparePhones);
router.post('/recommend', getRecommendations);
router.get('/price-tracker', getPriceTrackerDeals);
router.post('/price-alert', createPriceAlert);

module.exports = router;
