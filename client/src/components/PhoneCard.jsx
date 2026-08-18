import React from 'react';
import { 
  Cpu, Camera, BatteryCharging, Shield, Check, Plus, 
  Sparkles, TrendingDown, ArrowUpRight, ShoppingBag, Award, Tag
} from 'lucide-react';

export default function PhoneCard({
  phone,
  onSelect,
  isCompared,
  onToggleCompare
}) {
  const {
    name,
    brand,
    imageUrl,
    category,
    basePrice,
    originalPrice,
    discountPercentage,
    specs,
    scores,
    stores = [],
    priceAnalysis
  } = phone;

  const bestStore = stores.reduce((best, curr) => curr.price < best.price ? curr : best, stores[0] || {});

  return (
    <div className="glass-panel-interactive p-5 flex flex-col justify-between overflow-hidden border border-slate-800 hover:border-cyan-500/50 shadow-xl space-y-4">
      
      {/* 1. TOP BAR: BRAND, CATEGORY & MOBIQ RATING */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-slate-800 text-cyan-400 border border-slate-700 uppercase tracking-wider">
              {brand}
            </span>
            <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-white/[0.05] text-slate-300 border border-white/[0.08]">
              {category}
            </span>
          </div>

          {/* MobIQ Performance Rating Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            <span className="text-[10px] font-bold text-slate-400 uppercase">MobIQ</span>
            <span className="text-xs font-black text-cyan-400">{scores.mobiqIndex}</span>
            <span className="text-[9px] text-slate-400">/100</span>
          </div>
        </div>

        {/* 2. SMARTPHONE IMAGE & FLOATING BENCHMARK PILL */}
        <div 
          onClick={() => onSelect(phone)}
          className="relative h-48 my-2 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center p-4 cursor-pointer overflow-hidden border border-slate-800/80 group"
        >
          <img
            src={imageUrl}
            alt={name}
            className="h-full max-h-40 object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
          />

          {/* AnTuTu Benchmark Badge */}
          {specs.processor.antutuScore && (
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-purple-500/40 text-[10px] font-bold text-purple-300 flex items-center gap-1 shadow">
              <Cpu className="w-3 h-3 text-purple-400" />
              <span>{(specs.processor.antutuScore / 100000).toFixed(1)}L AnTuTu</span>
            </div>
          )}

          {/* Time to Buy Status Tag */}
          {priceAnalysis?.priceStatus === 'All-Time Low' && (
            <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[10px] font-bold text-emerald-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              All-Time Low Price
            </div>
          )}
        </div>

        {/* 3. PHONE NAME & TAGLINE */}
        <div className="mt-2">
          <h3 
            onClick={() => onSelect(phone)}
            className="text-base font-bold text-white hover:text-cyan-300 cursor-pointer transition-colors line-clamp-1"
          >
            {name}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-normal">
            {phone.tagline || specs.processor.name}
          </p>
        </div>

        {/* 4. KEY SPECIFICATIONS (EVERY SPEC WITH SEPARATE ICON & CLEAR LABEL) */}
        <div className="grid grid-cols-2 gap-2 my-3 text-xs">
          
          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <div className="truncate">
              <div className="text-[9px] text-slate-400 uppercase font-bold">Processor</div>
              <div className="truncate text-slate-200 font-semibold">{specs.processor.name.split(' ')[0]} {specs.processor.name.split(' ')[1] || ''}</div>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <Camera className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
            <div className="truncate">
              <div className="text-[9px] text-slate-400 uppercase font-bold">Camera</div>
              <div className="truncate text-slate-200 font-semibold">{specs.camera.mainMP}MP {specs.camera.hasOis ? '(OIS)' : ''}</div>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <BatteryCharging className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <div className="truncate">
              <div className="text-[9px] text-slate-400 uppercase font-bold">Battery</div>
              <div className="truncate text-slate-200 font-semibold">{specs.battery.capacityMah}mAh ({specs.battery.wiredChargingWatts}W)</div>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <div className="truncate">
              <div className="text-[9px] text-slate-400 uppercase font-bold">Display</div>
              <div className="truncate text-slate-200 font-semibold">{specs.display.refreshRateHz}Hz {specs.display.panelType.split(' ')[0]}</div>
            </div>
          </div>

        </div>

        {/* 5. MULTI-STORE LIVE PRICE COMPARISON STRIP */}
        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <ShoppingBag className="w-3 h-3 text-cyan-400" />
              Live Stores:
            </span>
            {bestStore?.storeName && (
              <span className="text-emerald-400 font-bold">
                Lowest on {bestStore.storeName}
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-1 text-center">
            {stores.slice(0, 3).map((st, idx) => (
              <div
                key={idx}
                className={`p-1.5 rounded-lg border text-center transition-colors ${
                  st.storeName === bestStore.storeName
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                    : 'bg-slate-800/40 border-slate-800 text-slate-400'
                }`}
              >
                <div className="text-[9px] font-bold truncate">{st.storeName}</div>
                <div className="font-extrabold text-white text-[10px] mt-0.5">₹{st.price.toLocaleString('en-IN')}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 6. BOTTOM ACTION FOOTER */}
      <div className="pt-3 border-t border-slate-800 space-y-2">
        
        {/* Pricing Summary */}
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Best Current Price</div>
            <div className="text-xl font-black text-white">
              ₹{basePrice.toLocaleString('en-IN')}
            </div>
          </div>
          {originalPrice && originalPrice > basePrice && (
            <div className="text-right">
              <span className="text-xs text-slate-500 line-through">₹{originalPrice.toLocaleString('en-IN')}</span>
              <div className="text-xs font-bold text-emerald-400">Save {discountPercentage}% OFF</div>
            </div>
          )}
        </div>

        {/* Clearly Labeled Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => onToggleCompare(phone)}
            className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              isCompared
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
            }`}
          >
            {isCompared ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                In Compare ({isCompared ? '✓' : ''})
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                + Compare
              </>
            )}
          </button>

          <button
            onClick={() => onSelect(phone)}
            className="py-2 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold flex items-center justify-center gap-1 transition-all"
          >
            View Specs
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
