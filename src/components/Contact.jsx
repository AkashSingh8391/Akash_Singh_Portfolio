import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { CheckCircle2, Loader2, Mail, MapPin, Send, XCircle } from 'lucide-react'
import { profile } from '../data/profile'

const initialForm = { name: '', email: '', subject: '', message: '' }

// Replace these with your own EmailJS service/template/public key.
// Sign up free at https://www.emailjs.com
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!form.message.trim()) errors.message = 'Message is required'
  else if (form.message.trim().length < 10) errors.message = 'Message should be at least 10 characters'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length > 0) return

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow"><span className="w-6 h-px bg-blue-400" /> ~/contact</p>
        <h2 className="section-title">Let's build something</h2>
        <p className="text-ink-300 max-w-xl">
          Have a role, project, or idea in mind? My inbox is open — I usually reply within a day.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 space-y-5 h-fit"
        >
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Mail size={16} />
            </div>
            <div>
              <p className="path-label">Email</p>
              <p className="text-ink-100 text-sm mt-0.5">{profile.email}</p>
            </div>
          </div>
          <div className="flex gap-4 pt-5 border-t border-white/[0.06]">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 flex-shrink-0">
              <MapPin size={16} />
            </div>
            <div>
              <p className="path-label">Location</p>
              <p className="text-ink-100 text-sm mt-0.5">{profile.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          noValidate
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" value={form.name} onChange={onChange} error={errors.name} />
            <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} />
          </div>
          <Field label="Subject" name="subject" value={form.subject} onChange={onChange} error={errors.subject} />
          <Field
            label="Message"
            name="message"
            as="textarea"
            rows={5}
            value={form.message}
            onChange={onChange}
            error={errors.message}
          />

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto justify-center">
            {status === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="flex items-center gap-2 text-signal text-sm"><CheckCircle2 size={16} /> Message sent — I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 text-red-400 text-sm">
              <XCircle size={16} /> Something went wrong. Configure your EmailJS keys in Contact.jsx.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, error, as = 'input', type = 'text', rows }) {
  const Comp = as
  return (
    <label className="block">
      <span className="path-label">{label}</span>
      <Comp
        name={name}
        type={as === 'input' ? type : undefined}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        className={`mt-1.5 w-full bg-white/[0.03] border rounded-lg px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-700 focus:outline-none focus:border-blue-400/50 transition-colors ${
          error ? 'border-red-400/50' : 'border-white/[0.08]'
        }`}
      />
      {error && <span className="text-red-400 text-xs mt-1 block">{error}</span>}
    </label>
  )
}
