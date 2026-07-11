import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-blue-400 text-sm mb-3">error 404</p>
      <h1 className="font-display text-4xl font-bold text-ink-100 mb-4">Page not found</h1>
      <p className="text-ink-300 mb-8 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn-primary">Back to home</Link>
    </div>
  )
}
