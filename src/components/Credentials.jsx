import { motion } from 'framer-motion'
import { Award, BookOpen, Flag, Rocket, Trophy, TrendingUp } from 'lucide-react'

const highlights = [
  { title: 'Học bổng xuất sắc', icon: Award },
  { title: 'Top đầu lớp chuyên', icon: TrendingUp },
  { title: 'Phó CT CLB Robots', icon: Trophy },
  { title: 'Kinh nghiệm dạy học', icon: BookOpen }
]

const metrics = [
  {
    label: 'ĐIỂM SAT',
    value: '1570',
    detail: 'Verbal 770 | Math 800',
    accent: 'from-cyan-500 to-emerald-400'
  },
  {
    label: 'IELTS',
    value: '7.5',
    detail: 'Overall (8.5 Listening | 8.0 Reading)',
    accent: 'from-emerald-400 to-cyan-400'
  },
  {
    label: 'ĐIỂM THI VÀO 10',
    value: '45.5',
    detail: 'Toán 9.5 | Văn 8.5 | Anh 9.5 (ĐỖ tất cả các trường công lập tại Hà Nội)',
    accent: 'from-sky-500 to-indigo-500'
  },
  {
    label: 'ĐIỂM TOÁN',
    value: '9 Điểm',
    detail: 'Kỳ thi THPTQG 2026',
    accent: 'from-fuchsia-500 to-pink-500'
  }
]

const class12 = [
  {
    subject: 'Toán học',
    score: '9.6',
    detail: 'Học kì 1: 9.9 | Học kì 2: 9.5'
  },
  {
    subject: 'Tiếng Anh',
    score: '9.9',
    detail: 'Học kì 1: 9.8 | Học kì 2: 10'
  }
]

export default function Credentials() {
  return (
    <section id="gioi-thieu" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
      <div className="space-y-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Học vấn & Thành tích</p>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">Nền tảng học thuật và kết quả thực tế</h2>
        <p className="mx-auto max-w-2xl text-slate-400 sm:text-lg">
          Tổng hợp chứng chỉ, điểm số và vị trí học lực của em, trình bày chuyên nghiệp giúp phụ huynh và học sinh nhanh chóng đánh giá năng lực.
        </p>
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-card"
        >
          <div className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-800/70 bg-slate-900/70 p-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Vũ Phạm Tuấn Nam</p>
                <h3 className="text-3xl font-semibold text-white">Học sinh lớp chuyên Tin</h3>
              </div>
              <span className="inline-flex rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-300/20">
                THPT Chuyên Chu Văn An
              </span>
            </div>

            <p className="text-slate-300">
              Em là Vũ Phạm Tuấn Nam, từng là học sinh khóa K116 chuyên Tin, Trường THPT Chuyên Chu Văn An, Hà Nội. Xếp loại học lực: <span className="text-emerald-300 font-semibold">Xuất Sắc</span>.
            </p>
            <p className="text-slate-300">
              Với niềm đam mê giảng dạy và nền tảng học vấn vững chắc, mình kết nối tốt với học sinh, lên lộ trình và mục tiêu cụ thể theo từng em để giúp các bạn đạt được thành tích tốt nhất trong Toán học, Tin học, <span className="text-emerald-300 font-semibold">đặc biệt là Tiếng Anh, IELTS và SAT</span>.
            </p>
            <p className="text-slate-300">
              Đỗ tất cả các trường cấp 3 công lập với điểm thi vào lớp 10 là <span className="text-cyan-300 font-semibold">45.5 điểm</span> (Toán: 9.5 | Văn: 8.5 | Tiếng Anh: 9.5).
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-emerald-400/10 bg-slate-950/90 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Học bổng nổi bật</p>
              <div className="mt-4 space-y-3 text-slate-300">
                <p className="text-sm leading-6">
                  <span className="font-semibold text-white">FPT</span> - 100% học bổng toàn phần Đại học FPT. Học bổng "Chiến binh công nghệ" chương trình Tìm kiếm Nhân tài Kỷ nguyên số Việt Nam 2026.
                </p>
                <p className="text-sm leading-6">
                  <span className="font-semibold text-white">VinUniversity</span> - 85% học bổng Vinh danh của Hiệu trưởng, chương trình Cử nhân Khoa học ngành Kỹ thuật Điện. Tổng giá trị 2.773.890.000 VND cho 4 năm.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map(item => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-4 transition hover:border-cyan-400/40"
                  >
                    <div className="flex items-center gap-3 text-cyan-300">
                      <Icon size={18} />
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {metrics.map(card => (
              <motion.div
                key={card.label}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="group rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-card transition hover:border-slate-600"
              >
                <div className={`inline-flex rounded-full bg-gradient-to-r ${card.accent} px-3 py-2 text-sm font-semibold text-slate-950`}>{card.label}</div>
                <p className="mt-6 text-5xl font-semibold text-white">{card.value}</p>
                <p className="mt-3 text-sm text-slate-400">{card.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-card"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Học lực Lớp 12</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Kết quả môn trọng tâm</h3>
              </div>
              <Rocket size={24} className="text-emerald-300" />
            </div>

            <div className="mt-8 space-y-4">
              {class12.map(item => (
                <div key={item.subject} className="flex flex-col gap-3 rounded-[1.75rem] border border-slate-800/70 bg-slate-900/80 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{item.subject}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 px-4 py-2 text-xl font-semibold text-white">{item.score}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
