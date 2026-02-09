
import StatsCard from "@/components/ui/statsCard"
import OrderRow from "@/components/dashboard/orderRow"
import QuickButton from "@/components/dashboard/quickButton"
import SalesChart from "@/components/dashboard/salesChart"
import OrdersChart from "@/components/dashboard/ordersChart"

import {
  DollarSign,
  ClipboardList,
  UtensilsCrossed,
  Users,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-slate-400">
          Overview of today’s restaurant activity
        </p>
      </div>

      {/* ================= STATS CARDS ================= */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Today's Sales"
          value="$1,248"
          icon={<DollarSign size={18} />}
        />

        <StatsCard
          title="Orders"
          value="86"
          icon={<ClipboardList size={18} />}
        />

        <StatsCard
          title="Menu Items"
          value="42"
          icon={<UtensilsCrossed size={18} />}
        />

        <StatsCard
          title="Customers"
          value="215"
          icon={<Users size={18} />}
        />
      </section>

      {/* ================= MAIN GRID ================= */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl bg-slate-900 border border-slate-800 p-6">
          <h2 className="text-sm font-semibold text-slate-300 mb-4">
            Sales Overview
          </h2>

          <SalesChart />
        </div>

        <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
          <h2 className="text-sm font-semibold text-slate-300 mb-4">
            Orders Breakdown
          </h2>

          <OrdersChart />
        </div>
      </section>

      {/* ================= TABLE ================= */}
      <section className="rounded-xl bg-slate-900 border border-slate-800 p-6">
        <h2 className="text-sm font-semibold text-slate-300 mb-4">
          Recent Orders
        </h2>

        <table className="w-full text-sm">
          <thead className="text-slate-400 border-b border-slate-800">
            <tr>
              <th className="text-left py-2">Order</th>
              <th className="text-left">Customer</th>
              <th className="text-left">Total</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800">
            <OrderRow id="#1001" name="John Doe" total="$24.00" status="Completed" />
            <OrderRow id="#1002" name="Anna Lee" total="$18.50" status="Preparing" />
            <OrderRow id="#1003" name="Mark Cruz" total="$41.20" status="Pending" />
          </tbody>
        </table>
      </section>
    </div>
  )
}