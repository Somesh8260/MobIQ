import React, { useState, useEffect } from 'react';
import { 
  TrendingDown, TrendingUp, Calendar, ShoppingBag, ShieldCheck, 
  Clock, Bell, AlertCircle, Sparkles, ExternalLink, Check, DollarSign, 
  ArrowDownRight, CheckCircle2, ChevronRight, Tag
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fetchPriceTrackerDeals, submitPriceAlert } from '../services/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function PriceTrackerPage({ allPhones = [], onSelectPhone }) {
  const [selectedPhone, setSelectedPhone] = useState(allPhones[0] || null);
  const [dealsData, setDealsData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Price alert state
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [targetPrice, setTargetPrice] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [alertSuccessMessage, setAlertSuccessMessage] = useState('');
  const [alertLoading, setAlertLoading] = useState(false);

  useEffect(() => {
    if (allPhones.length > 0 && !selectedPhone) {
      setSelectedPhone(allPhones[0]);
    }
  }, [allPhones]);

  useEffect(() => {
    fetchPriceTrackerDeals()
      .then(data => {
        if (data.success) setDealsData(data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (!selectedPhone) {
    return <div className="p-8 text-center text-slate-400">Loading price tracking engine...</div>;
  }

  // Build Chart Data
  const history = selectedPhone.priceHistory || [];
  const chartLabels = history.map(h => `${h.date} (${h.event || 'Sale'})`);
  const amazonPrices = history.map(h => h.amazonPrice || selectedPhone.basePrice);
  const flipkartPrices = history.map(h => h.flipkartPrice || selectedPhone.basePrice);
  const lowestPrices = history.map(h => h.lowestPrice || selectedPhone.basePrice);

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Lowest Price Across Stores',
        data: lowestPrices,
        borderColor: '#00f2fe',
        backgroundColor: 'rgba(0, 242, 254, 0.1)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#00f2fe',
        pointBorderColor: '#fff',
        pointRadius: 6,
        pointHoverRadius: 9,
        borderWidth: 3
      },
      {
        label: 'Flipkart Price',
        data: flipkartPrices,
        borderColor: '#3b82f6',
        backgroundColor: 'transparent',
        borderDash: [5, 5],
        tension: 0.3,
        pointRadius: 4,
        borderWidth: 2
      },
      {
        label: 'Amazon Price',
        data: amazonPrices,
        borderColor: '#f59e0b',
        backgroundColor: 'transparent',
        borderDash: [3, 3],
        tension: 0.3,
        pointRadius: 4,
        borderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#cbd5e1',
          font: { family: 'Inter', size: 12, weight: '500' }
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#38bdf8',
        bodyColor: '#f8fafc',
        borderColor: '#334155',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ₹${context.raw.toLocaleString('en-IN')}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#94a3b8', font: { size: 11 } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: {
          color: '#94a3b8',
          callback: function(val) {
            return '₹' + (val / 1000) + 'k';
          }
        }
      }
    }
  };

  const handleCreateAlert = async (e) => {
    e.preventDefault();
    if (!targetPrice || !userEmail) return;
    setAlertLoading(true);
    try {
      const res = await submitPriceAlert({
        phoneId: selectedPhone.id,
        phoneName: selectedPhone.name,
        targetPrice: Number(targetPrice),
        currentPrice: selectedPhone.basePrice,
        userEmail
      });
      if (res.success) {
        setAlertSuccessMessage(res.message);
        setTimeout(() => {
          setShowAlertModal(false);
          setAlertSuccessMessage('');
          setTargetPrice('');
        }, 3000);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setAlertLoading(false);
    }
  };

  const analysis = selectedPhone.priceAnalysis || {};

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-300">
            <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
            Live Multi-Store Price & Time Tracker
          </div>
          <h2 className="text-3xl font-black text-white font-heading mt-2">
            Flipkart vs Amazon vs Croma <span className="gradient-text-cyan">Price Intelligence</span>
          </h2>
          <p className="text-sm text-slate-400">
            Track historical lowest prices, compare live retailer deals, and know exactly when to buy.
          </p>
        </div>

        {/* Quick Phone Selector Dropdown */}
        <div className="w-full md:w-auto">
          <label className="block text-xs font-semibold text-slate-400 mb-1">Select Phone to Track:</label>
          <select
            value={selectedPhone.id}
            onChange={(e) => {
              const p = allPhones.find(x => x.id === e.target.value);
              if (p) setSelectedPhone(p);
            }}
            className="w-full md:w-72 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold text-white focus:outline-none focus:border-cyan-500"
          >
            {allPhones.map(p => (
              <option key={p.id} value={p.id}>
                {p.name} (₹{p.basePrice.toLocaleString('en-IN')})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Selected Phone Price Overview Box */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
        
        {/* Top Summary Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-4 flex items-center gap-4">
            <img
              src={selectedPhone.imageUrl}
              alt={selectedPhone.name}
              className="w-24 h-24 object-contain rounded-2xl bg-slate-950 p-2 border border-slate-800"
            />
            <div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                {selectedPhone.brand}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{selectedPhone.name}</h3>
              <p className="text-xs text-slate-400">{selectedPhone.specs.processor.name}</p>
            </div>
          </div>

          {/* Key Pricing Metrics Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-[10px] font-semibold text-slate-400 uppercase">Current Best Price</div>
              <div className="text-xl font-black text-cyan-400 mt-0.5">
                ₹{selectedPhone.basePrice.toLocaleString('en-IN')}
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">
                Lowest on {analysis.currentBestStore || 'Flipkart'}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 bg-emerald-500/5">
              <div className="text-[10px] font-semibold text-emerald-400 uppercase">All-Time Low</div>
              <div className="text-xl font-black text-emerald-300 mt-0.5">
                ₹{analysis.allTimeLow?.toLocaleString('en-IN')}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Lowest recorded price</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-[10px] font-semibold text-slate-400 uppercase">All-Time High</div>
              <div className="text-xl font-bold text-slate-300 mt-0.5">
                ₹{analysis.allTimeHigh?.toLocaleString('en-IN')}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Launch MRP</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-[10px] font-semibold text-slate-400 uppercase">Total Price Drop</div>
              <div className="text-xl font-black text-emerald-400 mt-0.5">
                -₹{analysis.priceDropAmount?.toLocaleString('en-IN')}
              </div>
              <div className="text-[10px] text-emerald-400/90 font-medium mt-0.5">
                Save {selectedPhone.discountPercentage}% off launch
              </div>
            </div>

          </div>

        </div>

        {/* AI "Best Time to Buy" Verdict Banner */}
        <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
          analysis.timeToBuyVerdict?.includes('BUY NOW')
            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
            : 'bg-amber-950/40 border-amber-500/40 text-amber-300'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg ${
              analysis.timeToBuyVerdict?.includes('BUY NOW') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
            }`}>
              {analysis.timeToBuyVerdict?.includes('BUY NOW') ? '✓' : '⏳'}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider">
                AI Time-to-Buy Verdict: <span className="underline">{analysis.timeToBuyVerdict}</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">{analysis.verdictReason}</p>
            </div>
          </div>

          <button
            onClick={() => setShowAlertModal(true)}
            className="px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 flex-shrink-0 transition-all"
          >
            <Bell className="w-3.5 h-3.5 text-cyan-400" />
            Set Price Drop Alert
          </button>
        </div>

        {/* Interactive Chart Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              Historical Price Timeline (Flipkart vs Amazon vs Croma)
            </div>
            <div className="text-xs text-slate-400">
              Next Predicted Drop: <strong className="text-cyan-300">{analysis.nextPredictedSale}</strong>
            </div>
          </div>

          <div className="h-72 w-full bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Store Comparison Cards */}
        <div>
          <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-cyan-400" />
            Live Retailer Stores & Active Bank Offers
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedPhone.stores?.map((st, idx) => {
              const isBest = st.price === selectedPhone.basePrice;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border flex flex-col justify-between space-y-3 transition-all ${
                    isBest
                      ? 'bg-cyan-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/70 border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-white text-sm">{st.storeName}</span>
                      {isBest && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Lowest Price
                        </span>
                      )}
                    </div>

                    <div className="text-2xl font-black text-white">
                      ₹{st.price.toLocaleString('en-IN')}
                    </div>
                    {st.originalPrice && st.originalPrice > st.price && (
                      <div className="text-xs text-slate-500 line-through">₹{st.originalPrice.toLocaleString('en-IN')}</div>
                    )}

                    {/* Bank Offers */}
                    {st.bankOffers?.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {st.bankOffers.map((off, oIdx) => (
                          <div key={oIdx} className="text-[11px] text-emerald-400 flex items-start gap-1">
                            <Tag className="w-3 h-3 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{off}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href={st.productUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-2 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all ${
                      isBest
                        ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-md shadow-cyan-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                    }`}
                  >
                    Buy on {st.storeName}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Top Price Drop Deals Across All Indexed Phones */}
      {dealsData && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 font-heading">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Biggest Price Drops & All-Time Lows Right Now
            </h3>
            <span className="text-xs text-slate-400">Verified multi-store deals</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dealsData.biggestDrops.map(phone => (
              <div
                key={phone.id}
                onClick={() => setSelectedPhone(phone)}
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-cyan-500/40 cursor-pointer transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <img src={phone.imageUrl} alt={phone.name} className="w-14 h-14 object-contain rounded-xl bg-slate-900 p-1" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold">{phone.brand}</span>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{phone.name}</h4>
                    <div className="text-sm font-extrabold text-cyan-400 mt-0.5">
                      ₹{phone.basePrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                  <span className="text-emerald-400 font-bold">Save {phone.discountPercentage}%</span>
                  <span className="text-[11px] text-slate-400">on {phone.priceAnalysis.currentBestStore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Price Alert Modal */}
      {showAlertModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1422] border border-slate-700 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Set Price Drop Alert</h3>
              </div>
              <button onClick={() => setShowAlertModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <p className="text-xs text-slate-400">
              We track Amazon, Flipkart & Croma every hour. We&apos;ll notify you when <strong>{selectedPhone.name}</strong> drops to your target price.
            </p>

            <form onSubmit={handleCreateAlert} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Current Lowest Price:</label>
                <div className="text-lg font-black text-slate-200">₹{selectedPhone.basePrice.toLocaleString('en-IN')}</div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Desired Target Price (₹):</label>
                <input
                  type="number"
                  placeholder={`e.g. ${Math.round(selectedPhone.basePrice * 0.9)}`}
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address:</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {alertSuccessMessage && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{alertSuccessMessage}</span>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAlertModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={alertLoading}
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold shadow-md shadow-cyan-500/20 disabled:opacity-50"
                >
                  {alertLoading ? 'Saving...' : 'Track Price'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
