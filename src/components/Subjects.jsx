import { motion } from 'framer-motion'
import { ArrowRight, Calculator, Laptop, Globe } from 'lucide-react'

const subjects = [
  {
    title: 'Tiếng Anh / IELTS / SAT (CHUYÊN MÔN)',
    icon: Globe,
    audience: 'Đối tượng: Học sinh muốn nâng band IELTS/SAT, luyện kỹ năng đọc hiểu, viết luận và làm chủ chiến thuật làm bài thi IELTS hoặc SAT',
    details: [
      'Chiến thuật bứt phá band điểm',
      'Ngữ pháp chuyên sâu và từ vựng chủ đạo',
      'Luyện tập SAT độc quyền với tư duy logic',
      'Bứt phá điểm số trong kỳ thi IELTS và SAT',
      'Phù hợp với những học sinh mong muốn đạt 7.0+ IELTS hoặc 1500+ SAT'
    ]
  },
  {
    title: 'Gia Sư Toán',
    icon: Calculator,
    audience: 'Đối tượng: Học sinh THCS muốn học vững kiến thức, bứt phá điểm số và ôn thi vào 10',
    details: [
      'Toán tư duy và giải nhanh',
      'Toán THCS, ôn thi vào 10',
      'Phát triển chiến lược làm bài hiệu quả',
      'Phù hợp với những học sinh mong muốn đạt 9+ điểm Toán trong kỳ thi vào lớp 10 hoặc Giữa kì/ cuối kì THCS'
    ]
  },
  {
    title: 'Tin học lập trình thi đấu',
    icon: Laptop,
    audience: 'Đối tượng: Học sinh THCS có nhu cầu muốn ôn thi học sinh giỏi, lập trình C++ và tư duy thuật toán',
    details: [
      'Lập trình C++ cơ bản',
      'Tư duy thuật toán + quy hoạch động',
      'Chuẩn bị kỳ thi học sinh giỏi cấp THCS'
    ]
  }
]

export default function Subjects() {
  return (
    <section id="chuong-trinh" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
      <div className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Chương trình giảng dạy</p>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">Các chương trình luyện tập trọng tâm</h2>
        <p className="mx-auto max-w-2xl text-slate-400 sm:text-lg">
          Mỗi môn học được thiết kế để tối ưu hóa khả năng làm bài, xây dựng tư duy và đạt được điểm số cao trong các kỳ thi IELTS, SAT và các cuộc thi học thuật.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {subjects.map(subject => {
          const Icon = subject.icon
          return (
            <motion.article
              key={subject.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              className="group rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow transition hover:border-emerald-400/40"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 text-emerald-300 ring-1 ring-emerald-300/20">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{subject.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{subject.audience}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {subject.details.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#lien-he" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-100">
                Xem Chi Tiết
                <ArrowRight size={16} />
              </a>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
