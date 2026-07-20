import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from 'web-vitals';

export function reportWebVitals(onPerfEntry?: (metric: Metric) => void) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
}
