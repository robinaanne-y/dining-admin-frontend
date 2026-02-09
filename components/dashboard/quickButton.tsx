
export default function QuickButton({ label }: { label: string }) {
  return (
    <button className="w-full rounded-lg bg-slate-800 hover:bg-slate-700 p-2 text-sm">
      {label}
    </button>
  )
}
