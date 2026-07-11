import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow"><span className="w-6 h-px bg-blue-400" /> ~/experience</p>
        <h2 className="section-title">Experience</h2>
      </motion.div>

      <div className="mt-8 space-y-6">
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 flex gap-5"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
              <Briefcase size={18} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold text-ink-100">{e.role}</h3>
                <span className="path-label">{e.period}</span>
              </div>
              <p className="text-sm text-blue-400 mt-1">{e.org}</p>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((pt) => (
                  <li key={pt} className="text-ink-300 text-sm leading-relaxed flex gap-2">
                    <span className="text-blue-400 mt-1.5">›</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
