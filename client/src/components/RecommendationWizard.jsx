import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Zap, ArrowRight, ArrowLeft, Check, Sparkles, Gamepad2, 
  Camera, BatteryCharging, Shield, Cpu, RefreshCw, Smartphone, 
  ExternalLink, GitCompare, Award, HeartHandshake, DollarSign, Sliders
} from 'lucide-react';
import { getRecommendations } from '../services/api';

export default function RecommendationWizard({ onSelectPhone, onCompareMultiple }) {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState(35000);
  const [priority, setPriority] = useState('all_rounder');
  const [preferredBrand, setPreferredBrand] = useState('any');
  const [preferredOS, setPreferredOS] = useState('any');
  const [fastChargingRequired, setFastChargingRequired] = useState(true);
  const [waterproofRequired, setWaterproofRequired] = useState(false);

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const priorities = [
    {
      id: 'gaming',
      title: 'Hardcore Gaming',
      icon: Gamepad2,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      activeBorder: 'border-purple-500 bg-purple-500/20 shadow-purple-500/20',
      desc: 'Max AnTuTu score, 90-144 FPS stability, vapor chamber cooling'
    },
    {
      id: 'camera',
      title: 'Pro Photography & Video',
      icon: Camera,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      activeBorder: 'border-amber-500 bg-amber-500/20 shadow-amber-500/20',
      desc: 'Large Sony/Samsung sensors, OIS, 3x-5x Optical Periscope zoom'
    },
    {
      id: 'battery',
      title: 'All-Day Battery & Speed',
      icon: BatteryCharging,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      activeBorder: 'border-emerald-500 bg-emerald-500/20 shadow-emerald-500/20',
      desc: '5000mAh+ capacity, 67W-125W rapid charging (0-100% in <30m)'
    },
    {
      id: 'clean_os',
      title: 'Clean & Bloatware-Free UI',
      icon: Shield,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      activeBorder: 'border-cyan-500 bg-cyan-500/20 shadow-cyan-500/20',
      desc: 'Pure software experience (Nothing OS, iOS, Pixel, Hello UI)'
    },
    {
      id: 'value',
      title: 'Maximum Value for Money',
      icon: DollarSign,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      activeBorder: 'border-rose-500 bg-rose-500/20 shadow-rose-500/20',
      desc: 'Top-tier specs per rupee spent with great promotional discounts'
    },
    {
      id: 'all_rounder',
      title: 'Balanced All-Round Flagship',
      icon: Sparkles,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      activeBorder: 'border-blue-500 bg-blue-500/20 shadow-blue-500/20',
      desc: 'High scores across performance, display, cameras, and battery'
    }
  ];

  const brands = [
    { id: 'any', name: 'Any Brand (Best Value)' },
    { id: 'Apple', name: 'Apple (iPhone)' },
    { id: 'Samsung', name: 'Samsung Galaxy' },
    { id: 'OnePlus', name: 'OnePlus' },
    { id: 'Google', name: 'Google Pixel' },
    { id: 'Nothing', name: 'Nothing' },
    { id: 'Xiaomi', name: 'Xiaomi / Redmi' },
    { id: 'Motorola', name: 'Motorola' },
    { id: 'Realme', name: 'Realme' },
    { id: 'iQOO', name: 'iQOO' }
  ];

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#8b5cf6', '#10b981', '#fbbf24']
    });
  };

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRecommendations({
        budget,
        priority,
        preferredBrand,
        preferredOS,
        fastChargingRequired,
        waterproofRequired
      });

      if (data.success) {
        setResults(data);
        triggerConfetti();
      } else {
        setError(data.message || 'Could not find recommendations');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      
      {/* Header Banner */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-purple-300">
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          AI Recommendation Wizard
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          Find Your <span className="gradient-text-brand">Dream Smartphone</span>
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Answer 3 quick questions about your budget and needs. Our algorithm analyzes specs, benchmark scores, and multi-store pricing to find your ideal match.
        </p>
      </div>

      {!results ? (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span>Step {step} of 3</span>
              <span>
                {step === 1 && 'Define Budget'}
                {step === 2 && 'Primary Needs & Priority'}
                {step === 3 && 'Brand & Desired Features'}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* STEP 1: Budget Selection */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">What is your target budget?</h3>
                <p className="text-xs text-slate-400">Drag the slider or click a quick category preset.</p>
              </div>

              {/* Slider Display Box */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-4">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Target Budget Range</div>
                <div className="text-4xl sm:text-5xl font-black text-white font-heading">
                  ₹{budget.toLocaleString('en-IN')}
                </div>
                
                {/* Range Slider */}
                <input
                  type="range"
                  min="12000"
                  max="150000"
                  step="2000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-xs text-slate-500">
                  <span>₹12,000 (Budget)</span>
                  <span>₹50,000 (Upper Mid)</span>
                  <span>₹1,50,000+ (Ultra Flagship)</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Budget Pick', price: 15000, desc: 'Under ₹15,000' },
                  { label: 'Mid-Range King', price: 30000, desc: 'Under ₹30,000' },
                  { label: 'Flagship Killer', price: 60000, desc: 'Under ₹60,000' },
                  { label: 'Ultra Flagship', price: 125000, desc: '₹1,00,000+' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setBudget(item.price)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      budget === item.price
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{item.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Next: Choose Priority
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Priority Selection */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">What matters to you the most?</h3>
                <p className="text-xs text-slate-400">Our recommendation engine will weigh specs matching your pick.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {priorities.map((item) => {
                  const Icon = item.icon;
                  const isSelected = priority === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setPriority(item.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? `border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/10 scale-[1.01]`
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{item.title}</div>
                          {isSelected && (
                            <span className="text-[10px] text-cyan-400 font-semibold flex items-center gap-1">
                              <Check className="w-3 h-3" /> Selected Priority
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Next: Brand & Features
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Brand & Feature Options */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Brand & Specific Desired Features</h3>
                <p className="text-xs text-slate-400">Fine-tune your brand preference and essential hardware features.</p>
              </div>

              {/* Brand Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Preferred Brand:</label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {brands.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setPreferredBrand(b.id)}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        preferredBrand === b.id
                          ? 'bg-purple-500/20 border-purple-500 text-purple-300 shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* OS Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Operating System:</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'any', label: 'Any OS' },
                    { id: 'Android', label: 'Android (Google, Samsung, OnePlus, Nothing...)' },
                    { id: 'iOS', label: 'Apple iOS' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPreferredOS(item.id)}
                      className={`p-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        preferredOS === item.id
                          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={fastChargingRequired}
                    onChange={(e) => setFastChargingRequired(e.target.checked)}
                    className="w-4 h-4 rounded text-cyan-500 focus:ring-0 focus:ring-offset-0 bg-slate-800 border-slate-700"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">Require Ultra Fast Charging (67W+)</div>
                    <div className="text-[11px] text-slate-400">Quick 0-100% refills under 30-40 mins</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={waterproofRequired}
                    onChange={(e) => setWaterproofRequired(e.target.checked)}
                    className="w-4 h-4 rounded text-cyan-500 focus:ring-0 focus:ring-offset-0 bg-slate-800 border-slate-700"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">Prefer Water/Dust Resistance (IP65/IP68)</div>
                    <div className="text-[11px] text-slate-400">Peace of mind in rain and accidental spills</div>
                  </div>
                </label>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-400">
                  {error}
                </div>
              )}

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleCalculate}
                  disabled={loading}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm flex items-center gap-2.5 shadow-xl shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Computing Smart Matches...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-cyan-200" />
                      Reveal My Best Matches
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </div>
      ) : (
        
        /* RESULTS VIEW */
        <div className="space-y-8 animate-fadeIn">
          
          <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-emerald-500/15 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <Award className="w-4 h-4" /> Matches Calculated Successfully
              </div>
              <h3 className="text-xl font-bold text-white">
                Found {results.topMatches.length} Top Recommendations for your Budget (₹{budget.toLocaleString('en-IN')})
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all"
              >
                <Sliders className="w-3.5 h-3.5" />
                Change Filters
              </button>

              {results.topMatches.length >= 2 && (
                <button
                  onClick={() => onCompareMultiple(results.topMatches.map(m => m.phone))}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all"
                >
                  <GitCompare className="w-3.5 h-3.5" />
                  Compare Top Matches
                </button>
              )}
            </div>
          </div>

          {/* Matches List */}
          <div className="space-y-6">
            {results.topMatches.map((matchItem, index) => {
              const { phone, matchPercentage, reasons } = matchItem;
              const isFirst = index === 0;

              return (
                <div
                  key={phone.id}
                  className={`glass-panel p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                    isFirst
                      ? 'border-cyan-500/50 bg-gradient-to-r from-slate-900/90 via-[#0e1628] to-slate-900/90 shadow-2xl shadow-cyan-500/10'
                      : 'border-white/10 bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  {isFirst && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-blue-600 text-black text-[11px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Award className="w-3.5 h-3.5" /> #1 Best Match
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Left: Phone Image & Match Ring */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-950/80 border border-white/5 relative">
                      <img
                        src={phone.imageUrl}
                        alt={phone.name}
                        className="h-44 object-contain filter drop-shadow-xl"
                      />

                      {/* Match Score Badge */}
                      <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-xs font-black">{matchPercentage}% Match</span>
                      </div>
                    </div>

                    {/* Middle: Details & Why this phone fits you */}
                    <div className="md:col-span-5 space-y-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                            {phone.brand}
                          </span>
                          <span className="text-xs text-slate-400">{phone.category}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mt-1">{phone.name}</h4>
                        <p className="text-xs text-slate-400">{phone.tagline}</p>
                      </div>

                      {/* Reasons Box */}
                      <div className="space-y-1.5 pt-1">
                        <div className="text-[11px] font-bold text-slate-300 flex items-center gap-1 uppercase tracking-wider">
                          <Sparkles className="w-3 h-3 text-cyan-400" /> Why this phone fits you:
                        </div>
                        <div className="space-y-1">
                          {reasons.map((r, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span>{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Specs Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 text-[11px]">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
                          {phone.specs.processor.name}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
                          {phone.specs.camera.mainMP}MP Camera
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
                          {phone.specs.battery.capacityMah}mAh ({phone.specs.battery.wiredChargingWatts}W)
                        </span>
                      </div>
                    </div>

                    {/* Right: Price & CTA buttons */}
                    <div className="md:col-span-3 flex flex-col justify-between h-full p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center md:text-left space-y-3">
                      <div>
                        <div className="text-xs text-slate-400 font-medium">Best Live Price</div>
                        <div className="text-2xl font-black text-white">
                          ₹{phone.basePrice.toLocaleString('en-IN')}
                        </div>
                        <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                          {phone.priceAnalysis.priceStatus}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <button
                          onClick={() => onSelectPhone(phone)}
                          className="w-full py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5"
                        >
                          View Full Specs & Deals
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
}
