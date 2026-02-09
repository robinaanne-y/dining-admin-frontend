import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium border",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-300 border-slate-700",

        success: "bg-green-500/15 text-green-400 border-green-500/30",
        warning: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
        danger: "bg-red-500/15 text-red-400 border-red-500/30",
        info: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}
