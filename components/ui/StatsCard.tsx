export default function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}
