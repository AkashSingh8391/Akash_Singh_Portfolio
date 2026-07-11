import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map((l) => l.id))

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto max-w-6xl mt-3 px-4">
        <div className="glass-card flex items-center justify-between px-5 py-3">
          <button
            onClick={() => scrollTo('hero')}
            className="font-mono text-sm text-ink-100 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse-slow" />
            akash<span className="text-blue-400">.dev</span>
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className={`font-mono text-xs px-3 py-2 rounded-lg transition-colors ${
                    active === l.id
                      ? 'text-blue-400 bg-white/[0.06]'
                      : 'text-ink-300 hover:text-ink-100'
                  }`}
                >
                  ~/{l.label}
                </button>
              </li>
            ))}
          </ul>

          <button onClick={() => scrollTo('contact')} className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-xs">
            Hire Me
          </button>

          <button
            className="md:hidden text-ink-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-2"
            >
              <div className="glass-card p-3 flex flex-col gap-1">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    className={`font-mono text-sm px-4 py-3 rounded-lg text-left transition-colors ${
                      active === l.id ? 'text-blue-400 bg-white/[0.06]' : 'text-ink-300'
                    }`}
                  >
                    ~/{l.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
