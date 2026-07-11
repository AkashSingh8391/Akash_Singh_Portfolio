import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ParticleBackground from './ParticleBackground'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { profile } from '../data/profile'

const roles = ['Frontend Developer', 'React Developer', 'Java & Spring Boot Developer']

export default function Hero() {
  const typed = useTypingEffect(roles)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-grad-radial-glow"
    >
      <div className="absolute inset-0 bg-grid-lines [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <ParticleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-16 w-full grid md:grid-cols-[1.3fr_0.9fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse-slow" />
            <span className="font-mono text-xs text-ink-300">status: open to opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.08] tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Akash Singh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-9 font-mono text-lg sm:text-xl text-blue-400"
          >
            <span className="text-ink-500">&gt;</span> {typed}
            <span className="inline-block w-[2px] h-5 bg-blue-400 ml-1 animate-pulse align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-ink-300 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {profile.tagline} Final-year CS Engineering student turning ideas into scalable,
            production-ready web applications — from database schema to deployed UI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href={profile.resumeUrl} download className="btn-primary">
              <Download size={16} /> Download Resume
            </a>
            <button onClick={() => scrollTo('projects')} className="btn-ghost">
              View Projects
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-ghost">
              <Send size={15} /> Contact
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex items-center gap-4"
          >
            {[
              { icon: FaGithub, href: profile.github, label: 'GitHub' },
              { icon: FaLinkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-ink-300 hover:text-blue-400 hover:border-blue-400/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Signature: live "system status" console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card p-5 font-mono text-xs animate-float hidden md:block"
        >
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-signal/70" />
            <span className="ml-2 text-ink-500">system.status</span>
          </div>
          <div className="space-y-2.5 text-ink-300">
            <p><span className="text-signal">●</span> server &nbsp;&nbsp;<span className="text-ink-100">online</span></p>
            <p><span className="text-blue-400">●</span> frontend &nbsp;<span className="text-ink-100">react + vite</span></p>
            <p><span className="text-violet-400">●</span> backend &nbsp;&nbsp;<span className="text-ink-100">spring boot</span></p>
            <p><span className="text-signal">●</span> database &nbsp;<span className="text-ink-100">mysql</span></p>
            <div className="h-px bg-white/10 my-3" />
            <p className="text-ink-500">uptime: 4 yrs of building</p>
            <p className="text-ink-500">location: {profile.location}</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500 hover:text-blue-400"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
