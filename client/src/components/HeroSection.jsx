import React from 'react';
import { 
  Zap, GitCompare, TrendingDown, ArrowRight, ShieldCheck, 
  Cpu, Camera, BatteryCharging, Flame, ShoppingBag, 
  Sparkles, Award, BarChart3, CheckCircle2, ChevronRight
} from 'lucide-react';

export default function HeroSection({ 
  onStartRecommender, 
  onStartCompare, 
  onSelectCategory, 
  onSelectBudget 
}) {
  return (
    <section className="relative pt-6 pb-10 space-y-8">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 1. TOP LIVE MARKET TICKER WITH CLEAR LABELS */}
        <div className="p-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-emerald-500/30 border border-slate-700 shadow-xl">
          <div className="bg-[#0b0f1a] px-4 py-2.5 rounded-xl flex items-center justify-between gap-4 overflow-hidden">
            
            {/* Ticker Title Badge */}
            <div className="flex items-center gap-2 flex-shrink-0 text-xs font-black text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
              Live Deal Ticker
            </div>
            
            {/* Scrolling Marquee */}
            <div className="overflow-hidden whitespace-nowrap w-full">
              <div className="animate-marquee flex items-center gap-8 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <strong className="text-white">Apple iPhone 15:</strong> Dropped by <strong className="text-emerald-400">₹20,901</strong> on Flipkart (Now ₹58,999)
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <strong className="text-white">OnePlus 12:</strong> Lowest price on Amazon at <strong className="text-cyan-400">₹59,999</strong> (100W charger included)
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <strong className="text-white">Poco X6 Pro:</strong> <strong className="text-emerald-400">1.46M AnTuTu score</strong> under ₹24,000 on Flipkart
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <strong className="text-white">Motorola Edge 50 Pro:</strong> IP68 Waterproof + 125W Fast Charge at <strong className="text-amber-400">₹29,999</strong>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <strong className="text-white">CMF Phone 1:</strong> Clean Nothing OS with 120Hz AMOLED under <strong className="text-emerald-400">₹14,999</strong>
                </span>
              </div>
            </div>

            {/* Verified Stores Indicator */}
            <div className="hidden lg:flex items-center gap-1.5 flex-shrink-0 text-xs text-slate-300 font-semibold bg-slate-800/80 px-2.5 py-1 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Amazon & Flipkart Verified
            </div>

          </div>
        </div>

        {/* 2. HERO HEADER WITH CLEAR SUBHEADERS */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            MOBIQ SMARTPHONE INTELLIGENCE PLATFORM
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-tight">
            Compare Specs, Predict Price Drops & <span className="gradient-text-brand">Pick the Perfect Phone</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Side-by-side processor benchmarks (AnTuTu / Geekbench), camera sensors, and battery charging speeds. Historical price tracking across <strong className="text-white">Amazon, Flipkart & Croma</strong> to know the exact right time to buy.
          </p>

        </div>

        {/* 3. 4 CORE FEATURE FUNCTION CARDS (EACH WITH SEPARATE UNIQUE ICONS & CLEAR LABELS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          
          {/* Function 1: AI Recommendation */}
          <div 
            onClick={onStartRecommender}
            className="glass-panel p-5 rounded-2xl border border-purple-500/30 bg-purple-950/10 hover:bg-purple-900/20 hover:border-purple-500 cursor-pointer transition-all duration-200 group flex flex-col justify-between space-y-4 shadow-lg hover:shadow-purple-500/10"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                  Function 1
                </span>
                <h3 className="text-base font-bold text-white mt-1 group-hover:text-purple-300 transition-colors">
                  AI Phone Recommender
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Answer 3 quick questions about your budget and priority to get matched instantly.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400 group-hover:translate-x-1 transition-transform">
              <span>Start AI Quiz</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Function 2: Side-by-Side Compare */}
          <div 
            onClick={onStartCompare}
            className="glass-panel p-5 rounded-2xl border border-amber-500/30 bg-amber-950/10 hover:bg-amber-900/20 hover:border-amber-500 cursor-pointer transition-all duration-200 group flex flex-col justify-between space-y-4 shadow-lg hover:shadow-amber-500/10"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GitCompare className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  Function 2
                </span>
                <h3 className="text-base font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                  Compare Arena (Up to 4)
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Deep spec-by-spec comparison matrix: AnTuTu scores, camera sensors, and charging watts.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Open Compare Arena</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Function 3: Price Tracker & Best Time to Buy */}
          <div 
            onClick={() => onSelectCategory('All')}
            className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 hover:bg-emerald-900/20 hover:border-emerald-500 cursor-pointer transition-all duration-200 group flex flex-col justify-between space-y-4 shadow-lg hover:shadow-emerald-500/10"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingDown className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Function 3
                </span>
                <h3 className="text-base font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                  Store Price & Time Tracker
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Compare Amazon vs Flipkart vs Croma prices. View historical high/lows and &ldquo;Best Time to Buy&rdquo;.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
              <span>Check Store Deals</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Function 4: Benchmark & Performance Index */}
          <div 
            onClick={() => onSelectCategory('Gaming')}
            className="glass-panel p-5 rounded-2xl border border-cyan-500/30 bg-cyan-950/10 hover:bg-cyan-900/20 hover:border-cyan-500 cursor-pointer transition-all duration-200 group flex flex-col justify-between space-y-4 shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                  Function 4
                </span>
                <h3 className="text-base font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                  AnTuTu & Gaming Index
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Real verified AnTuTu v10 and Geekbench 6 scores to pick the fastest processor in your budget.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
              <span>Explore Benchmarks</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* 4. QUICK BUDGET & CATEGORY JUMP BAR (CLEARLY LABELED) */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <span>💰 Quick Filter by Budget & Use-Case:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onSelectBudget(15000)}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-500/20 hover:border-cyan-500 text-xs font-bold text-slate-200 hover:text-cyan-300 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>🏷️</span> Under ₹15,000
            </button>

            <button
              onClick={() => onSelectBudget(30000)}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-500/20 hover:border-cyan-500 text-xs font-bold text-slate-200 hover:text-cyan-300 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>🏷️</span> Under ₹30,000
            </button>

            <button
              onClick={() => onSelectBudget(60000)}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-500/20 hover:border-cyan-500 text-xs font-bold text-slate-200 hover:text-cyan-300 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>🏷️</span> Under ₹60,000
            </button>

            <button
              onClick={() => onSelectCategory('Gaming')}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-purple-500/20 hover:border-purple-500 text-xs font-bold text-slate-200 hover:text-purple-300 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>🎮</span> Hardcore Gaming
            </button>

            <button
              onClick={() => onSelectCategory('Camera-Centric')}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-amber-500/20 hover:border-amber-500 text-xs font-bold text-slate-200 hover:text-amber-300 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>📸</span> Pro Camera & Zoom
            </button>

            <button
              onClick={() => onSelectCategory('Flagship')}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-emerald-500/20 hover:border-emerald-500 text-xs font-bold text-slate-200 hover:text-emerald-300 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>💎</span> Ultra Flagships
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
