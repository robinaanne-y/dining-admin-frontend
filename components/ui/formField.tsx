import { ReactNode } from "react";

interface FormFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}

export default function FormField({
  label,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-200">
          {label}
        </label>
      )}

      {children}

      {hint && !error && (
        <p className="text-xs text-gray-400">{hint}</p>
      )}

      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}