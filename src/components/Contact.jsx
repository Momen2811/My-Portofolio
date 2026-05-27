import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

const contactLinks = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 6l8 6 8-6" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    label: 'Email',
    value: 'Momenmoussa7@gmail.com',
    href:  'mailto:Momenmoussa7@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/momen-moussa',
    href:  'https://www.linkedin.com/in/momen-moussa',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Momen2811',
    href:  'https://github.com/Momen2811',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM4.5 17.5a5.5 5.5 0 0 1 11 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Location',
    value: 'Giza, Egypt',
    href:  null,
  },
]

export default function Contact() {
  const header = useScrollAnimation()
  const info   = useScrollAnimation()
  const form   = useScrollAnimation()

  const [fields, setFields]   = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]   = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!fields.name || !fields.email || !fields.message) return
    setStatus('sending')

    const subject = encodeURIComponent(fields.subject || `Portfolio message from ${fields.name}`)
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
    )
    // Opens the visitor's default email client with the message pre-filled
    window.location.href = `mailto:Momenmoussa7@gmail.com?subject=${subject}&body=${body}`

    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <section id="contact">
      <div className="container">
        <div ref={header.ref} className={`reveal${header.isVisible ? ' visible' : ''}`}>
          <p className="section-tag">05 — contact</p>
          <h2 className="section-title">Let's <em>Work Together</em></h2>
        </div>

        <div className="contact-grid">
          {/* ── Info ── */}
          <div ref={info.ref} className={`contact-info reveal${info.isVisible ? ' visible' : ''}`}>
            <p className="contact-intro">
              I'm currently open to new opportunities. Whether you have a project,
              a question, or just want to say hi — my inbox is always open.
            </p>

            <div className="contact-links">
              {contactLinks.map((cl, i) => (
                cl.href ? (
                  <a key={i} href={cl.href} target={cl.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-link-card">
                    <span className="clc-icon">{cl.icon}</span>
                    <div>
                      <span className="clc-label">{cl.label}</span>
                      <span className="clc-value">{cl.value}</span>
                    </div>
                    <svg className="clc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ) : (
                  <div key={i} className="contact-link-card contact-link-card--static">
                    <span className="clc-icon">{cl.icon}</span>
                    <div>
                      <span className="clc-label">{cl.label}</span>
                      <span className="clc-value">{cl.value}</span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* ── Form ── */}
          <div ref={form.ref} className={`contact-form-wrap reveal delay-2${form.isVisible ? ' visible' : ''}`}>
            {status === 'sent' ? (
              <div className="form-success">
                <div className="fs-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you shortly.</p>
                <button className="btn btn--outline" onClick={() => { setStatus(null); setFields({ name:'', email:'', subject:'', message:'' }) }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      id="cf-name" name="name" type="text"
                      className="form-input" placeholder=" "
                      value={fields.name} onChange={handleChange}
                      required autoComplete="name"
                    />
                    <label htmlFor="cf-name" className="form-label">Your Name</label>
                  </div>
                  <div className="form-group">
                    <input
                      id="cf-email" name="email" type="email"
                      className="form-input" placeholder=" "
                      value={fields.email} onChange={handleChange}
                      required autoComplete="email"
                    />
                    <label htmlFor="cf-email" className="form-label">Email Address</label>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    id="cf-subject" name="subject" type="text"
                    className="form-input" placeholder=" "
                    value={fields.subject} onChange={handleChange}
                    required
                  />
                  <label htmlFor="cf-subject" className="form-label">Subject</label>
                </div>

                <div className="form-group">
                  <textarea
                    id="cf-message" name="message"
                    className="form-input form-textarea" placeholder=" "
                    value={fields.message} onChange={handleChange}
                    required rows={5}
                  />
                  <label htmlFor="cf-message" className="form-label">Your Message</label>
                </div>

                <button type="submit" className="btn btn--primary form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <span className="form-spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                        <path d="M1 7.5h13M9 2l6 5.5L9 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
