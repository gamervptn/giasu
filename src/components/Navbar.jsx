import { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Trang chủ', href: '#hero' },
  { name: 'Về em', href: '#gioi-thieu' },
  { name: 'Chương trình', href: '#chuong-trinh' },
  { name: 'Thành tích', href: '#thanh-tich' },
  { name: 'Liên hệ', href: '#lien-he' }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
     <motion.header
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: 'easeOut' }}
       className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-2xl shadow-card"
     >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#hero" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.23em] text-emerald-300 transition hover:text-emerald-200">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 text-emerald-300 ring-1 ring-emerald-300/20">
            <GraduationCap size={20} />
          </span>
          <span>Tuấn Nam</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="transition hover:text-emerald-300">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="https://zalo.me/0988319834" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-card transition hover:brightness-110">
            Đăng ký Học thử / Tư vấn
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-slate-700/80 bg-slate-900/90 text-slate-100 transition hover:border-cyan-400/40 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Mở menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-800/70 bg-slate-950/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="rounded-3xl px-4 py-3 text-slate-100 transition hover:bg-slate-800/70" onClick={() => setMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="https://zalo.me/0988319834" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-emerald-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              Đăng ký Học thử / Tư vấn
            </a>
          </div>
        </div>
      )}
     </motion.header>
  )
}
