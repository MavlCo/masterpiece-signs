'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle, Upload } from 'lucide-react'
import type { ContactFormData } from '@/types'

const PROJECT_TYPES = [
  'Monument Sign',
  'Storefront / Channel Letters',
  'Vehicle Graphics / Wrap',
  'Banner / Yard Sign',
  'Hand-Painted Sign',
  'Golf Course Signage',
  'Custom / Other',
]

const INITIAL: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [fileName, setFileName] = useState<string>('')

  function validate(): boolean {
    const next: Partial<ContactFormData> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'A valid email is required.'
    if (!form.projectType) next.projectType = 'Please select a project type.'
    if (!form.message.trim() || form.message.length < 20)
      next.message = 'Please describe your project (at least 20 characters).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    // Simulate network request — replace with real API call
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-6 py-20 bg-ink-black border border-charcoal p-10">
        <CheckCircle size={48} className="text-gold-core" />
        <div>
          <h3 className="font-cinzel font-bold text-cream uppercase tracking-[0.06em] text-xl mb-3">
            Message Received
          </h3>
          <p className="text-cream/55 font-inter text-base leading-relaxed max-w-md">
            Thank you for reaching out. We will review your project details and get back
            to you within one business day.
          </p>
        </div>
        <button
          onClick={() => { setForm(INITIAL); setStatus('idle') }}
          className="font-inter text-[11px] tracking-[0.18em] uppercase text-gold-core hover:text-cream transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  const inputBase =
    'w-full bg-ink-black border border-charcoal text-cream font-inter text-sm px-4 py-3.5 placeholder:text-cream/25 focus:border-gold-core/60 focus:outline-none transition-colors duration-200'
  const labelBase = 'block font-inter text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-2'
  const errorBase = 'font-inter text-[11px] text-red-400/80 mt-1.5 flex items-center gap-1'

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-ink-black border border-charcoal p-8 lg:p-10"
    >
      <h2 className="font-cinzel font-bold text-cream uppercase tracking-[0.06em] text-xl mb-2">
        Tell Us About Your Project
      </h2>
      <p className="text-cream/40 font-inter text-sm mb-8">
        Fill out the form below and we will get back to you within one business day.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelBase}>
            Full Name <span className="text-gold-core">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
            className={`${inputBase} ${errors.name ? 'border-red-400/50' : ''}`}
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" className={errorBase}>
              <AlertCircle size={11} /> {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelBase}>
            Email Address <span className="text-gold-core">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
            className={`${inputBase} ${errors.email ? 'border-red-400/50' : ''}`}
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className={errorBase}>
              <AlertCircle size={11} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(419) 000-0000"
            autoComplete="tel"
            className={inputBase}
          />
        </div>

        {/* Project type */}
        <div>
          <label htmlFor="projectType" className={labelBase}>
            Project Type <span className="text-gold-core">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={`${inputBase} appearance-none cursor-pointer ${errors.projectType ? 'border-red-400/50' : ''}`}
            aria-describedby={errors.projectType ? 'type-error' : undefined}
            aria-invalid={!!errors.projectType}
          >
            <option value="" disabled>Select a type…</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.projectType && (
            <p id="type-error" className={errorBase}>
              <AlertCircle size={11} /> {errors.projectType}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mb-5">
        <label htmlFor="message" className={labelBase}>
          Project Description <span className="text-gold-core">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Describe your project — size, location, materials, timeline, any reference ideas…"
          className={`${inputBase} resize-none ${errors.message ? 'border-red-400/50' : ''}`}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className={errorBase}>
            <AlertCircle size={11} /> {errors.message}
          </p>
        )}
      </div>

      {/* File upload */}
      <div className="mb-8">
        <label htmlFor="file" className={labelBase}>
          Reference Art / Files{' '}
          <span className="text-cream/20 normal-case tracking-normal">(optional)</span>
        </label>
        <label
          htmlFor="file"
          className="flex items-center gap-3 border border-dashed border-charcoal hover:border-gold-core/40 bg-rich-black/50 px-4 py-4 cursor-pointer transition-colors group"
        >
          <Upload size={16} className="text-cream/30 group-hover:text-gold-core/60 transition-colors shrink-0" />
          <span className="font-inter text-sm text-cream/30 group-hover:text-cream/50 transition-colors truncate">
            {fileName || 'Click to upload — PNG, JPG, PDF, AI, EPS'}
          </span>
        </label>
        <input
          id="file"
          type="file"
          accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
        />
      </div>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-red-400/80 text-sm font-inter mb-5">
          <AlertCircle size={14} />
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full gold-gradient-bg text-ink-black font-cinzel text-xs tracking-[0.18em] uppercase px-8 py-4 font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed gold-glow-hover"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-4 h-4 border-2 border-ink-black/40 border-t-ink-black rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message <Send size={14} />
          </>
        )}
      </button>

      <p className="text-cream/20 text-[11px] font-inter text-center mt-4">
        We respond within one business day.
      </p>
    </form>
  )
}
