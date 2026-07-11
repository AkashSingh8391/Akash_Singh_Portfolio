import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { achievements } from '../data/profile'

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrap !pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow"><span className="w-6 h-px bg-blue-400" /> ~/achievements</p>
        <h2 className="section-title">Milestones</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass-card-hover p-5 text-center"
          >
            <CheckCircle2 className="mx-auto text-signal mb-3" size={22} />
            <p className="text-ink-100 text-sm font-medium">{a.label}</p>
            <p className="text-ink-500 text-xs mt-2 leading-relaxed">{a.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
