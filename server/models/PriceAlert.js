const mongoose = require('mongoose');

const priceAlertSchema = new mongoose.Schema({
  phoneId: { type: String, required: true },
  phoneName: { type: String, required: true },
  targetPrice: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  userEmail: { type: String, required: true },
  preferredStore: { type: String, default: 'Any' },
  status: { type: String, enum: ['Active', 'Triggered', 'Cancelled'], default: 'Active' },
  createdAt: { type: Date, default: Date.now }
});

const PriceAlert = mongoose.model('PriceAlert', priceAlertSchema);

module.exports = PriceAlert;
