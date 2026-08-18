import React, { useState, useEffect } from 'react';
import { 
  GitCompare, Trophy, Crown, Plus, X, Cpu, Camera, BatteryCharging, 
  Sparkles, ShieldCheck, Check, DollarSign, ArrowUpRight, ShoppingBag, 
  CheckCircle2, XCircle, Search, Award
} from 'lucide-react';
import { comparePhones } from '../services/api';

export default function ComparisonArena({
  compareList = [],
  allPhones = [],
  onRemovePhone,
  onAddPhone,
  onSelectPhone
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch comparison winners and detailed matrix
  useEffect(() => {
    if (compareList.length >= 2) {
      setLoading(true);
      const ids = compareList.map(p => p.id);
      comparePhones(ids)
        .then(res => {
          if (res.success) {
            setData(res);
          }
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    } else {
      setData(null);
    }
  }, [compareList]);

  // Max values for calculating dynamic percentage bars
  const maxAntutu = 2200000;
  const maxBrightness = 6000;
  const maxBattery = 6000;
  const maxCharging = 130;

  const filteredPhonesToAdd = allPhones.filter(p => 
    !compareList.some(cp => cp.id === p.id) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-semibold text-amber-300">
            <GitCompare className="w-3.5 h-3.5 text-amber-400" />
            Side-by-Side Comparison Arena
          </div>
          <h2 className="text-3xl font-black text-white font-heading mt-2">
            Deep Spec & Benchmark <span className="gradient-text-gold">Showdown</span>
          </h2>
          <p className="text-sm text-slate-400">
            Compare up to 4 smartphones across processors, cameras, battery speeds, and live retailer prices.
          </p>
        </div>

        {compareList.length < 4 && (
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition-all shadow-md"
          >
            <Plus className="w-4 h-4 text-cyan-400" />
            Add Another Phone ({compareList.length}/4)
          </button>
        )}
      </div>

      {compareList.length < 2 ? (
        <div className="glass-panel p-12 text-center rounded-3xl border border-white/10 space-y-4 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center">
            <GitCompare className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Select at least 2 smartphones to compare</h3>
          <p className="text-xs text-slate-400">
            Browse the phone catalog and click "+ Compare" or use the button below to pick phones from our database.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-xs shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            Choose Smartphones to Compare
          </button>
        </div>
      ) : (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Winners Highlights Banner */}
          {data?.winners && (
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-purple-500/15 border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                <Crown className="w-4 h-4 text-amber-400" /> Category Champions Verdict
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-[10px] font-semibold text-cyan-400 flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> Speed King
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-1">{data.winners.processor.name}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">{data.winners.processor.highlight}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-[10px] font-semibold text-purple-400 flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Best Camera
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-1">{data.winners.camera.name}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">{data.winners.camera.highlight}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                    <BatteryCharging className="w-3 h-3" /> Battery & Speed
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-1">{data.winners.battery.name}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">{data.winners.battery.highlight}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-[10px] font-semibold text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Brightest Screen
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-1">{data.winners.display.name}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">{data.winners.display.highlight}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="text-[10px] font-semibold text-rose-400 flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> Value Champion
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-1">{data.winners.valueForMoney.name}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">{data.winners.valueForMoney.highlight}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/90 border border-amber-500/40 space-y-1 bg-amber-500/5">
                  <div className="text-[10px] font-semibold text-amber-300 flex items-center gap-1">
                    <Crown className="w-3 h-3 text-amber-400" /> Overall Winner
                  </div>
                  <div className="text-xs font-black text-amber-300 line-clamp-1">{data.winners.overall.name}</div>
                  <div className="text-[10px] text-slate-300 font-medium">{data.winners.overall.highlight}</div>
                </div>

              </div>
            </div>
          )}

          {/* Side-by-Side Main Matrix Table */}
          <div className="overflow-x-auto rounded-3xl border border-white/10 glass-panel shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Table Header: Phone Cards */}
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90">
                  <th className="p-4 w-48 text-xs font-bold text-slate-400 uppercase tracking-wider sticky left-0 bg-slate-950 z-10">
                    Smartphones ({compareList.length})
                  </th>
                  {compareList.map((phone) => (
                    <th key={phone.id} className="p-4 align-top w-64 min-w-[240px]">
                      <div className="relative group space-y-3">
                        
                        {/* Remove Action Button */}
                        <button
                          onClick={() => onRemovePhone(phone.id)}
                          className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-800 hover:bg-rose-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors shadow"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>

                        <div className="h-32 rounded-xl bg-slate-900 flex items-center justify-center p-2 border border-slate-800">
                          <img src={phone.imageUrl} alt={phone.name} className="h-full object-contain filter drop-shadow-md" />
                        </div>

                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase">{phone.brand}</div>
                          <h4 className="text-sm font-bold text-white line-clamp-1">{phone.name}</h4>
                          <div className="text-base font-black text-cyan-400 mt-0.5">
                            ₹{phone.basePrice.toLocaleString('en-IN')}
                          </div>
                        </div>

                        <button
                          onClick={() => onSelectPhone(phone)}
                          className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-medium transition-all"
                        >
                          Details & Deals
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/80 text-xs">
                
                {/* SECTION 1: PERFORMANCE */}
                <tr className="bg-slate-900/40">
                  <td colSpan={compareList.length + 1} className="px-4 py-2 text-xs font-black text-cyan-400 uppercase tracking-wider">
                    ⚡ Performance & Benchmarks
                  </td>
                </tr>

                {/* Processor Name */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Processor Chipset</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 font-bold text-white">
                      <div>{p.specs.processor.name}</div>
                      <div className="text-[10px] font-normal text-slate-400 mt-0.5">{p.specs.processor.chipset}</div>
                    </td>
                  ))}
                </tr>

                {/* AnTuTu Score Bar */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">AnTuTu v10 Score</td>
                  {compareList.map(p => {
                    const score = p.specs.processor.antutuScore || 0;
                    const pct = Math.min(100, Math.round((score / maxAntutu) * 100));
                    const isWinner = data?.winners?.processor?.id === p.id;
                    return (
                      <td key={p.id} className="p-4">
                        <div className="flex items-center justify-between font-bold text-slate-100 mb-1">
                          <span className={isWinner ? 'text-cyan-400 flex items-center gap-1' : ''}>
                            {score.toLocaleString()}
                            {isWinner && <Crown className="w-3.5 h-3.5 text-cyan-400" />}
                          </span>
                          <span className="text-[10px] text-slate-400">{pct}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${isWinner ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-slate-600'}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Geekbench Single/Multi */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Geekbench 6 Scores</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 text-slate-300">
                      <div>Single-Core: <strong className="text-white">{p.specs.processor.geekbenchSingle}</strong></div>
                      <div>Multi-Core: <strong className="text-white">{p.specs.processor.geekbenchMulti}</strong></div>
                    </td>
                  ))}
                </tr>

                {/* Gaming Rating */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Gaming FPS Stability</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4">
                      <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold text-[11px]">
                        {p.specs.processor.gamingFpsRating}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* SECTION 2: DISPLAY */}
                <tr className="bg-slate-900/40">
                  <td colSpan={compareList.length + 1} className="px-4 py-2 text-xs font-black text-purple-400 uppercase tracking-wider">
                    📱 Display & Visuals
                  </td>
                </tr>

                {/* Panel & Size */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Screen Size & Panel</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 text-slate-200">
                      <div className="font-bold text-white">{p.specs.display.sizeInch}&quot; {p.specs.display.panelType}</div>
                      <div className="text-[10px] text-slate-400">{p.specs.display.resolution}</div>
                    </td>
                  ))}
                </tr>

                {/* Refresh Rate */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Refresh Rate</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 font-bold text-cyan-300">
                      {p.specs.display.refreshRateHz}Hz Fluid
                    </td>
                  ))}
                </tr>

                {/* Peak Brightness Bar */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Peak Brightness (Nits)</td>
                  {compareList.map(p => {
                    const nits = p.specs.display.peakBrightnessNits || 0;
                    const pct = Math.min(100, Math.round((nits / maxBrightness) * 100));
                    const isWinner = data?.winners?.display?.id === p.id;
                    return (
                      <td key={p.id} className="p-4">
                        <div className="flex items-center justify-between font-bold text-slate-100 mb-1">
                          <span className={isWinner ? 'text-amber-400 flex items-center gap-1' : ''}>
                            {nits.toLocaleString()} Nits
                            {isWinner && <Crown className="w-3.5 h-3.5 text-amber-400" />}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${isWinner ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-slate-600'}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* SECTION 3: CAMERA SYSTEM */}
                <tr className="bg-slate-900/40">
                  <td colSpan={compareList.length + 1} className="px-4 py-2 text-xs font-black text-amber-400 uppercase tracking-wider">
                    📸 Camera & Sensors
                  </td>
                </tr>

                {/* Rear Setup */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Rear Camera Setup</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 text-slate-200">
                      <div className="font-bold text-white">{p.specs.camera.rearSummary}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{p.specs.camera.mainSensor}</div>
                    </td>
                  ))}
                </tr>

                {/* Optical Zoom */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Optical Zoom / Telephoto</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4">
                      {p.specs.camera.telephotoMP > 0 ? (
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                          {p.specs.camera.opticalZoom}
                        </span>
                      ) : (
                        <span className="text-slate-500">In-sensor crop only</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Video & Selfie */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Video & Selfie Camera</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 text-slate-300">
                      <div>Selfie: <strong className="text-white">{p.specs.camera.frontMP}MP</strong></div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{p.specs.camera.videoCapabilities}</div>
                    </td>
                  ))}
                </tr>

                {/* SECTION 4: BATTERY & CHARGING */}
                <tr className="bg-slate-900/40">
                  <td colSpan={compareList.length + 1} className="px-4 py-2 text-xs font-black text-emerald-400 uppercase tracking-wider">
                    🔋 Battery & Fast Charging
                  </td>
                </tr>

                {/* Battery mAh */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Battery Capacity</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 font-bold text-white">
                      {p.specs.battery.capacityMah} mAh
                      <div className="text-[10px] font-normal text-slate-400">~{p.specs.battery.batteryLifeHours}h video playback</div>
                    </td>
                  ))}
                </tr>

                {/* Charging Wattage */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Charging Speed</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4">
                      <div className="font-bold text-emerald-400">{p.specs.battery.wiredChargingWatts}W Wired</div>
                      <div className="text-[10px] text-slate-400">0-100% in ~{p.specs.battery.chargingTimeMinutes} mins</div>
                      {p.specs.battery.wirelessChargingWatts > 0 && (
                        <div className="text-[10px] text-cyan-400 font-medium mt-0.5">
                          +{p.specs.battery.wirelessChargingWatts}W Wireless
                        </div>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Charger in Box */}
                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Charger in Box?</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4">
                      {p.specs.battery.chargerInBox ? (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Yes (Included)
                        </span>
                      ) : (
                        <span className="text-slate-500 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Sold separately
                        </span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* SECTION 5: BUILD & SOFTWARE */}
                <tr className="bg-slate-900/40">
                  <td colSpan={compareList.length + 1} className="px-4 py-2 text-xs font-black text-rose-400 uppercase tracking-wider">
                    🛡️ Build Quality & OS Support
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">Water & Dust Rating</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 font-bold text-slate-200">
                      {p.specs.build.ipRating}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">OS & Update Commitment</td>
                  {compareList.map(p => (
                    <td key={p.id} className="p-4 text-slate-300">
                      <div className="font-bold text-white">{p.specs.software.uiSkin}</div>
                      <div className="text-[10px] text-emerald-400">
                        {p.specs.software.promisedOsUpdatesYears} yrs OS • {p.specs.software.promisedSecurityUpdatesYears} yrs Security
                      </div>
                    </td>
                  ))}
                </tr>

                {/* SECTION 6: LIVE STORE PRICES */}
                <tr className="bg-slate-900/40">
                  <td colSpan={compareList.length + 1} className="px-4 py-2 text-xs font-black text-cyan-400 uppercase tracking-wider">
                    🛍️ Live Store Price Breakdown
                  </td>
                </tr>

                {['Amazon', 'Flipkart', 'Croma'].map((storeName) => (
                  <tr key={storeName}>
                    <td className="p-4 font-semibold text-slate-400 sticky left-0 bg-[#0e1422]">
                      {storeName} Price
                    </td>
                    {compareList.map(p => {
                      const storeEntry = p.stores?.find(s => s.storeName.toLowerCase() === storeName.toLowerCase());
                      return (
                        <td key={p.id} className="p-4">
                          {storeEntry ? (
                            <div>
                              <div className="font-bold text-white">₹{storeEntry.price.toLocaleString('en-IN')}</div>
                              {storeEntry.dealBadge && (
                                <span className="inline-block mt-0.5 text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                                  {storeEntry.dealBadge}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-slate-500">Not listed</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* Add Phone Search Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1422] border border-slate-700 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Select Smartphone to Compare</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search phone name or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="max-h-72 overflow-y-auto divide-y divide-slate-800">
              {filteredPhonesToAdd.map((phone) => (
                <div
                  key={phone.id}
                  onClick={() => {
                    onAddPhone(phone);
                    setShowAddModal(false);
                    setSearchQuery('');
                  }}
                  className="p-3 flex items-center justify-between hover:bg-slate-800/60 cursor-pointer rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={phone.imageUrl} alt={phone.name} className="w-12 h-12 object-cover rounded-lg bg-slate-900" />
                    <div>
                      <div className="text-sm font-bold text-white">{phone.name}</div>
                      <div className="text-xs text-slate-400">{phone.specs.processor.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-cyan-400">₹{phone.basePrice.toLocaleString('en-IN')}</div>
                    <span className="text-[10px] text-amber-400 font-semibold">+ Add</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
