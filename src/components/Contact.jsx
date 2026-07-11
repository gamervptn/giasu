import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Smartphone } from 'lucide-react'

const contacts = [
  { label: 'Email', value: 'tnam29896@gmail.com', icon: Mail },
  { label: 'Điện thoại', value: '0988 319 834', icon: Phone },
  { label: 'Zalo', value: '0988 319 834', icon: Smartphone }
]

export default function Contact() {
  return (
    <section id="lien-he" className="mx-auto max-w-6xl px-6 pb-28 sm:px-8">
      <div className="mx-auto grid max-w-3xl gap-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Liên hệ</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Đặt lịch học thử và nhận tư vấn miễn phí</h2>
          <p className="max-w-2xl text-slate-400 sm:text-lg">
            Điền thông tin để nhận ngay đề xuất lộ trình học riêng và lịch học thử phù hợp với mục tiêu toán, tin, anh, IELTS hoặc SAT của học sinh.
          </p>
          <div className="space-y-4 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-card">
            {contacts.map(item => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  className="flex items-center gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 px-5 py-4 transition hover:border-emerald-400/40"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/15 to-emerald-400/10 text-cyan-300">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                    <p className="mt-1 font-semibold text-white">{item.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Liên hệ nhanh</p>
            <p className="text-slate-400 sm:text-lg">
              Phụ huynh và học sinh có thể liên hệ nhanh với em qua Zalo hoặc Facebook để trao đổi trực tiếp.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://zalo.me/0988319834"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Zalo
              </a>
              <a
                href="https://www.facebook.com/tuannam.vptn"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-16 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/90 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/40 hover:bg-slate-800"
              >
                Facebook
              </a>
            </div>
            <p className="text-sm text-slate-500">
              Em cam kết bảo mật thông tin cá nhân của học sinh và phụ huynh. Mọi thông tin liên hệ sẽ chỉ được sử dụng cho mục đích tư vấn và hỗ trợ học tập.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
