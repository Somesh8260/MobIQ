import React from 'react';
import { GitCompare, X, ArrowRight } from 'lucide-react';

export default function CompareTray({
  compareList = [],
  onRemove,
  onClearAll,
  onOpenArena
}) {
  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl animate-fadeIn">
      <div className="glass-panel p-3 sm:p-4 rounded-3xl border border-amber-500/40 bg-[#0d1322]/95 shadow-2xl backdrop-blur-2xl flex items-center justify-between gap-3">
        
        {/* Selected Phone Thumbnails */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {compareList.map((phone) => (
            <div
              key={phone.id}
              className="relative flex items-center gap-2 p-1.5 pr-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex-shrink-0"
            >
              <img
                src={phone.imageUrl}
                alt={phone.name}
                className="w-8 h-8 object-contain rounded-lg bg-slate-950"
              />
              <div className="hidden sm:block text-left">
                <div className="text-[11px] font-bold text-white line-clamp-1 max-w-[100px]">{phone.name}</div>
                <div className="text-[10px] text-cyan-400 font-semibold">₹{phone.basePrice.toLocaleString('en-IN')}</div>
              </div>
              <button
                onClick={() => onRemove(phone.id)}
                className="w-5 h-5 rounded-full bg-slate-800 hover:bg-rose-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}

          {compareList.length < 4 && (
            <div className="text-xs text-slate-500 font-medium px-2 hidden sm:block">
              + Add up to {4 - compareList.length} more
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onClearAll}
            className="text-[11px] font-semibold text-slate-400 hover:text-slate-200 px-2 py-1"
          >
            Clear
          </button>

          <button
            onClick={onOpenArena}
            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
          >
            <GitCompare className="w-4 h-4 stroke-[2.5]" />
            Compare ({compareList.length})
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
