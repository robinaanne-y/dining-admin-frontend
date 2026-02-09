"use client"

import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { apiFetch } from "@/lib/api"

export default function OrdersChart() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    apiFetch("/dashboard/orders/count").then(setData)
  }, [])

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="status" stroke="#64748b" />
          <Tooltip />
          <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
