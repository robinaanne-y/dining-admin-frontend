import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const inputVariants = cva(
  "block w-full rounded-md bg-white/5 text-white outline outline-1 transition",
  {
    variants: {
      size: {
        sm: "px-2 py-1.5 text-sm",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-2.5 text-base",
      },
      state: {
        default: "outline-white/10 focus:outline-indigo-500",
        error: "outline-red-500 focus:outline-red-500",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export default function Input({
  className,
  size,
  state,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={cn(inputVariants({ size, state }), className)}
    />
  );
}
