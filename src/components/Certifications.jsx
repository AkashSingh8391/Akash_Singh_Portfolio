import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/profile'

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrap !pt-0">
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass-card-hover p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 flex-shrink-0">
              <Award size={17} />
            </div>
            <div>
              <p className="text-ink-100 font-medium text-sm">{c.title}</p>
              <p className="path-label mt-0.5">{c.issuer} · {c.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
