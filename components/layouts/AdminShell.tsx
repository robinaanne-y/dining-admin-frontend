export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <aside className="w-64 bg-slate-900 p-4">
        Sidebar here
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
