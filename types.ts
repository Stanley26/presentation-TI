import React from 'react';

export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  theme?: 'default' | 'dark' | 'intro' | 'code';
  layout?: 'split' | 'full' | 'grid'; // Added layout property
}

export interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  goToSlide: (index: number) => void;
}