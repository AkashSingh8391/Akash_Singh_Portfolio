import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow"><span className="w-6 h-px bg-blue-400" /> ~/skills</p>
        <h2 className="section-title">Tech stack</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="glass-card p-6"
          >
            <div className="flex items-baseline justify-between mb-5">
              <h3 className="font-display font-semibold text-lg text-ink-100">{group.label}</h3>
              <span className="path-label">{group.path}</span>
            </div>
            <div className="space-y-4">
              {group.skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-ink-300">{s.name}</span>
                    <span className="font-mono text-ink-500">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
                      className="h-full rounded-full bg-grad-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
