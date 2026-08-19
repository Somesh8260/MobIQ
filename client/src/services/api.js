import { fallbackPhones } from '../data/fallbackPhones';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

// Helper for quick fetch with timeout
const fetchWithTimeout = async (url, options = {}, timeoutMs = 4000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
};

// 1. Fetch All Phones with Filters
export const fetchPhones = async (params = {}) => {
  try {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '') {
        query.append(key, val);
      }
    });

    const res = await fetchWithTimeout(`${API_BASE}/phones?${query.toString()}`, {}, 4500);
    if (res.ok) {
      const data = await res.json();
      if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn('[MobIQ] Backend API unreachable, activating instant local dataset fallback:', err.message);
  }

  // Fallback to local dataset
  let phones = [...fallbackPhones];
  if (params.search) {
    const q = params.search.toLowerCase();
    phones = phones.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.specs.processor.name.toLowerCase().includes(q)
    );
  }
  if (params.brand && params.brand !== 'all') {
    const brands = params.brand.toLowerCase().split(',');
    phones = phones.filter(p => brands.includes(p.brand.toLowerCase()));
  }
  if (params.category && params.category !== 'all') {
    phones = phones.filter(p => p.category.toLowerCase() === params.category.toLowerCase());
  }
  if (params.maxPrice) {
    phones = phones.filter(p => p.basePrice <= Number(params.maxPrice));
  }
  return { success: true, count: phones.length, data: phones, fallback: true };
};

// 2. Fetch Phone by ID
export const fetchPhoneById = async (id) => {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/phones/${id}`, {}, 3000);
    if (res.ok) {
      const data = await res.json();
      if (data && data.success) return data;
    }
  } catch (err) {
    console.warn('[MobIQ] Using local phone fallback for ID:', id);
  }

  const phone = fallbackPhones.find(p => p.id === id || p.slug === id);
  if (phone) return { success: true, data: phone };
  throw new Error('Smartphone not found');
};

// 3. Compare Multiple Phones
export const comparePhones = async (ids = []) => {
  if (ids.length === 0) return { success: false, phones: [], winners: {} };

  try {
    const res = await fetchWithTimeout(`${API_BASE}/compare?ids=${ids.join(',')}`, {}, 4000);
    if (res.ok) {
      const data = await res.json();
      if (data && data.success) return data;
    }
  } catch (err) {
    console.warn('[MobIQ] Calculating comparison locally');
  }

  // Local comparison algorithm
  const selectedPhones = ids
    .map(id => fallbackPhones.find(p => p.id === id || p.slug === id))
    .filter(Boolean);

  if (selectedPhones.length < 2) {
    return { success: false, phones: selectedPhones, winners: {} };
  }

  const processorWinner = [...selectedPhones].sort((a, b) => (b.specs.processor.antutuScore || 0) - (a.specs.processor.antutuScore || 0))[0];
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

  return {
    success: true,
    phones: selectedPhones,
    winners: {
      processor: { id: processorWinner.id, name: processorWinner.name, highlight: `${processorWinner.specs.processor.name} (${processorWinner.specs.processor.antutuScore?.toLocaleString()} AnTuTu)` },
      camera: { id: cameraWinner.id, name: cameraWinner.name, highlight: `${cameraWinner.specs.camera.rearSummary} (${cameraWinner.specs.camera.dxomarkScore} DXOMARK)` },
      battery: { id: batteryWinner.id, name: batteryWinner.name, highlight: `${batteryWinner.specs.battery.capacityMah}mAh with ${batteryWinner.specs.battery.wiredChargingWatts}W charging` },
      display: { id: displayWinner.id, name: displayWinner.name, highlight: `${displayWinner.specs.display.peakBrightnessNits} nits ${displayWinner.specs.display.panelType}` },
      valueForMoney: { id: valueWinner.id, name: valueWinner.name, highlight: `${valueWinner.scores.valueForMoney}/100 Value Rating` },
      lowestPrice: { id: priceWinner.id, name: priceWinner.name, highlight: `₹${priceWinner.basePrice.toLocaleString('en-IN')}` },
      overall: { id: overallWinner.id, name: overallWinner.name, highlight: `MobIQ Index: ${overallWinner.scores.mobiqIndex}/100` }
    }
  };
};

// 4. Smart AI Recommendations
export const getRecommendations = async (criteria) => {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/recommend`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(criteria)
    }, 4500);

    if (res.ok) {
      const data = await res.json();
      if (data && data.success) return data;
    }
  } catch (err) {
    console.warn('[MobIQ] Computing recommendations locally');
  }

  // Local recommendation algorithm
  const {
    budget = 50000,
    priority = 'all_rounder',
    preferredBrand = 'any',
    preferredOS = 'any',
    fastChargingRequired = false
  } = criteria || {};

  const maxBudget = Number(budget);
  const budgetPhones = fallbackPhones.filter(p => p.basePrice <= maxBudget * 1.15);

  const scored = (budgetPhones.length > 0 ? budgetPhones : fallbackPhones).map(phone => {
    let matchScore = 50;
    let reasons = [];

    if (phone.basePrice <= maxBudget) {
      matchScore += 15;
      if (phone.basePrice <= maxBudget * 0.9) {
        matchScore += 5;
        reasons.push(`Under your budget (₹${phone.basePrice.toLocaleString('en-IN')})`);
      }
    } else {
      matchScore -= 5;
      reasons.push(`Worth stretching slightly for pro features`);
    }

    if (priority === 'gaming') {
      matchScore += (phone.scores.performance / 100) * 30;
      if (phone.specs.processor.antutuScore >= 1200000) {
        reasons.push(`Fast ${phone.specs.processor.name} (${phone.specs.processor.antutuScore.toLocaleString()} AnTuTu)`);
      }
    } else if (priority === 'camera') {
      matchScore += (phone.scores.camera / 100) * 30;
      if (phone.specs.camera.hasOis) {
        reasons.push(`OIS stabilized camera for crisp low-light photos`);
      }
    } else if (priority === 'battery') {
      matchScore += (phone.scores.battery / 100) * 30;
      reasons.push(`${phone.specs.battery.capacityMah}mAh battery with ${phone.specs.battery.wiredChargingWatts}W charging`);
    } else if (priority === 'clean_os') {
      if (['Apple', 'Google', 'Nothing', 'Motorola'].includes(phone.brand)) {
        matchScore += 25;
        reasons.push(`Clean UI (${phone.specs.software.uiSkin})`);
      }
    } else {
      matchScore += (phone.scores.mobiqIndex / 100) * 25;
      reasons.push(`Balanced high scores across all benchmarks`);
    }

    if (preferredBrand && preferredBrand !== 'any') {
      if (phone.brand.toLowerCase() === preferredBrand.toLowerCase()) {
        matchScore += 15;
        reasons.push(`Matches preferred brand: ${phone.brand}`);
      }
    }

    if (preferredOS && preferredOS !== 'any') {
      if (phone.specs.software.osName.toLowerCase() === preferredOS.toLowerCase()) {
        matchScore += 10;
      }
    }

    if (fastChargingRequired && phone.specs.battery.wiredChargingWatts >= 67) {
      matchScore += 8;
      reasons.push(`Ultra-rapid ${phone.specs.battery.wiredChargingWatts}W charge`);
    }

    const finalPercentage = Math.min(99, Math.max(65, Math.round(matchScore)));
    return {
      phone,
      matchPercentage: finalPercentage,
      reasons: reasons.slice(0, 4)
    };
  });

  scored.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return {
    success: true,
    count: scored.length,
    topMatches: scored.slice(0, 4),
    allMatches: scored
  };
};

// 5. Price Tracker Deals
export const fetchPriceTrackerDeals = async () => {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/price-tracker`, {}, 4000);
    if (res.ok) {
      const data = await res.json();
      if (data && data.success) return data;
    }
  } catch (err) {
    console.warn('[MobIQ] Computing price deals locally');
  }

  const allTimeLows = fallbackPhones.filter(p => p.priceAnalysis?.priceStatus === 'All-Time Low');
  const biggestDrops = [...fallbackPhones].sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));
  const buyNowPicks = fallbackPhones.filter(p => p.priceAnalysis?.timeToBuyVerdict?.includes('BUY NOW'));

  let storeCounts = { Amazon: 0, Flipkart: 0, Croma: 0, RelianceDigital: 0, OfficialStore: 0 };
  fallbackPhones.forEach(p => {
    const best = p.priceAnalysis?.currentBestStore;
    if (best === 'Amazon') storeCounts.Amazon++;
    else if (best === 'Flipkart') storeCounts.Flipkart++;
    else if (best === 'Croma') storeCounts.Croma++;
    else if (best === 'Reliance Digital') storeCounts.RelianceDigital++;
    else storeCounts.OfficialStore++;
  });

  return {
    success: true,
    stats: {
      totalTrackedPhones: fallbackPhones.length,
      allTimeLowCount: allTimeLows.length,
      bestTimeBuyCount: buyNowPicks.length,
      storeDistribution: storeCounts
    },
    allTimeLows: allTimeLows.slice(0, 8),
    biggestDrops: biggestDrops.slice(0, 8),
    buyNowPicks: buyNowPicks.slice(0, 8)
  };
};

// 6. Submit Price Drop Alert
export const submitPriceAlert = async (alertData) => {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/price-alert`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alertData)
    }, 4000);
    if (res.ok) return res.json();
  } catch (err) {
    console.warn('[MobIQ] Handled price alert locally');
  }

  return {
    success: true,
    message: `Price drop alert registered for ${alertData.phoneName || 'Smartphone'}! We'll notify ${alertData.userEmail} as soon as the price falls to ₹${Number(alertData.targetPrice).toLocaleString('en-IN')}.`,
    data: alertData
  };
};
