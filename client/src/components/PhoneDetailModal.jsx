import React from 'react';
import { 
  X, Cpu, Camera, BatteryCharging, Sparkles, Shield, 
  ExternalLink, Check, Plus, Tag, Wifi, Layers, Award, 
  CheckCircle2, XCircle, ThumbsUp, ThumbsDown, ArrowUpRight
} from 'lucide-react';

export default function PhoneDetailModal({
  phone,
  onClose,
  isCompared,
  onToggleCompare,
  onStartCompareWith
}) {
  if (!phone) return null;

  const {
    name,
    brand,
    tagline,
    imageUrl,
    category,
    basePrice,
    originalPrice,
    discountPercentage,
    specs,
    scores,
    stores = [],
    priceAnalysis,
    pros = [],
    cons = []
  } = phone;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0c1220] border border-slate-700/80 rounded-3xl max-w-4xl w-full my-8 shadow-2xl overflow-hidden relative animate-fadeIn">
        
        {/* Top Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-slate-800 text-cyan-400 uppercase tracking-wider border border-slate-700">
              {brand}
            </span>
            <span className="text-xs text-slate-400 font-medium">{category}</span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Main Top Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Phone Image showcase */}
            <div className="md:col-span-5 flex items-center justify-center p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 relative">
              <img
                src={imageUrl}
                alt={name}
                className="max-h-64 object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">MobIQ Index</span>
                <span className="text-sm font-black text-cyan-300">{scores.mobiqIndex}/100</span>
              </div>
            </div>

            {/* Phone Identity & Actions */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{name}</h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">{tagline}</p>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Best Available Live Price</div>
                  <div className="text-3xl font-black text-cyan-400 mt-0.5">
                    ₹{basePrice.toLocaleString('en-IN')}
                  </div>
                </div>
                {originalPrice && originalPrice > basePrice && (
                  <div className="text-right">
                    <div className="text-xs text-slate-500 line-through">MRP ₹{originalPrice.toLocaleString('en-IN')}</div>
                    <div className="text-xs font-bold text-emerald-400">Save {discountPercentage}% OFF</div>
                  </div>
                )}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onToggleCompare(phone)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                    isCompared
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  {isCompared ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
                  {isCompared ? 'Added to Compare Arena' : 'Add to Compare'}
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onStartCompareWith(phone);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/20"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Compare With Other Phones
                </button>
              </div>

            </div>

          </div>

          {/* Live Store Prices */}
          <div>
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4 text-cyan-400" />
              Live Retailer Pricing & Deals
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {stores.map((st, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border flex flex-col justify-between space-y-2 ${
                    st.price === basePrice
                      ? 'bg-cyan-500/10 border-cyan-500/40'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">{st.storeName}</span>
                      {st.price === basePrice && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                          Lowest
                        </span>
                      )}
                    </div>
                    <div className="text-xl font-bold text-slate-100 mt-1">₹{st.price.toLocaleString('en-IN')}</div>
                    {st.dealBadge && (
                      <div className="text-[10px] text-emerald-400 mt-1 font-medium">{st.dealBadge}</div>
                    )}
                  </div>

                  <a
                    href={st.productUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-black text-slate-200 text-center text-xs font-semibold flex items-center justify-center gap-1 transition-all"
                  >
                    Buy <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Full Specifications Grid */}
          <div>
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Technical Specifications Breakdown
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Performance Card */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 uppercase">
                  <Cpu className="w-4 h-4" /> Processor & Performance
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div><strong>CPU:</strong> {specs.processor.name} ({specs.processor.nanometer}nm, {specs.processor.cpuCores} Cores)</div>
                  <div><strong>GPU:</strong> {specs.processor.gpu}</div>
                  <div><strong>AnTuTu v10:</strong> <span className="text-cyan-300 font-bold">{specs.processor.antutuScore.toLocaleString()}</span></div>
                  <div><strong>Geekbench 6:</strong> Single: {specs.processor.geekbenchSingle} • Multi: {specs.processor.geekbenchMulti}</div>
                  <div><strong>Gaming FPS:</strong> {specs.processor.gamingFpsRating}</div>
                </div>
              </div>

              {/* Display Card */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-purple-400 flex items-center gap-1.5 uppercase">
                  <Sparkles className="w-4 h-4" /> Display & Screen
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div><strong>Size & Panel:</strong> {specs.display.sizeInch}&quot; {specs.display.panelType}</div>
                  <div><strong>Resolution:</strong> {specs.display.resolution}</div>
                  <div><strong>Refresh Rate:</strong> {specs.display.refreshRateHz}Hz Fluid</div>
                  <div><strong>Peak Brightness:</strong> <span className="text-amber-300 font-bold">{specs.display.peakBrightnessNits} Nits</span></div>
                  <div><strong>Protection:</strong> {specs.display.protection}</div>
                </div>
              </div>

              {/* Camera Card */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase">
                  <Camera className="w-4 h-4" /> Camera System
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div><strong>Rear Camera:</strong> {specs.camera.rearSummary}</div>
                  <div><strong>Main Sensor:</strong> {specs.camera.mainSensor} (OIS: {specs.camera.hasOis ? 'Yes' : 'No'})</div>
                  <div><strong>Zoom Capability:</strong> {specs.camera.opticalZoom}</div>
                  <div><strong>Selfie:</strong> {specs.camera.frontMP}MP</div>
                  <div><strong>Video:</strong> {specs.camera.videoCapabilities}</div>
                </div>
              </div>

              {/* Battery Card */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
                  <BatteryCharging className="w-4 h-4" /> Battery & Power
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div><strong>Capacity:</strong> {specs.battery.capacityMah} mAh (~{specs.battery.batteryLifeHours}h video)</div>
                  <div><strong>Wired Speed:</strong> <span className="text-emerald-300 font-bold">{specs.battery.wiredChargingWatts}W</span> (0-100% in {specs.battery.chargingTimeMinutes} mins)</div>
                  <div><strong>Wireless Charging:</strong> {specs.battery.wirelessChargingWatts > 0 ? `${specs.battery.wirelessChargingWatts}W` : 'No'}</div>
                  <div><strong>Charger in Box:</strong> {specs.battery.chargerInBox ? 'Yes (Included)' : 'No (Sold separately)'}</div>
                </div>
              </div>

            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
                <ThumbsUp className="w-4 h-4" /> Key Advantages (Pros)
              </div>
              <div className="space-y-1">
                {pros.map((p, idx) => (
                  <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5 uppercase">
                <ThumbsDown className="w-4 h-4" /> Points to Consider (Cons)
              </div>
              <div className="space-y-1">
                {cons.map((c, idx) => (
                  <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
