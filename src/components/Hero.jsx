import { useEffect, useState } from 'react'
import { motion, animate, useMotionValue } from 'framer-motion'
import { ArrowRight, Sparkles, ShieldCheck, GraduationCap } from 'lucide-react'
import Headshot from '../../TuanNam.jpg'

function Counter({ value, decimals = 0, suffix = '' }) {
  const motionValue = useMotionValue(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1]
    })

    motionValue.on('change', latest => {
      setCount(Number(latest.toFixed(decimals)))
    })

    return () => controls.stop()
  }, [value, motionValue, decimals])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-28 sm:py-32">
      <motion.div
        className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_38%)] blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute right-0 top-24 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-500/15 to-slate-900/0 blur-3xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Gia sư Cao cấp
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Bứt Phá Tư Duy, Làm Chủ Điểm Số Cùng Gia Sư Chuyên Toán - Tin - Anh / IELTS / SAT
          </h1>
          <p className="mt-6 max-w-xl text-slate-300 sm:text-lg">
            Em là Vũ Phạm Tuấn Nam, học sinh lớp chuyên Tin, Trường THPT Chuyên Chu Văn An - Hà Nội. Em kết nối tốt với học sinh, xây dựng lộ trình và mục tiêu cụ thể để giúp từng em tối ưu năng lực và đạt được thành tích tốt nhất.
          </p>

          <div className="mt-10 rounded-[2rem] border border-emerald-400/20 bg-slate-950/90 p-6 shadow-glow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Học Bổng</p>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">Học bổng em đạt được</h3>
              </div>
              <span className="inline-flex rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                FPT 100% + VinUni 85%
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-800/70 bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">FPT University</p>
                <p className="mt-3 font-semibold text-white">100% học bổng toàn phần | Đại học FPT</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Chiến binh công nghệ Chương trình Tìm kiếm Nhân tài Kỷ nguyên số Việt Nam 2026.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-800/70 bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">VinUniversity</p>
                <p className="mt-3 font-semibold text-white">85% Học bổng Vinh danh của Hiệu trưởng</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Cử nhân Khoa học ngành Kỹ thuật Điện. Tổng gói trị giá 2.773.890.000 VND cho 4 năm.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#chuong-trinh"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-card transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Khám Phá Lớp Học
              <ArrowRight size={18} className="ml-2" />
            </motion.a>
            <motion.a
              href="#lien-he"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/40 hover:bg-slate-800"
            >
              Đăng ký Kiểm tra Năng lực
            </motion.a>
          </div>

          <div className="mt-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-36 w-36 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/70 bg-slate-950/80 p-8 shadow-card backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-cyan-500/20 to-transparent" />
            <div className="relative flex flex-col items-center gap-6 pt-8">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-slate-900/90 before:absolute before:inset-0 before:rounded-full before:border before:border-cyan-500/10 before:shadow-[0_0_60px_rgba(56,189,248,0.25)]">
                <img src={Headshot} alt="Ảnh chân dung" className="relative h-40 w-40 rounded-full object-cover" />
              </div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Gia sư</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Vũ Phạm Tuấn Nam</h2>
                <p className="mt-2 text-sm text-slate-400">Chuyên Tin, THPT Chuyên Chu Văn An - Hà Nội</p>
              </div>

              <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-5 text-center">
                  <div className="flex items-center justify-center gap-2 text-emerald-300">
                    <ShieldCheck size={20} />
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">SAT</p>
                  </div>
                  <p className="mt-4 text-3xl font-semibold text-white"><Counter value={1570} /></p>
                  <p className="mt-2 text-sm text-slate-400">Đọc hiểu 770/800 
                    Toán 800/800</p>
                </div>
                <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-5 text-center">
                  <div className="flex items-center justify-center gap-2 text-cyan-300">
                    <Sparkles size={20} />
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">IELTS</p>
                  </div>
                  <p className="mt-4 text-3xl font-semibold text-white"><Counter value={7.5} decimals={1} /></p>
                  <p className="mt-2 text-sm text-slate-400">Listening 8.5
                    Reading 8.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
