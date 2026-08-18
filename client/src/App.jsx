import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Zap, GitCompare, TrendingDown, Sparkles, 
  ShieldCheck, ArrowUp
} from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExploreCatalog from './components/ExploreCatalog';
import RecommendationWizard from './components/RecommendationWizard';
import ComparisonArena from './components/ComparisonArena';
import PriceTrackerPage from './components/PriceTrackerPage';
import PhoneDetailModal from './components/PhoneDetailModal';
import CompareTray from './components/CompareTray';
import { fetchPhones } from './services/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore');
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Compare List (up to 4 phones)
  const [compareList, setCompareList] = useState([]);

  // Detail Modal
  const [modalPhone, setModalPhone] = useState(null);

  // Quick filters triggered from Hero Section
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxBudgetFilter, setMaxBudgetFilter] = useState(160000);

  // Load phones on initial render
  useEffect(() => {
    fetchPhones()
      .then(res => {
        if (res.success) {
          setPhones(res.data);
          // Pre-populate comparison with top 2 flagships for instant demo
          if (res.data.length >= 2) {
            setCompareList([res.data[0], res.data[1]]);
          }
        }
      })
      .catch(err => {
        console.error('API Error:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleToggleCompare = (phone) => {
    setCompareList(prev => {
      const exists = prev.some(p => p.id === phone.id);
      if (exists) {
        return prev.filter(p => p.id !== phone.id);
      } else {
        if (prev.length >= 4) {
          alert('You can compare up to 4 phones simultaneously. Remove one before adding.');
          return prev;
        }
        return [...prev, phone];
      }
    });
  };

  const handleRemoveCompare = (phoneId) => {
    setCompareList(prev => prev.filter(p => p.id !== phoneId));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  const handleStartCompareWith = (phone) => {
    if (!compareList.some(p => p.id === phone.id)) {
      if (compareList.length >= 4) {
        setCompareList([compareList[0], phone]);
      } else {
        setCompareList(prev => [...prev, phone]);
      }
    }
    setActiveTab('compare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompareMultiple = (phoneArray) => {
    setCompareList(phoneArray.slice(0, 4));
    setActiveTab('compare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070a12] text-slate-100 bg-ambient-grid selection:bg-cyan-500 selection:text-black">
      
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        compareList={compareList}
        allPhones={phones}
        onSelectPhone={(phone) => setModalPhone(phone)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-20">
        
        {/* Render Tab Views */}
        {activeTab === 'explore' && (
          <div>
            <HeroSection
              onStartRecommender={() => {
                setActiveTab('recommender');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onStartCompare={() => {
                setActiveTab('compare');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                const el = document.getElementById('catalog-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectBudget={(budget) => {
                setMaxBudgetFilter(budget);
                const el = document.getElementById('catalog-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <div id="catalog-section">
              <ExploreCatalog
                phones={phones}
                compareList={compareList}
                onToggleCompare={handleToggleCompare}
                onSelectPhone={(p) => setModalPhone(p)}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                maxBudgetFilter={maxBudgetFilter}
                setMaxBudgetFilter={setMaxBudgetFilter}
              />
            </div>
          </div>
        )}

        {activeTab === 'recommender' && (
          <RecommendationWizard
            onSelectPhone={(p) => setModalPhone(p)}
            onCompareMultiple={handleCompareMultiple}
          />
        )}

        {activeTab === 'compare' && (
          <ComparisonArena
            compareList={compareList}
            allPhones={phones}
            onRemovePhone={handleRemoveCompare}
            onAddPhone={(p) => handleToggleCompare(p)}
            onSelectPhone={(p) => setModalPhone(p)}
          />
        )}

        {activeTab === 'price-tracker' && (
          <PriceTrackerPage
            allPhones={phones}
            onSelectPhone={(p) => setModalPhone(p)}
          />
        )}

      </main>

      {/* Floating Compare Tray (visible when 1+ phones are selected and not already in Compare Arena) */}
      {activeTab !== 'compare' && (
        <CompareTray
          compareList={compareList}
          onRemove={handleRemoveCompare}
          onClearAll={handleClearCompare}
          onOpenArena={() => {
            setActiveTab('compare');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Detail Modal */}
      {modalPhone && (
        <PhoneDetailModal
          phone={modalPhone}
          onClose={() => setModalPhone(null)}
          isCompared={compareList.some(p => p.id === modalPhone.id)}
          onToggleCompare={handleToggleCompare}
          onStartCompareWith={handleStartCompareWith}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#05080f] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-cyan-400" />
                <span className="text-xl font-extrabold font-heading gradient-text-brand">MobIQ</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Next-Gen Smartphone Recommendation, Deep Spec Comparison & Multi-Store Live Price Tracking Engine.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                MERN Stack Architecture
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                Intelligence Modules
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => setActiveTab('recommender')} className="hover:text-cyan-400">AI Phone Matcher Wizard</button></li>
                <li><button onClick={() => setActiveTab('compare')} className="hover:text-cyan-400">Side-by-Side Spec Arena</button></li>
                <li><button onClick={() => setActiveTab('price-tracker')} className="hover:text-cyan-400">Multi-Store Price Drop Tracker</button></li>
                <li><button onClick={() => setActiveTab('explore')} className="hover:text-cyan-400">AnTuTu Benchmark Index</button></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                Tracked Retailers
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2"><span>🛍️</span> Flipkart India</li>
                <li className="flex items-center gap-2"><span>📦</span> Amazon.in</li>
                <li className="flex items-center gap-2"><span>🏬</span> Croma Electronics</li>
                <li className="flex items-center gap-2"><span>⚡</span> Reliance Digital</li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">MongoDB</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Express.js</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">React 18</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Node.js</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Chart.js</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Lucide Icons</span>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>© 2026 MobIQ Smartphone Intelligence Hub. All rights reserved.</div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
