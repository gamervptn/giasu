import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Credentials from './components/Credentials.jsx'
import Subjects from './components/Subjects.jsx'
import Awards from './components/Awards.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(180deg,#020617_0%,#071124_55%,#0b1220_100%)] text-slate-100">
      <Navbar />
      <main className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle,_rgba(56,189,248,0.14),transparent_40%)] blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
        <motion.div
          className="pointer-events-none absolute -left-20 top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute -right-24 bottom-10 h-60 w-60 rounded-full bg-emerald-500/15 blur-3xl"
          animate={{ x: [0, 12, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Hero />
        <Credentials />
        <Subjects />
        <Awards />
        <Contact />
      </main>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-slate-800/70 bg-slate-950/70 py-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-slate-400 sm:px-8 md:flex-row md:justify-between md:text-left">
          <p>Gia sư  Vũ Phạm Tuấn Nam</p>
          <p>Tận tâm, nhiệt tình, giúp học sinh đạt mục tiêu!</p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
