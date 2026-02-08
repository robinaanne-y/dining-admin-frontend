import AdminShell from "@/components/layouts/AdminShell"

export default function DashboardPage() {
  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          Orders Today
        </div>

        <div className="bg-slate-800 p-4 rounded-lg">
          Sales
        </div>

        <div className="bg-slate-800 p-4 rounded-lg">
          Active Tables
        </div>
      </div>
    </AdminShell>
  )
}
