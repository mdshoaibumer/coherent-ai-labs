import React from "react";
import { cn } from "../../lib/utils";

/**
 * FormField — wraps an input with label, description, and error message.
 * Ensures consistent spacing, labeling, and accessibility across all forms.
 *
 * Usage:
 *   <FormField label="Email" description="We'll never share your email." error={errors.email}>
 *     <Input type="email" placeholder="you@company.com" aria-invalid={!!errors.email} />
 *   </FormField>
 */

interface FormFieldProps {
  /** Field label text */
  label: string;
  /** Optional help text below the input */
  description?: string;
  /** Error message — shows in red when present */
  error?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Unique ID to connect label with input */
  htmlFor?: string;
  /** Additional class names */
  className?: string;
  children: React.ReactNode;
}

export function FormField({
  label,
  description,
  error,
  required,
  htmlFor,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-white"
      >
        {label}
        {required && (
          <span className="text-[#ff4444] ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {children}

      {description && !error && (
        <p className="text-xs text-[#666]" id={htmlFor ? `${htmlFor}-description` : undefined}>
          {description}
        </p>
      )}

      {error && (
        <p
          className="text-xs text-[#ff4444] flex items-center gap-1"
          role="alert"
          id={htmlFor ? `${htmlFor}-error` : undefined}
        >
          <svg
            className="w-3 h-3 shrink-0"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="8" opacity="0.2" />
            <path d="M8 4v5M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * FormSection — groups related form fields with a title.
 *
 * Usage:
 *   <FormSection title="Contact Information">
 *     <FormField>...</FormField>
 *     <FormField>...</FormField>
 *   </FormSection>
 */

interface FormSectionProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function FormSection({ title, description, className, children }: FormSectionProps) {
  return (
    <fieldset className={cn("space-y-6", className)}>
      <legend className="sr-only">{title}</legend>
      <div className="mb-6">
        <h3 className="font-display text-lg font-medium text-white mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-[#888]">{description}</p>
        )}
      </div>
      {children}
    </fieldset>
  );
}
