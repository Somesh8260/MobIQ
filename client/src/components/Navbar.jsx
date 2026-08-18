import React, { useState } from 'react';
import { 
  Smartphone, Zap, GitCompare, TrendingDown, Search, X, 
  Sparkles, Layers, ShieldCheck, Tag
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  compareList = [], 
  allPhones = [], 
  onSelectPhone 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const searchResults = searchQuery.trim() === ''
    ? []
    : allPhones.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.processor.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#080c16]/95 border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navbar Row */}
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo with Icon */}
          <div 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => setActiveTab('explore')}
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#080c16] rounded-[14px] flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black font-heading gradient-text-brand">
                  Mob<span className="text-cyan-400">IQ</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live AI Engine
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Smart Phone Recommendation & Price Hub</p>
            </div>
          </div>

          {/* Center Navigation Links with Unique Vibrant Icons */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            
            <button
              onClick={() => setActiveTab('explore')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'explore'
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Smartphone className={`w-4 h-4 ${activeTab === 'explore' ? 'text-black' : 'text-cyan-400'}`} />
              Explore Catalog
            </button>

            <button
              onClick={() => setActiveTab('recommender')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'recommender'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Zap className={`w-4 h-4 ${activeTab === 'recommender' ? 'text-white' : 'text-purple-400'}`} />
              AI Recommender
              <span className={`text-[9px] px-1 py-0.2 rounded font-extrabold ${activeTab === 'recommender' ? 'bg-white/20 text-white' : 'bg-purple-500/20 text-purple-300'}`}>
                PRO
              </span>
            </button>

            <button
              onClick={() => setActiveTab('compare')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all relative ${
                activeTab === 'compare'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <GitCompare className={`w-4 h-4 ${activeTab === 'compare' ? 'text-black' : 'text-amber-400'}`} />
              Compare Arena
              {compareList.length > 0 && (
                <span className={`w-5 h-5 flex items-center justify-center rounded-full text-[11px] font-black ${
                  activeTab === 'compare' ? 'bg-black text-amber-400' : 'bg-amber-500 text-black animate-pulse'
                }`}>
                  {compareList.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('price-tracker')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'price-tracker'
                  ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <TrendingDown className={`w-4 h-4 ${activeTab === 'price-tracker' ? 'text-black' : 'text-emerald-400'}`} />
              Price Tracker & Deals
            </button>

          </nav>

          {/* Right Search Input with Live Dropdown */}
          <div className="relative hidden md:block w-72 lg:w-80">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
              <input
                type="text"
                placeholder="Search phone, processor, price..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-all"
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

            {/* Live Autocomplete Results */}
            {showSearchDropdown && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-[#0e1628] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-slate-800">
                <div className="p-2.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-950/60">
                  Matching Phones ({searchResults.length})
                </div>
                {searchResults.map(phone => (
                  <div
                    key={phone.id}
                    onClick={() => {
                      onSelectPhone?.(phone);
                      setShowSearchDropdown(false);
                      setSearchQuery('');
                    }}
                    className="p-3 flex items-center justify-between hover:bg-slate-800/80 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={phone.imageUrl} alt={phone.name} className="w-9 h-9 object-contain rounded-lg bg-slate-900 p-1" />
                      <div>
                        <div className="text-xs font-bold text-white">{phone.name}</div>
                        <div className="text-[10px] text-slate-400">{phone.specs.processor.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-cyan-400">₹{phone.basePrice.toLocaleString('en-IN')}</div>
                      <div className="text-[9px] text-emerald-400 font-semibold">{phone.discountPercentage}% OFF</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setActiveTab('compare')}
              className="relative p-2 rounded-xl bg-slate-800 text-amber-400 border border-slate-700"
            >
              <GitCompare className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-black text-[10px] font-black flex items-center justify-center">
                  {compareList.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <div className="space-y-1 w-5"><span className="block h-0.5 bg-slate-200"></span><span className="block h-0.5 bg-slate-200"></span><span className="block h-0.5 bg-slate-200"></span></div>}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => { setActiveTab('explore'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-xs font-bold ${
                activeTab === 'explore' ? 'bg-cyan-500 text-black' : 'text-slate-300 bg-slate-900/60'
              }`}
            >
              <Smartphone className="w-4 h-4" /> 📱 Explore & Filter Phones
            </button>
            <button
              onClick={() => { setActiveTab('recommender'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-xs font-bold ${
                activeTab === 'recommender' ? 'bg-purple-600 text-white' : 'text-slate-300 bg-slate-900/60'
              }`}
            >
              <Zap className="w-4 h-4 text-purple-400" /> 🤖 AI Recommendation Wizard
            </button>
            <button
              onClick={() => { setActiveTab('compare'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-xs font-bold ${
                activeTab === 'compare' ? 'bg-amber-500 text-black' : 'text-slate-300 bg-slate-900/60'
              }`}
            >
              <GitCompare className="w-4 h-4 text-amber-400" /> ⚔️ Compare Arena ({compareList.length})
            </button>
            <button
              onClick={() => { setActiveTab('price-tracker'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-xs font-bold ${
                activeTab === 'price-tracker' ? 'bg-emerald-500 text-black' : 'text-slate-300 bg-slate-900/60'
              }`}
            >
              <TrendingDown className="w-4 h-4 text-emerald-400" /> 📉 Multi-Store Price & Time Tracker
            </button>
          </div>
        )}

      </div>
    </header>
  );
}
