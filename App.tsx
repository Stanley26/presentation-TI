import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './data';
import { SlideViewer } from './components/SlideViewer';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlideIndex(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="h-screen w-screen bg-slate-50 text-slate-900 flex flex-col relative overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Background Decor - Professional & Tech */}
      <div className="absolute inset-0 z-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
      
      {/* Abstract Shapes for Depth */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col h-full max-h-screen">
        <SlideViewer slide={currentSlide} />
        
        <Navigation 
          currentSlide={currentSlideIndex}
          totalSlides={slides.length}
          title={currentSlide.title}
          subtitle={currentSlide.subtitle}
          onNext={nextSlide}
          onPrev={prevSlide}
          goToSlide={goToSlide}
        />
      </div>
    </div>
  );
};

export default App;