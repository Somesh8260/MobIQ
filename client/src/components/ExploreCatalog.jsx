import React, { useState } from 'react';
import { 
  Filter, SlidersHorizontal, ArrowUpDown, Smartphone, 
  Search, X, Check, RotateCcw, Sparkles, Tag, DollarSign, 
  Cpu, Layers, ShieldCheck, Camera, BatteryCharging, Zap
} from 'lucide-react';
import PhoneCard from './PhoneCard';

export default function ExploreCatalog({
  phones = [],
  compareList = [],
  onToggleCompare,
  onSelectPhone,
  selectedCategory,
  setSelectedCategory,
  maxBudgetFilter,
  setMaxBudgetFilter
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minAntutu, setMinAntutu] = useState(0);
  const [filter5G, setFilter5G] = useState(false);
  const [filterOIS, setFilterOIS] = useState(false);
  const [filterFastCharging, setFilterFastCharging] = useState(false);
  const [sortBy, setSortBy] = useState('mobiq-desc');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const allBrands = [
    { name: 'Apple', icon: '🍎' },
    { name: 'Samsung', icon: '🌌' },
    { name: 'OnePlus', icon: '🔴' },
    { name: 'Google', icon: '🌐' },
    { name: 'Nothing', icon: '⚪' },
    { name: 'Xiaomi', icon: '🟠' },
    { name: 'Motorola', icon: '🦇' },
    { name: 'Realme', icon: '🟡' },
    { name: 'iQOO', icon: '⚡' }
  ];

  const categoryOptions = [
    { id: 'All', label: 'All Smartphones', icon: '📱' },
    { id: 'Flagship', label: 'Flagship Titans', icon: '💎' },
    { id: 'Upper Mid-Range', label: 'Upper Mid-Range', icon: '⚡' },
    { id: 'Mid-Range', label: 'Mid-Range Value', icon: '🎯' },
    { id: 'Budget', label: 'Budget Champions', icon: '💰' },
    { id: 'Gaming', label: 'Hardcore Gaming', icon: '🎮' },
    { id: 'Camera-Centric', label: 'Pro Camera & Zoom', icon: '📸' }
  ];

  const toggleBrand = (brandName) => {
    setSelectedBrands(prev =>
      prev.includes(brandName) ? prev.filter(b => b !== brandName) : [...prev, brandName]
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedBrands([]);
    setMinAntutu(0);
    setFilter5G(false);
    setFilterOIS(false);
    setFilterFastCharging(false);
    setSelectedCategory('All');
    setMaxBudgetFilter(160000);
    setSortBy('mobiq-desc');
  };

  // Client-side filtering
  let filtered = phones.filter(p => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.brand.toLowerCase().includes(q) ||
                    p.specs.processor.name.toLowerCase().includes(q);
      if (!match) return false;
    }

    if (selectedCategory && selectedCategory !== 'All') {
      if (p.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    }

    if (selectedBrands.length > 0) {
      if (!selectedBrands.includes(p.brand)) return false;
    }

    if (maxBudgetFilter && p.basePrice > maxBudgetFilter) return false;

    if (minAntutu > 0 && (p.specs.processor.antutuScore || 0) < minAntutu) return false;

    if (filter5G && !p.specs.connectivity?.has5G) return false;

    if (filterOIS && !p.specs.camera?.hasOis) return false;

    if (filterFastCharging && (p.specs.battery?.wiredChargingWatts || 0) < 67) return false;

    return true;
  });

  // Sorting
  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.basePrice - b.basePrice;
      case 'price-desc': return b.basePrice - a.basePrice;
      case 'antutu-desc': return (b.specs.processor.antutuScore || 0) - (a.specs.processor.antutuScore || 0);
      case 'camera-desc': return (b.scores.camera || 0) - (a.scores.camera || 0);
      case 'discount-desc': return (b.discountPercentage || 0) - (a.discountPercentage || 0);
      case 'mobiq-desc':
      default:
        return (b.scores.mobiqIndex || 0) - (a.scores.mobiqIndex || 0);
    }
  });

  const isAnyFilterActive = searchQuery || selectedBrands.length > 0 || selectedCategory !== 'All' || maxBudgetFilter < 160000 || minAntutu > 0 || filter5G || filterOIS || filterFastCharging;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* 1. SECTION TITLE & CATEGORY BAR */}
      <div className="space-y-4">
        
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" /> SMARTPHONE CATALOG & SPEC FINDER
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1">
            Explore & Filter <span className="gradient-text-cyan">All Smartphones</span>
          </h2>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryOptions.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Search, Mobile Filter Toggle & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          
          {/* Search Field */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              placeholder="Search phone name, Snapdragon, Apple A18..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5"
            >
              <Filter className="w-4 h-4 text-cyan-400" />
              Filters {isAnyFilterActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 hidden sm:inline uppercase tracking-wider">
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
              >
                <option value="mobiq-desc">⭐ Highest MobIQ Rating</option>
                <option value="price-asc">💵 Price: Low to High</option>
                <option value="price-desc">💎 Price: High to Low</option>
                <option value="antutu-desc">⚡ AnTuTu Benchmark Score</option>
                <option value="camera-desc">📸 Camera DXOMARK Score</option>
                <option value="discount-desc">🔥 Highest Discount %</option>
              </select>
            </div>

          </div>

        </div>

      </div>

      {/* 2. MAIN GRID WITH FILTER SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Filter Sidebar */}
        <aside className={`lg:col-span-3 glass-panel p-5 rounded-3xl border border-slate-800 space-y-6 ${
          showMobileFilters ? 'block' : 'hidden lg:block'
        }`}>
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-wider">
              <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
              Smart Filters & Sliders
            </div>
            {isAnyFilterActive && (
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
          </div>

          {/* Filter 1: Max Budget Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1">
                <span>💰</span> Max Budget:
              </span>
              <span className="font-black text-cyan-400">₹{maxBudgetFilter.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="14000"
              max="160000"
              step="3000"
              value={maxBudgetFilter}
              onChange={(e) => setMaxBudgetFilter(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>₹14,000</span>
              <span>₹1,60,000+</span>
            </div>
          </div>

          {/* Filter 2: Brand Selection */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-300 flex items-center gap-1">
              <span>🏢</span> Select Brands:
            </div>
            <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
              {allBrands.map((b) => {
                const checked = selectedBrands.includes(b.name);
                return (
                  <label
                    key={b.name}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-xs cursor-pointer transition-all ${
                      checked
                        ? 'bg-cyan-500/15 border-cyan-500 text-cyan-300 font-bold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleBrand(b.name)}
                      className="hidden"
                    />
                    <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                      checked ? 'bg-cyan-500 border-cyan-500 text-black' : 'border-slate-700'
                    }`}>
                      {checked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span className="truncate">{b.icon} {b.name}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Filter 3: Minimum AnTuTu Benchmark Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1">
                <span>⚡</span> Min AnTuTu Score:
              </span>
              <span className="font-bold text-purple-400">
                {minAntutu > 0 ? `${(minAntutu / 100000).toFixed(1)}L+` : 'Any'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="2000000"
              step="100000"
              value={minAntutu}
              onChange={(e) => setMinAntutu(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>Any</span>
              <span>20 Lakhs+</span>
            </div>
          </div>

          {/* Filter 4: Must-Have Hardware Features */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="text-xs font-bold text-slate-300 flex items-center gap-1">
              <span>✨</span> Must-Have Features:
            </div>
            
            <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs">
              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                <span>📶</span> 5G Enabled
              </span>
              <input
                type="checkbox"
                checked={filter5G}
                onChange={(e) => setFilter5G(e.target.checked)}
                className="w-4 h-4 rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-700"
              />
            </label>

            <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs">
              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                <span>📸</span> Camera with OIS
              </span>
              <input
                type="checkbox"
                checked={filterOIS}
                onChange={(e) => setFilterOIS(e.target.checked)}
                className="w-4 h-4 rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-700"
              />
            </label>

            <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs">
              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                <span>⚡</span> Rapid 67W+ Charge
              </span>
              <input
                type="checkbox"
                checked={filterFastCharging}
                onChange={(e) => setFilterFastCharging(e.target.checked)}
                className="w-4 h-4 rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-700"
              />
            </label>
          </div>

        </aside>

        {/* Right Phone Grid */}
        <main className="lg:col-span-9 space-y-4">
          
          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-900/60 px-4 py-2.5 rounded-2xl border border-slate-800">
            <span>
              Showing <strong className="text-white font-bold">{filtered.length}</strong> Smartphones
            </span>
            {isAnyFilterActive && (
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Filters Applied
              </span>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="glass-panel p-12 text-center rounded-3xl border border-slate-800 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">No smartphones match your exact filters</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try loosening your price slider or clearing some feature constraints.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold shadow-md shadow-cyan-500/20"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((phone) => (
                <PhoneCard
                  key={phone.id}
                  phone={phone}
                  onSelect={onSelectPhone}
                  isCompared={compareList.some(p => p.id === phone.id)}
                  onToggleCompare={onToggleCompare}
                />
              ))}
            </div>
          )}

        </main>

      </div>

    </div>
  );
}
