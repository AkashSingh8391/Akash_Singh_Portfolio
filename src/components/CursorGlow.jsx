import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    let raf
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`
        }
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-[1] hidden md:block"
      style={{
        background:
          'radial-gradient(circle, rgba(79,125,249,0.10) 0%, rgba(157,92,255,0.06) 45%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
