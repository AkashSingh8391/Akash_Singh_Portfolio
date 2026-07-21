import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects, projectFilters } from '../data/projects'

const accentClasses = {
  blue: { badge: 'bg-blue-500/10 text-blue-400', ring: 'group-hover:border-blue-400/40' },
  violet: { badge: 'bg-violet-500/10 text-violet-400', ring: 'group-hover:border-violet-400/40' },
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
const visible = projects.filter(
  (p) =>
    filter === 'all' ||
    (Array.isArray(p.category)
      ? p.category.includes(filter)
      : p.category === filter)
)
  return (
    <section id="projects" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow"><span className="w-6 h-px bg-blue-400" /> ~/projects</p>
        <h2 className="section-title">Things I've built</h2>
      </motion.div>

      <div className="flex flex-wrap gap-2 mt-6 mb-8">
        {projectFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
              filter === f.key
                ? 'bg-grad-primary border-transparent text-white'
                : 'border-white/10 text-ink-300 hover:border-blue-400/40'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => {
            const accent = accentClasses[p.accent]
            return (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group glass-card p-0 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${accent.ring}`}
              >
                <div className="h-36 relative flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-violet-500/10 border-b border-white/[0.06]">
                  <Layers className="text-white/20" size={40} />
                  <span className={`absolute top-3 right-3 font-mono text-[10px] px-2 py-1 rounded-full ${accent.badge}`}>
                    {p.status}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-ink-100">{p.name}</h3>
                  <p className="path-label mb-3">{p.subtitle}</p>
                  <p className="text-ink-300 text-sm leading-relaxed flex-1">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-5">
                    <a href={p.github} className="btn-ghost !py-2 !px-4 !text-xs flex-1 justify-center">
                      <FaGithub size={14} /> GitHub
                    </a>
                    <a href={p.demo} className="btn-primary !py-2 !px-4 !text-xs flex-1 justify-center">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}
