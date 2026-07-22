import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/**
 * Input — consistent form input primitive.
 * Matches the design system's dark theme with proper focus states.
 *
 * Usage:
 *   <Input placeholder="Email address" type="email" />
 *   <Input variant="ghost" size="lg" />
 */

const inputVariants = cva(
  'w-full text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/20 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-card border border-border focus:border-border-hover hover:border-border-hover',
        ghost: 'bg-accent border border-transparent focus:border-border hover:bg-accent',
        glass:
          'bg-white/5 border border-border backdrop-blur-md focus:border-white/25 hover:bg-accent',
      },
      inputSize: {
        sm: 'px-3 py-2 text-sm rounded-lg',
        default: 'px-4 py-3 text-base rounded-xl',
        lg: 'px-5 py-4 text-lg rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ variant, inputSize, className }))}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

/**
 * Textarea — consistent multiline text input.
 */

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, inputSize, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(inputVariants({ variant, inputSize, className }), 'min-h-[120px] resize-y')}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';
