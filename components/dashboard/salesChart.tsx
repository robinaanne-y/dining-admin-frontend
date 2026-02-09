"use client"

import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { apiFetch } from "@/lib/api"

export default function SalesChart() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    apiFetch("/dashboard/sales").then(setData)
  }, [])

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#6366f1"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
