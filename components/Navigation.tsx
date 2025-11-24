import React from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { NavigationProps } from '../types';

export const Navigation: React.FC<NavigationProps & { title: string, subtitle?: string }> = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev,
  title,
  subtitle
}) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-4 md:py-6 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        
        {/* Progress Bar (Absolute top of footer) */}
        <div className="absolute top-0 left-0 h-1 bg-slate-100 w-full">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Slide Info */}
        <div className="hidden md:flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Slide {currentSlide + 1} / {totalSlides}</span>
          <span className="text-sm font-semibold text-slate-800 truncate max-w-xs lg:max-w-md">{title}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2 w-full md:w-auto justify-between md:justify-end">
           <button 
             onClick={onPrev}
             disabled={currentSlide === 0}
             className={`p-3 rounded-full flex items-center justify-center transition-colors ${currentSlide === 0 ? 'text-slate-300 cursor-not-allowed' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-blue-600'}`}
           >
             <ChevronLeft size={24} />
           </button>

           <div className="md:hidden flex flex-col items-center">
             <span className="text-xs font-bold text-slate-400">{currentSlide + 1} / {totalSlides}</span>
           </div>

           <button 
             onClick={onNext}
             disabled={currentSlide === totalSlides - 1}
             className={`p-3 rounded-full flex items-center justify-center transition-colors ${currentSlide === totalSlides - 1 ? 'text-slate-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'}`}
           >
             <ChevronRight size={24} />
           </button>
        </div>
      </div>
    </div>
  );
};
