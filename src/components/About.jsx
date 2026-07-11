import { motion } from 'framer-motion'
import { Code2, GraduationCap, Sparkles, Target } from 'lucide-react'
import { profile } from '../data/profile'

const facts = [
  { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE, Amity University Gwalior (2022–2026)' },
  { icon: Target, label: 'Focus', value: 'Java Full Stack & React Frontend roles' },
  { icon: Code2, label: 'Currently building', value: 'Enterprise SaaS dashboards & full-stack systems' },
  { icon: Sparkles, label: 'Interests', value: 'DSA practice, system design, developer tooling' },
]

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow"><span className="w-6 h-px bg-blue-400" /> ~/about</p>
        <h2 className="section-title">Who I am</h2>
      </motion.div>

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-ink-300 leading-relaxed text-[15px] sm:text-base">{profile.about}</p>
          <p className="text-ink-300 leading-relaxed text-[15px] sm:text-base">
            My career objective is simple: join a team where I can ship real features on day one,
            learn from engineers ahead of me, and keep compounding my skills in both frontend and
            backend systems. I'm equally comfortable styling a responsive UI or designing the API
            that powers it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6 space-y-5"
        >
          {facts.map(({ icon: Icon, label, value }, i) => (
            <div key={label} className={`flex gap-4 ${i !== 0 ? 'pt-5 border-t border-white/[0.06]' : ''}`}>
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                <Icon size={16} />
              </div>
              <div>
                <p className="path-label">{label}</p>
                <p className="text-ink-100 text-sm mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
