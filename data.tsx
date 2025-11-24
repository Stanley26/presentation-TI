import { Slide } from './types';

// Import slides from separate modules
import { introSlides } from './slides/01_Intro';
import { foundationSlides } from './slides/02_Foundations';
import { toolingSlides } from './slides/03_Tooling';
import { integrationSlides } from './slides/04_Integration';
import { advancedSlides } from './slides/05_Advanced';

// Aggregate all slides into the final array
export const slides: Slide[] = [
  ...introSlides,
  ...foundationSlides,
  ...toolingSlides,
  ...integrationSlides,
  ...advancedSlides
];
