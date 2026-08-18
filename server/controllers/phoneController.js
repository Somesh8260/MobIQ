const mongoose = require('mongoose');
const Phone = require('../models/Phone');
const PriceAlert = require('../models/PriceAlert');
const seedPhones = require('../data/seedPhones');

// In-memory memory store
let inMemoryPhones = [...seedPhones];
let inMemoryAlerts = [];

// Helper to check if Mongo is active
const isMongoConnected = () => {
  return mongoose.connection && mongoose.connection.readyState === 1;
};

// Unified helper to get all phones from Mongo or memory
const getAllPhones = async () => {
  if (isMongoConnected()) {
    try {
      const docs = await Phone.find({});
      if (docs && docs.length > 0) return docs.map(d => d.toObject ? d.toObject() : d);
    } catch (err) {
      console.warn('[MobIQ] Fallback to in-memory phones:', err.message);
    }
  }
  return inMemoryPhones;
};

// Auto seed MongoDB if connected and empty or outdated
const autoSeedIfEmpty = async () => {
  if (isMongoConnected()) {
    try {
      const count = await Phone.countDocuments();
      if (count < seedPhones.length) {
        await Phone.deleteMany({});
        await Phone.insertMany(seedPhones);
        console.log(`[MobIQ] Seeded database with ${seedPhones.length} latest smartphones`);
      }
    } catch (err) {
      console.error('[MobIQ] Error seeding DB:', err.message);
    }
  }
};

// @desc Get all phones with filters and sorting
// @route GET /api/phones
exports.getPhones = async (req, res) => {
  try {
    const {
      search,
      brand,
      category,
      minPrice,
      maxPrice,
      minAntutu,
      has5G,
      hasOis,
      minRefreshRate,
      sort
    } = req.query;

    let phones = await getAllPhones();

    // Apply Search
    if (search) {
      const q = search.toLowerCase();
      phones = phones.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.tagline?.toLowerCase().includes(q) ||
        p.specs.processor.name.toLowerCase().includes(q)
      );
    }

    // Filter Brand
    if (brand && brand !== 'all') {
      const brands = brand.split(',').map(b => b.toLowerCase());
      phones = phones.filter(p => brands.includes(p.brand.toLowerCase()));
    }

    // Filter Category
    if (category && category !== 'all') {
      phones = phones.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    // Filter Price Range
    if (minPrice) {
      phones = phones.filter(p => p.basePrice >= Number(minPrice));
    }
    if (maxPrice) {
      phones = phones.filter(p => p.basePrice <= Number(maxPrice));
    }

    // Filter AnTuTu
    if (minAntutu) {
      phones = phones.filter(p => p.specs.processor.antutuScore >= Number(minAntutu));
    }

    // Filter 5G
    if (has5G === 'true') {
      phones = phones.filter(p => p.specs.connectivity?.has5G);
    }

    // Filter OIS
    if (hasOis === 'true') {
      phones = phones.filter(p => p.specs.camera?.hasOis);
    }

    // Filter Refresh Rate
    if (minRefreshRate) {
      phones = phones.filter(p => p.specs.display?.refreshRateHz >= Number(minRefreshRate));
    }

    // Sorting
    switch (sort) {
      case 'price-asc':
        phones.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case 'price-desc':
        phones.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case 'antutu-desc':
        phones.sort((a, b) => (b.specs.processor.antutuScore || 0) - (a.specs.processor.antutuScore || 0));
        break;
      case 'camera-desc':
        phones.sort((a, b) => (b.scores.camera || 0) - (a.scores.camera || 0));
        break;
      case 'battery-desc':
        phones.sort((a, b) => (b.specs.battery.capacityMah || 0) - (a.specs.battery.capacityMah || 0));
        break;
      case 'discount-desc':
        phones.sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));
        break;
      case 'mobiq-desc':
      default:
        phones.sort((a, b) => (b.scores.mobiqIndex || 0) - (a.scores.mobiqIndex || 0));
        break;
    }

    res.json({
      success: true,
      count: phones.length,
      data: phones
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc Get single phone by ID or slug
// @route GET /api/phones/:id
exports.getPhoneById = async (req, res) => {
  try {
    const { id } = req.params;
    const phones = await getAllPhones();
    const phone = phones.find(p => p.id === id || p.slug === id);

    if (!phone) {
      return res.status(404).json({ success: false, message: 'Smartphone not found' });
    }

    res.json({ success: true, data: phone });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc Compare multiple phones side-by-side
// @route GET /api/compare?ids=id1,id2,id3
exports.comparePhones = async (req, res) => {
  try {
    const { ids } = req.query;
    if (!ids) {
      return res.status(400).json({ success: false, message: 'Provide comma-separated phone IDs in ?ids=' });
    }

    const idList = ids.split(',').map(s => s.trim()).filter(Boolean);
    if (idList.length < 2) {
      return res.status(400).json({ success: false, message: 'Provide at least 2 phone IDs to compare' });
    }

    const allPhones = await getAllPhones();
    const selectedPhones = idList
      .map(id => allPhones.find(p => p.id === id || p.slug === id))
      .filter(Boolean);

    if (selectedPhones.length < 2) {
      return res.status(404).json({ success: false, message: 'Could not resolve at least 2 valid phones to compare' });
    }

    // Determine category champions
    const processorWinner = [...selectedPhones].sort((a, b) => b.specs.processor.antutuScore - a.specs.processor.antutuScore)[0];
    const cameraWinner = [...selectedPhones].sort((a, b) => (b.specs.camera.dxomarkScore || 0) - (a.specs.camera.dxomarkScore || 0))[0];
    const batteryWinner = [...selectedPhones].sort((a, b) => {
      const scoreA = a.specs.battery.capacityMah + (a.specs.battery.wiredChargingWatts * 25);
      const scoreB = b.specs.battery.capacityMah + (b.specs.battery.wiredChargingWatts * 25);
      return scoreB - scoreA;
    })[0];
    const displayWinner = [...selectedPhones].sort((a, b) => b.specs.display.peakBrightnessNits - a.specs.display.peakBrightnessNits)[0];
    const valueWinner = [...selectedPhones].sort((a, b) => (b.scores.valueForMoney || 0) - (a.scores.valueForMoney || 0))[0];
    const priceWinner = [...selectedPhones].sort((a, b) => a.basePrice - b.basePrice)[0];
    const overallWinner = [...selectedPhones].sort((a, b) => b.scores.mobiqIndex - a.scores.mobiqIndex)[0];

    res.json({
      success: true,
      phones: selectedPhones,
      winners: {
        processor: { id: processorWinner.id, name: processorWinner.name, highlight: `${processorWinner.specs.processor.name} (${processorWinner.specs.processor.antutuScore.toLocaleString()} AnTuTu)` },
        camera: { id: cameraWinner.id, name: cameraWinner.name, highlight: `${cameraWinner.specs.camera.rearSummary} (${cameraWinner.specs.camera.dxomarkScore} DXO score)` },
        battery: { id: batteryWinner.id, name: batteryWinner.name, highlight: `${batteryWinner.specs.battery.capacityMah}mAh with ${batteryWinner.specs.battery.wiredChargingWatts}W charging` },
        display: { id: displayWinner.id, name: displayWinner.name, highlight: `${displayWinner.specs.display.peakBrightnessNits} nits ${displayWinner.specs.display.panelType}` },
        valueForMoney: { id: valueWinner.id, name: valueWinner.name, highlight: `${valueWinner.scores.valueForMoney}/100 Value Rating` },
        lowestPrice: { id: priceWinner.id, name: priceWinner.name, highlight: `₹${priceWinner.basePrice.toLocaleString('en-IN')}` },
        overall: { id: overallWinner.id, name: overallWinner.name, highlight: `MobIQ Index: ${overallWinner.scores.mobiqIndex}/100` }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc Smart Recommendation AI Algorithm ("Find My Perfect Phone")
// @route POST /api/recommend
exports.getRecommendations = async (req, res) => {
  try {
    const {
      budget = 50000,
      priority = 'all_rounder',
      preferredBrand = 'any',
      preferredOS = 'any',
      screenPreference = 'any',
      fastChargingRequired = false
    } = req.body;

    let phones = await getAllPhones();

    // Filter within budget with a flexible +15% ceiling for great value upgrades
    const maxBudget = Number(budget);
    const budgetPhones = phones.filter(p => p.basePrice <= maxBudget * 1.15);

    if (budgetPhones.length === 0) {
      return res.json({
        success: true,
        recommendations: [],
        message: 'No phones found strictly in this range, try expanding your budget slider.'
      });
    }

    // Compute tailored match score
    const scoredPhones = budgetPhones.map(phone => {
      let matchScore = 50; // base
      let reasons = [];

      // 1. Budget proximity bonus
      if (phone.basePrice <= maxBudget) {
        matchScore += 15;
        if (phone.basePrice <= maxBudget * 0.9) {
          matchScore += 5;
          reasons.push(`Comfortably under your budget (₹${phone.basePrice.toLocaleString('en-IN')})`);
        }
      } else {
        matchScore -= 5;
        reasons.push(`Slightly above budget but delivers flagship-grade features worth the stretch`);
      }

      // 2. Priority weighting
      if (priority === 'gaming') {
        const perfWeight = (phone.scores.performance / 100) * 30;
        matchScore += perfWeight;
        if (phone.specs.processor.antutuScore >= 1200000) {
          reasons.push(`Blazing fast ${phone.specs.processor.name} (${phone.specs.processor.antutuScore.toLocaleString()} AnTuTu) runs games with max FPS`);
        }
        if (phone.specs.display.refreshRateHz >= 120) {
          reasons.push(`Fluid ${phone.specs.display.refreshRateHz}Hz refresh rate for competitive responsiveness`);
        }
      } else if (priority === 'camera') {
        const camWeight = (phone.scores.camera / 100) * 30;
        matchScore += camWeight;
        if (phone.specs.camera.hasOis) {
          reasons.push(`Optical Image Stabilization (OIS) prevents blurry shots and shaky video`);
        }
        if (phone.specs.camera.opticalZoom && phone.specs.camera.opticalZoom !== 'None') {
          reasons.push(`Dedicated optical telephoto zoom (${phone.specs.camera.opticalZoom}) for crisp portraits`);
        } else {
          reasons.push(`Flagship ${phone.specs.camera.mainMP}MP main sensor for vibrant low-light photography`);
        }
      } else if (priority === 'battery') {
        const batWeight = (phone.scores.battery / 100) * 30;
        matchScore += batWeight;
        reasons.push(`Long endurance ${phone.specs.battery.capacityMah}mAh battery with ${phone.specs.battery.wiredChargingWatts}W fast charging`);
        if (phone.specs.battery.chargerInBox) {
          reasons.push(`Fast power adapter provided inside the retail box`);
        }
      } else if (priority === 'clean_os') {
        if (phone.brand === 'Nothing' || phone.brand === 'Apple' || phone.brand === 'Google' || phone.brand === 'Motorola') {
          matchScore += 25;
          reasons.push(`Clean, bloatware-free UI (${phone.specs.software.uiSkin}) with long update promise`);
        }
      } else if (priority === 'value') {
        const valWeight = (phone.scores.valueForMoney / 100) * 30;
        matchScore += valWeight;
        reasons.push(`Top-tier Value for Money index (${phone.scores.valueForMoney}/100)`);
      } else {
        // all_rounder
        matchScore += (phone.scores.mobiqIndex / 100) * 25;
        reasons.push(`Well-balanced scores across Camera, Battery, Performance and Display`);
      }

      // 3. Brand preference match
      if (preferredBrand && preferredBrand !== 'any') {
        if (phone.brand.toLowerCase() === preferredBrand.toLowerCase()) {
          matchScore += 15;
          reasons.push(`Matches your preferred brand: ${phone.brand}`);
        } else {
          matchScore -= 10;
        }
      }

      // 4. OS preference match
      if (preferredOS && preferredOS !== 'any') {
        if (phone.specs.software.osName.toLowerCase() === preferredOS.toLowerCase()) {
          matchScore += 10;
        } else {
          matchScore -= 20;
        }
      }

      // 5. Fast charging filter
      if (fastChargingRequired) {
        if (phone.specs.battery.wiredChargingWatts >= 67) {
          matchScore += 8;
          reasons.push(`Ultra-rapid ${phone.specs.battery.wiredChargingWatts}W charging (0-100% in ~${phone.specs.battery.chargingTimeMinutes} mins)`);
        }
      }

      // Normalize match score between 65 and 99%
      const finalPercentage = Math.min(99, Math.max(65, Math.round(matchScore)));

      return {
        phone,
        matchPercentage: finalPercentage,
        reasons: reasons.slice(0, 4)
      };
    });

    // Sort by matchPercentage descending
    scoredPhones.sort((a, b) => b.matchPercentage - a.matchPercentage);

    res.json({
      success: true,
      count: scoredPhones.length,
      topMatches: scoredPhones.slice(0, 4),
      allMatches: scoredPhones
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc Get deals & price drops analytics across Amazon, Flipkart, Croma
// @route GET /api/price-tracker
exports.getPriceTrackerDeals = async (req, res) => {
  try {
    const phones = await getAllPhones();

    // 1. All-time low deals
    const allTimeLows = phones.filter(p => p.priceAnalysis?.priceStatus === 'All-Time Low');

    // 2. Biggest price drops
    const biggestDrops = [...phones].sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));

    // 3. Best time to buy (Buy Now verdicts)
    const buyNowPicks = phones.filter(p => p.priceAnalysis?.timeToBuyVerdict?.includes('BUY NOW'));

    // 4. Multi-store lowest distribution
    let storeCounts = { Amazon: 0, Flipkart: 0, Croma: 0, RelianceDigital: 0, OfficialStore: 0 };
    phones.forEach(p => {
      const best = p.priceAnalysis?.currentBestStore;
      if (best === 'Amazon') storeCounts.Amazon++;
      else if (best === 'Flipkart') storeCounts.Flipkart++;
      else if (best === 'Croma') storeCounts.Croma++;
      else if (best === 'Reliance Digital') storeCounts.RelianceDigital++;
      else storeCounts.OfficialStore++;
    });

    res.json({
      success: true,
      stats: {
        totalTrackedPhones: phones.length,
        allTimeLowCount: allTimeLows.length,
        bestTimeBuyCount: buyNowPicks.length,
        storeDistribution: storeCounts
      },
      allTimeLows: allTimeLows.slice(0, 8),
      biggestDrops: biggestDrops.slice(0, 8),
      buyNowPicks: buyNowPicks.slice(0, 8)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc Create a price drop alert
// @route POST /api/price-alert
exports.createPriceAlert = async (req, res) => {
  try {
    const { phoneId, phoneName, targetPrice, currentPrice, userEmail, preferredStore } = req.body;

    if (!phoneId || !targetPrice || !userEmail) {
      return res.status(400).json({ success: false, message: 'Please provide phoneId, targetPrice, and userEmail' });
    }

    const alertData = {
      phoneId,
      phoneName: phoneName || 'Smartphone',
      targetPrice: Number(targetPrice),
      currentPrice: Number(currentPrice || targetPrice),
      userEmail,
      preferredStore: preferredStore || 'Any',
      status: 'Active',
      createdAt: new Date()
    };

    if (isMongoConnected()) {
      await PriceAlert.create(alertData);
    } else {
      inMemoryAlerts.push(alertData);
    }

    res.json({
      success: true,
      message: `Price drop alert registered for ${alertData.phoneName}! We'll notify ${userEmail} as soon as the price falls to ₹${alertData.targetPrice.toLocaleString('en-IN')}.`,
      data: alertData
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Run auto-seed on module initialization if DB connects
autoSeedIfEmpty();
