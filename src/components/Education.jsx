import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow"><span className="w-6 h-px bg-blue-400" /> ~/education</p>
        <h2 className="section-title">Education</h2>
      </motion.div>

      <div className="relative mt-10 ml-3">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/60 to-violet-400/10" />
        <div className="space-y-10">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8"
            >
              <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-base-900 border-2 border-blue-400 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </span>
              <div className="glass-card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-semibold text-ink-100 flex items-center gap-2">
                    <GraduationCap size={16} className="text-violet-400" /> {ed.degree}
                  </h3>
                  <span className="path-label">{ed.period}</span>
                </div>
                <p className="text-sm text-blue-400 mt-1">{ed.school}</p>
                <p className="text-ink-300 text-sm mt-2 leading-relaxed">{ed.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
