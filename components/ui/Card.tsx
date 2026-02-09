export default function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  )
}