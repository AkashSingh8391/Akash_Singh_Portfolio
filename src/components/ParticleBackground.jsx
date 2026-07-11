import { useEffect, useRef } from 'react'

// Lightweight canvas particle field — small dots drifting slowly, connected
// by faint lines when close, evoking a network/systems-monitoring feel.
export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, particles, animationId
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio
      height = canvas.height = canvas.offsetHeight * devicePixelRatio
    }

    const init = () => {
      resize()
      const count = Math.min(70, Math.floor((width * height) / 45000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130 * devicePixelRatio) {
            ctx.strokeStyle = `rgba(110,147,255,${0.12 * (1 - d / (130 * devicePixelRatio))})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(157,92,255,0.5)'
        ctx.fill()
      })

      if (!prefersReduced) animationId = requestAnimationFrame(step)
    }

    init()
    step()
    window.addEventListener('resize', init)
    return () => {
      window.removeEventListener('resize', init)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" aria-hidden="true" />
}
