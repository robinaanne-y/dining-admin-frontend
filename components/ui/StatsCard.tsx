export default function StatsCard({
  title,
  value,
  icon,
}: {
  title: string
  value: string
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-400">{title}</p>
        <p className="text-xl font-bold text-white">{value}</p>
      </div>

      <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
        {icon}
      </div>
    </div>
  )
}