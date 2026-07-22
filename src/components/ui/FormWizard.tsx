'use client';
import React, { useState, useCallback } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { EASE_OUT_EXPO } from '../../lib/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/* ═══════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════ */

export interface WizardStep {
  id: string;
  title: string;
  /** Optional short description */
  description?: string;
}

interface FormWizardProps {
  steps: WizardStep[];
  children: (currentStep: number) => React.ReactNode;
  onComplete?: () => void;
  /** Custom submit button label. Default: "Submit" */
  submitLabel?: string;
  className?: string;
}

/* ═══════════════════════════════════════════════════════════
   STEP INDICATOR — horizontal progress bar with labels
═══════════════════════════════════════════════════════════ */

function StepIndicator({
  steps,
  currentStep,
  onStepClick,
}: {
  steps: WizardStep[];
  currentStep: number;
  onStepClick: (index: number) => void;
}) {
  return (
    <div className="mb-10">
      {/* Progress bar */}
      <div className="bg-accent relative mb-6 h-[2px] w-full overflow-hidden rounded-full">
        <m.div
          className="absolute top-0 left-0 h-full rounded-full"
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.6))',
            boxShadow: '0 0 8px rgba(255,255,255,0.1)',
          }}
        />
      </div>

      {/* Step dots (desktop) */}
      <div className="hidden items-center justify-between sm:flex">
        {steps.map((step, i) => {
          const isCompleted = i < currentStep;
          const isCurrent = i === currentStep;
          const isAccessible = i <= currentStep;

          return (
            <button
              key={step.id}
              onClick={() => isAccessible && onStepClick(i)}
              disabled={!isAccessible}
              className={cn(
                'focus-visible:ring-ring flex items-center gap-2 rounded-md px-1 py-0.5 text-left transition-all duration-300 outline-none focus-visible:ring-2',
                isAccessible ? 'cursor-pointer' : 'cursor-default opacity-40',
              )}
              aria-label={`Step ${i + 1}: ${step.title}`}
              aria-current={isCurrent ? 'step' : undefined}
            >
              <div
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] font-bold transition-all duration-300',
                  isCompleted
                    ? 'border-white bg-white text-black'
                    : isCurrent
                      ? 'text-foreground border-white/40 bg-white/10'
                      : 'text-muted-foreground/60 border-border bg-transparent',
                )}
              >
                {isCompleted ? <Check className="h-3 w-3" /> : i + 1}
              </div>
              <span
                className={cn(
                  'hidden text-xs font-medium transition-colors duration-300 lg:block',
                  isCurrent
                    ? 'text-foreground'
                    : isCompleted
                      ? 'text-muted-foreground'
                      : 'text-muted-foreground/60',
                )}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile: current step label */}
      <div className="flex items-center justify-between sm:hidden">
        <span className="text-muted-foreground/60 font-mono text-xs">
          Step {currentStep + 1} of {steps.length}
        </span>
        <span className="text-foreground text-sm font-medium">{steps[currentStep].title}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FORM WIZARD — main orchestrator
═══════════════════════════════════════════════════════════ */

export function FormWizard({
  steps,
  children,
  onComplete,
  submitLabel = 'Submit',
  className,
}: FormWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const prefersReducedMotion = useReducedMotion();

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const goNext = useCallback(() => {
    if (isLastStep) {
      onComplete?.();
      return;
    }
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  }, [isLastStep, onComplete, steps.length]);

  const goBack = useCallback(() => {
    setDirection(-1);
    setCurrentStep((s) => Math.max(s - 1, 0));
  }, []);

  const goToStep = useCallback(
    (index: number) => {
      setDirection(index > currentStep ? 1 : -1);
      setCurrentStep(index);
    },
    [currentStep],
  );

  const variants = prefersReducedMotion
    ? { enter: { opacity: 1 }, center: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0, filter: 'blur(4px)' }),
        center: { x: 0, opacity: 1, filter: 'blur(0px)' },
        exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0, filter: 'blur(4px)' }),
      };

  return (
    <div className={cn('w-full', className)}>
      <StepIndicator steps={steps} currentStep={currentStep} onStepClick={goToStep} />

      {/* Step description */}
      {steps[currentStep].description && (
        <p className="text-muted-foreground mb-6 text-sm">{steps[currentStep].description}</p>
      )}

      {/* Step content with directional animation */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait" custom={direction}>
          <m.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            className="w-full"
          >
            {children(currentStep)}
          </m.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="border-border mt-8 flex items-center justify-between border-t pt-6">
        <button
          onClick={goBack}
          disabled={isFirstStep}
          className={cn(
            'focus-visible:ring-ring flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2',
            isFirstStep
              ? 'cursor-default text-[#333]'
              : 'text-muted-foreground hover:text-foreground cursor-pointer',
          )}
          aria-label="Previous step"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        <button
          onClick={goNext}
          className={cn(
            'focus-visible:ring-ring flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 outline-none focus-visible:ring-2',
            isLastStep
              ? 'bg-white text-base text-black hover:bg-gray-100'
              : 'text-foreground border-border border bg-white/10 text-sm hover:bg-white/15',
          )}
          aria-label={isLastStep ? submitLabel : 'Next step'}
        >
          {isLastStep ? submitLabel : 'Continue'}
          {isLastStep ? <Check className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
