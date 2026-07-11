import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-base-900 flex flex-col items-center justify-center gap-4"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-ink-500">
            <span className="text-signal">$</span> booting_portfolio<span className="animate-pulse">_</span>
          </div>
          <div className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-grad-primary"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          </div>
          <p className="font-display font-semibold text-ink-100 text-lg tracking-tight">Akash Singh</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
