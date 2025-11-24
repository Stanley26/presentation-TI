import React, { useEffect, useState } from 'react';
    import { Slide } from '../types';
    
    interface SlideViewerProps {
      slide: Slide;
    }
    
    export const SlideViewer: React.FC<SlideViewerProps> = ({ slide }) => {
      // Key trick to force re-render animation when slide ID changes
      const [key, setKey] = useState(0);
    
      useEffect(() => {
        setKey(prev => prev + 1);
      }, [slide.id]);
    
      return (
        <main 
          key={key}
          className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-10 mb-20 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards"
        >
          {/* Header Section */}
          <header className="mb-10 flex flex-col justify-center border-l-4 border-blue-600 pl-6 py-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="text-xl md:text-2xl text-slate-500 mt-3 font-medium leading-relaxed max-w-4xl">
                {slide.subtitle}
              </p>
            )}
          </header>
          
          {/* Content Section */}
          <div className="flex-1 overflow-y-auto pr-4 pb-8 custom-scrollbar">
            {slide.content}
          </div>
        </main>
      );
    };