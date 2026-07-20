"use client";
import React, { useState, useCallback } from "react";
import { m, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "../../lib/utils";
import { EASE_OUT_EXPO } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

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
      <div className="relative h-[2px] w-full bg-white/[0.06] rounded-full mb-6 overflow-hidden">
        <m.div
          className="absolute top-0 left-0 h-full rounded-full"
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          style={{
            background: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.6))",
            boxShadow: "0 0 8px rgba(255,255,255,0.1)",
          }}
        />
      </div>

      {/* Step dots (desktop) */}
      <div className="hidden sm:flex items-center justify-between">
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
                "flex items-center gap-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-1 py-0.5 transition-all duration-300",
                isAccessible ? "cursor-pointer" : "cursor-default opacity-40"
              )}
              aria-label={`Step ${i + 1}: ${step.title}`}
              aria-current={isCurrent ? "step" : undefined}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold border transition-all duration-300 shrink-0",
                  isCompleted
                    ? "bg-white text-black border-white"
                    : isCurrent
                      ? "bg-white/10 text-white border-white/40"
                      : "bg-transparent text-[#555] border-white/10"
                )}
              >
                {isCompleted ? <Check className="w-3 h-3" /> : i + 1}
              </div>
              <span
                className={cn(
                  "text-xs font-medium hidden lg:block transition-colors duration-300",
                  isCurrent ? "text-white" : isCompleted ? "text-[#aaa]" : "text-[#555]"
                )}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile: current step label */}
      <div className="sm:hidden flex items-center justify-between">
        <span className="text-xs font-mono text-[#555]">
          Step {currentStep + 1} of {steps.length}
        </span>
        <span className="text-sm font-medium text-white">{steps[currentStep].title}</span>
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
  submitLabel = "Submit",
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
    [currentStep]
  );

  const variants = prefersReducedMotion
    ? { enter: { opacity: 1 }, center: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0, filter: "blur(4px)" }),
        center: { x: 0, opacity: 1, filter: "blur(0px)" },
        exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0, filter: "blur(4px)" }),
      };

  return (
    <div className={cn("w-full", className)}>
      <StepIndicator steps={steps} currentStep={currentStep} onStepClick={goToStep} />

      {/* Step description */}
      {steps[currentStep].description && (
        <p className="text-sm text-[#888] mb-6">{steps[currentStep].description}</p>
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
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
        <button
          onClick={goBack}
          disabled={isFirstStep}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-3 py-2",
            isFirstStep
              ? "text-[#333] cursor-default"
              : "text-[#888] hover:text-white cursor-pointer"
          )}
          aria-label="Previous step"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        <button
          onClick={goNext}
          className={cn(
            "flex items-center gap-2 font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl px-6 py-3",
            isLastStep
              ? "bg-white text-black hover:bg-gray-100 text-base"
              : "bg-white/10 text-white hover:bg-white/15 text-sm border border-white/10"
          )}
          aria-label={isLastStep ? submitLabel : "Next step"}
        >
          {isLastStep ? submitLabel : "Continue"}
          {isLastStep ? <Check className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
