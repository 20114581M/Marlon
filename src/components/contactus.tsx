import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contactus() {
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMsg, setStatusMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!form.fullName || !form.phoneNumber || !form.email || !form.message) {
      return 'Please fill in all fields.'
    }
    const emailPattern = /\S+@\S+\.\S+/
    if (!emailPattern.test(form.email)) {
      return 'Invalid email format.'
    }
    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validate()
    if (validationError) {
      setStatus('error')
      setStatusMsg(validationError)
      return
    }

    setLoading(true)
    setStatus('idle')
    setStatusMsg('')

    try {
      await Promise.all([
        // 1. Save to MongoDB
        fetch('https://your-backend.onrender.com/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }).then((res) => {
          if (!res.ok) throw new Error('Failed to save to database.')
          return res.json()
        }),

        // 2. Send email via EmailJS
        emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          {
            from_name: form.fullName,
            from_email: form.email,
            phone: form.phoneNumber,
            message: form.message,
          },
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        ),
      ])

      setStatus('success')
      setStatusMsg("Message sent! I'll get back to you soon.")
      setForm({ fullName: '', phoneNumber: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
      setStatusMsg('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '4px',
    color: '#f0ece3',
    fontSize: '13px',
    fontWeight: 300,
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '9px',
    fontWeight: 600,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'rgba(240,236,227,0.35)',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <div id="Contactussection" style={{
      width: '100%',
      color: '#f0ece3',
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      padding: '80px 60px',
      backgroundColor: 'rgba(10, 10, 10, 0.80)',
      boxSizing: 'border-box',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');
        .ct-input:focus { border-color: rgba(212,255,92,0.4) !important; background: rgba(212,255,92,0.03) !important; }
        .ct-input::placeholder { color: rgba(240,236,227,0.18); }
        .ct-outer { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .ct-left { position: sticky; top: 80px; }
        .ct-phone-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 900px) {
          #Contactussection { padding: 60px 32px !important; }
          .ct-outer { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ct-left { position: relative !important; top: auto !important; }
        }
        @media (max-width: 480px) {
          #Contactussection { padding: 48px 20px !important; }
          .ct-phone-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="ct-outer">

          {/* Left: info — unchanged */}
          <div className="ct-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ width: '28px', height: '1px', background: 'rgba(212,255,92,0.5)', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.35)' }}>
                Get In Touch
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 68px)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em', margin: '0 0 28px' }}>
              Contact<br />
              <span style={{ color: '#d4ff5c', fontStyle: 'italic' }}>Me.</span>
            </h2>
            <p style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(240,236,227,0.38)', lineHeight: 1.85, margin: '0 0 32px', maxWidth: '300px' }}>
              Have a project in mind or just want to say hello? Fill out the form and I'll get back to you as soon as possible.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: '📧', label: 'Email', value: 'servicesjmseptember@gmail.com' },
                { icon: '📍', label: 'Location', value: 'Baguio City, Philippines' },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '13px' }}>{icon}</span>
                  <div>
                    <p style={{ fontSize: '8.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.25)', margin: '0 0 2px' }}>{label}</p>
                    <p style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(240,236,227,0.5)', margin: 0, wordBreak: 'break-all' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '4px' }}>

            <div>
              <label style={labelStyle}>Full Name</label>
              <input required type="text" name="fullName" value={form.fullName} onChange={handleChange}
                placeholder="Juan dela Cruz" style={inputStyle} className="ct-input" />
            </div>

            <div className="ct-phone-row">
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input required type="tel" name="phoneNumber" value={form.phoneNumber} onChange={handleChange}
                  placeholder="+63 912 345 6789" style={inputStyle} className="ct-input" />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="juan@email.com" style={inputStyle} className="ct-input" />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea required name="message" value={form.message} onChange={handleChange}
                placeholder="Tell me about your project or inquiry..." rows={5}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }} className="ct-input" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '13px 28px',
                  background: loading ? 'rgba(212,255,92,0.5)' : '#d4ff5c',
                  color: '#0c0c0c',
                  border: 'none',
                  borderRadius: '2px',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = '0.75' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                {loading ? 'Sending...' : 'Send Message ↗'}
              </button>

              {/* Inline status message — replaces alert() */}
              {status !== 'idle' && (
                <p style={{
                  margin: 0,
                  fontSize: '12px',
                  fontWeight: 300,
                  color: status === 'success' ? '#d4ff5c' : '#ff6b6b',
                }}>
                  {statusMsg}
                </p>
              )}
            </div>

          </form>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginTop: '60px' }} />
      </div>
    </div>
  )
}

export default Contactus