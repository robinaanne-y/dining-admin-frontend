"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ClipboardList,
  Table,
  HandPlatter,
  UtensilsCrossed,
  Users,
  IdCardLanyard,
  Settings,
  LogOut,
  X,  
  PanelLeftClose,
  PanelLeftOpen, 
  Menu,
} from "lucide-react"

export default function AdminShell({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/orders", label: "Orders", icon: ClipboardList },
    { href: "/admin/menu", label: "Menu", icon: UtensilsCrossed },
    { href: "/admin/tables", label: "Tables", icon: HandPlatter },
    { href: "/admin/customers", label: "Customers", icon: Users },
    { href: "/admin/staff", label: "Staff", icon: IdCardLanyard },
    { href: "/admin/reports", label: "Reports", icon: Table },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  const sidebarWidth = collapsed ? "w-16" : "w-64"

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed lg:relative z-50
          ${sidebarWidth}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          transition-all duration-300
          flex flex-col
          bg-slate-900 border-r border-slate-800
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4">
          {!collapsed && (
            <h1 className="font-bold text-lg whitespace-nowrap">
              🍽 Dining
            </h1>
          )}

          {/* collapse btn desktop */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:block"
          >
            {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>

          {/* close btn mobile */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex-1 space-y-1 px-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition
                  ${active
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"}
                `}
              >
                <Icon size={18} />
                {!collapsed && item.label}
              </Link>
            )
          })}
        </nav>

        {/* FOOTER */}
        <div className="p-2 border-t border-slate-800">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 hover:bg-red-900/20">
            <LogOut size={18} />
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex flex-1 flex-col">
        {/* TOP BAR (mobile hamburger) */}
        <header className="flex items-center gap-3 border-b border-slate-800 p-4 lg:hidden">
          <button onClick={() => setMobileOpen(true)}>
            <Menu size={20} />
          </button>
          <span className="font-semibold">Admin Panel</span>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}