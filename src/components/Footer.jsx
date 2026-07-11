import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-ink-300">
          akash<span className="text-blue-400">.dev</span>
          <span className="text-ink-700 ml-3">// built with react + tailwind</span>
        </div>

        <div className="flex items-center gap-3">
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
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-ink-300 hover:text-blue-400 transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="text-ink-700 text-xs font-mono">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
