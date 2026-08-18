const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  slug: { type: String, required: true },
  tagline: String,
  releaseDate: String,
  imageUrl: String,
  category: {
    type: String,
    enum: ['Flagship', 'Upper Mid-Range', 'Mid-Range', 'Budget', 'Gaming', 'Camera-Centric'],
    default: 'Mid-Range'
  },
  basePrice: { type: Number, required: true },
  originalPrice: Number,
  discountPercentage: Number,
  specs: {
    processor: {
      name: String,
      chipset: String,
      nanometer: Number,
      cpuCores: Number,
      gpu: String,
      antutuScore: Number,
      geekbenchSingle: Number,
      geekbenchMulti: Number,
      gamingFpsRating: String
    },
    display: {
      sizeInch: Number,
      panelType: String,
      resolution: String,
      refreshRateHz: Number,
      peakBrightnessNits: Number,
      protection: String,
      hdrSupport: String
    },
    camera: {
      rearSummary: String,
      mainMP: Number,
      mainSensor: String,
      mainAperture: String,
      hasOis: Boolean,
      ultraWideMP: Number,
      ultraWideFov: Number,
      telephotoMP: Number,
      opticalZoom: String,
      frontMP: Number,
      videoCapabilities: String,
      dxomarkScore: Number
    },
    battery: {
      capacityMah: Number,
      wiredChargingWatts: Number,
      wirelessChargingWatts: Number,
      chargingTimeMinutes: Number,
      batteryLifeHours: Number,
      chargerInBox: Boolean
    },
    ramStorage: {
      ramOptions: [String],
      storageOptions: [String],
      expandableStorage: Boolean
    },
    software: {
      osName: String,
      osVersion: String,
      promisedOsUpdatesYears: Number,
      promisedSecurityUpdatesYears: Number,
      uiSkin: String
    },
    build: {
      weightGrams: Number,
      thicknessMm: Number,
      ipRating: String,
      backMaterial: String,
      frameMaterial: String
    },
    connectivity: {
      has5G: Boolean,
      fiveGBandsCount: Number,
      wifiVersion: String,
      bluetoothVersion: String,
      hasNfc: Boolean
    }
  },
  scores: {
    performance: Number,
    camera: Number,
    battery: Number,
    display: Number,
    valueForMoney: Number,
    mobiqIndex: Number
  },
  stores: [
    {
      storeName: String,
      price: Number,
      originalPrice: Number,
      inStock: Boolean,
      dealBadge: String,
      bankOffers: [String],
      storeLogo: String,
      productUrl: String,
      rating: Number,
      ratingCount: Number
    }
  ],
  priceHistory: [
    {
      date: String,
      amazonPrice: Number,
      flipkartPrice: Number,
      cromaPrice: Number,
      lowestPrice: Number,
      event: String
    }
  ],
  priceAnalysis: {
    allTimeLow: Number,
    allTimeHigh: Number,
    averagePrice: Number,
    currentBestPrice: Number,
    currentBestStore: String,
    priceDropAmount: Number,
    priceStatus: String,
    timeToBuyVerdict: String,
    verdictReason: String,
    nextPredictedSale: String
  },
  pros: [String],
  cons: [String],
  targetAudience: [String]
}, { timestamps: true });

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
