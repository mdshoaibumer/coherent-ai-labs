import { describe, it, expect } from 'vitest';
import { cn } from '../lib/utils';

describe('cn utility function', () => {
  it('should merge basic classes', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
  });

  it('should conditionally merge classes', () => {
    const isActive = true;
    expect(cn('btn', isActive && 'btn-active')).toBe('btn btn-active');
  });

  it('should resolve Tailwind conflicts correctly', () => {
    // tailwind-merge resolves p-4 and p-2 to p-2
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });
});
