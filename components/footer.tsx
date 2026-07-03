'use client'

export function Footer() {
  return (
    <footer className="mt-32 pb-16 border-t border-[var(--border)] pt-12">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-[10px] text-[var(--text-sec)] font-mono uppercase font-black tracking-widest opacity-40">
            MHPSS Dashboard v2.4.0 // CANONICAL DESIGN SYSTEM
          </div>
          <div className="text-[9px] text-[var(--text-sec)] font-medium opacity-30">
            © 2026 MHPSS Coordination Unit. Data verified against NSZU, WHO, CHD (UN Cluster).
          </div>
        </div>
        <div className="flex gap-8 text-[10px] text-[var(--text-sec)] uppercase font-bold tracking-widest opacity-60">
          <a href="#" className="hover:text-[var(--teal)] transition-colors">Methodology</a>
          <a href="#" className="hover:text-[var(--teal)] transition-colors">Audit log</a>
          <a href="#" className="hover:text-[var(--teal)] transition-colors">API Keys</a>
        </div>
      </div>
    </footer>
  )
}

