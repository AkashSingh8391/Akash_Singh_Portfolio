import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const username = 'AkashSingh8391' // placeholder — replace with Akash's real GitHub username

export default function GithubStats() {
  return (
    <section id="github" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow"><span className="w-6 h-px bg-blue-400" /> ~/github</p>
        <h2 className="section-title">GitHub activity</h2>
        <p className="text-ink-500 text-sm font-mono">
          My <span className="text-blue-400">"{username}"</span> GitHub profile stats, including contributions, top languages, and streaks. Data is fetched from free, open-source stat widgets.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4 overflow-hidden"
        >
          <img
            loading="lazy"
            className="w-full h-auto rounded-lg"
            src={`https://streak-stats.demolab.com?user=${username}&theme=transparent&hide_border=true&ring=4F7DF9&fire=9D5CFF&currStreakLabel=E8ECF7`}
            alt="GitHub streak stats"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-4 overflow-hidden"
        >
          <img
            loading="lazy"
            className="w-full h-auto rounded-lg"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=6E93FF&text_color=B7BFD6`}
            alt="Top languages"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-4 overflow-hidden md:col-span-2"
        >
          <img
            loading="lazy"
            className="w-full h-auto rounded-lg"
            src={`https://streak-stats.demolab.com?user=${username}&theme=transparent&hide_border=true&ring=4F7DF9&fire=9D5CFF&currStreakLabel=E8ECF7`}
            alt="GitHub streak stats"
          />
        </motion.div>
      </div>
      <p className="text-ink-500 text-xs mt-4 font-mono">
        Powered by free, open-source stat widgets · github: {profile.github}
      </p>
    </section>
  )
}
