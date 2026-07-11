import { motion } from 'framer-motion'
import { Award, CalendarDays, Users } from 'lucide-react'

const awardsByYear = [
  {
    year: '2023 (Lớp 9)',
    items: [
      {
        title: 'Giải Nhất',
        meta: 'Học sinh giỏi Tin học cấp Quận Tây Hồ',
        description: 'Đạt giải Nhất trong kỳ thi tin học cấp quận, khẳng định năng lực lập trình và tư duy giải thuật.'
      },
      {
        title: 'Giải Ba',
        meta: 'Tin học cấp Trường',
        description: 'Đạt Giải Ba tại cuộc thi tin học cấp trường, thể hiện thành tích học thuật bền vững và kỹ năng thực hành tốt.'
      }
    ]
  },
  {
    year: '2024 (Lớp 10)',
    items: [
      {
        title: 'Judges’ Choice Award',
        meta: 'Robotics FIRST Tech Challenge (FTC Vietnam)',
        description: 'Được Ban giám khảo đánh giá xuất sắc trong toàn bộ dự án'
      },
      {
        title: 'Giải Nhất',
        meta: 'Khoa học Kỹ thuật cấp Trường',
        description: 'Ý tưởng và triển khai dự án STEAM sáng tạo'
      },
      {
        title: 'Giải Nhì',
        meta: 'Hội thi Tin học trẻ cấp Quận Tây Hồ',
        description: 'Thực hành lập trình và giải quyết bài toán tin học'
      },
      {
        title: 'Giải Ba',
        meta: 'Olympic Tin học cấp Cụm Ba Đình - Tây Hồ',
        description: 'Thành tích vững vàng trong kỳ thi tin học cạnh tranh'
      },
      {
        title: 'Chứng nhận tham gia',
        meta: 'Vietnam Open Robotics Challenge 2024',
        description: 'Khẳng định năng lực thi đấu và hợp tác robotics'
      }
    ]
  },
  {
    year: '2025 (Lớp 11)',
    items: [
      {
        title: 'Giải Khuyến khích',
        meta: 'Học sinh giỏi môn Tin học cấp Thành phố Hà Nội',
        description: 'Kết quả thi năng lực cao trong môi trường cạnh tranh'
      },
      {
        title: 'Giải Khuyến khích',
        meta: 'Hội thi Tin học trẻ cấp Quận Tây Hồ',
        description: 'Tham gia và đạt giải trong diễn đàn tin học trẻ'
      },
      {
        title: 'Giải Khuyến khích',
        meta: 'Olympic Tin học cấp Cụm Ba Đình - Tây Hồ',
        description: 'Thử thách tư duy thuật toán và lập trình ứng dụng'
      },
      {
        title: 'Giải Khuyến khích & Sáng tạo',
        meta: 'Cuộc thi EC Challenge',
        description: 'Ý tưởng sáng tạo và thực hiện mô hình công nghệ học thuật'
      },
      {
        title: 'Giải Thiết kế Xuất sắc',
        meta: 'FPTU AI & Robotics Challenge',
        description: 'Vai trò Đội trưởng & Lập trình viên chính'
      },
      {
        title: 'Giải Nghiên cứu Triển vọng',
        meta: 'Cuộc thi Khoa học Kỹ thuật cấp Trường',
        description: 'Đề tài ứng dụng AI và robotics trong giải pháp giáo dục thông minh'
      }
    ]
  }
]

const leadership = [
  {
    title: 'Phó Chủ tịch Câu lạc bộ "Robots in a Nutshell"',
    detail: 'Dẫn dắt đội ngũ, xây dựng chương trình học và huấn luyện thành viên'
  },
  {
    title: 'Trưởng ban tổ chức giải đấu Robotics toàn quốc',
    detail: 'Innovation Tech For Impact và Churicane thu hút hơn 200 học sinh, bảo trợ bởi BUV'
  },
  {
    title: 'Người kết nối cộng đồng học thuật',
    detail: 'Tổ chức nhóm học chung và sự kiện kết nối dành cho học sinh THPT, giúp phát triển kỹ năng giao tiếp và tinh thần đồng đội'
  },
  {
    title: 'Hỗ trợ cộng đồng giáo dục',
    detail: 'Xây dựng mạng lưới học tập nhóm, kết nối phụ huynh và học sinh trong các hoạt động tư vấn và chia sẻ kiến thức'
  }
]

export default function Awards() {
  return (
    <section id="thanh-tich" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
      <div className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Thành tích nổi bật</p>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">Giải thưởng theo trình tự thời gian</h2>
        <p className="mx-auto max-w-2xl text-slate-400 sm:text-lg">
          Tổng hợp giải thưởng và hoạt động ngoại khóa theo thứ tự 2024 → 2025, trình bày chuyên nghiệp và ấn tượng.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {awardsByYear.map(yearData => (
            <motion.div
              key={yearData.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Năm</p>
                  <h3 className="mt-3 text-4xl font-semibold text-white">{yearData.year}</h3>
                </div>
                <div className="rounded-3xl bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-300/20">
                  Giải thưởng
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {yearData.items.map(item => (
                  <motion.article
                    key={item.title}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    className="group rounded-[1.75rem] border border-slate-800/70 bg-slate-900/80 p-6 transition hover:border-cyan-400/40 hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-3 text-cyan-300">
                      <Award size={18} />
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Giải thưởng</p>
                    </div>
                    <h4 className="mt-4 text-xl font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-400">{item.meta}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-card"
        >
          <div className="flex items-center gap-3 text-emerald-300">
            <Users size={20} />
            <span className="text-sm uppercase tracking-[0.3em]">Hoạt động ngoại khóa</span>
          </div>
          <h3 className="mt-6 text-3xl font-semibold text-white">Vai trò & hoạt động</h3>
          <div className="mt-8 space-y-4">
            {leadership.map(item => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                className="rounded-[1.75rem] border border-slate-800/70 bg-slate-900/80 p-6"
              >
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.75rem] bg-gradient-to-r from-cyan-500/20 via-emerald-500/10 to-cyan-500/10 p-6 text-slate-200">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Minh chứng thực tế</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Thành tích và vai trò lãnh đạo luôn đồng hành cùng phương pháp giảng dạy hiệu quả và cam kết đồng hành cùng học sinh.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
