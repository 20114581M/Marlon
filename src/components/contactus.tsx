import React, { useState } from 'react'

function Contactus() {
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      alert(data.message)
      setForm({ fullName: '', phoneNumber: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      alert('Error submitting message. Please try again.')
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
      padding: '80px 0px',backgroundColor: 'rgba(10, 10, 10, 0.80)',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');
        .ct-input:focus {
          border-color: rgba(212,255,92,0.4) !important;
          background: rgba(212,255,92,0.03) !important;
        }
        .ct-input::placeholder {
          color: rgba(240,236,227,0.18);
        }
        @media (max-width: 768px) {
          #Contactussection {
            padding: 60px 32px !important;
          }
          .ct-row {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          #Contactussection {
            padding: 48px 20px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }} className="ct-row">

          <div style={{ position: 'sticky', top: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ width: '28px', height: '1px', background: 'rgba(212,255,92,0.5)', display: 'inline-block' }} />
              <span style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.35)' }}>
                Get In Touch
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(40px, 4.5vw, 68px)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em', margin: '0 0 28px' }}>
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
                    <p style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(240,236,227,0.5)', margin: 0 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '4px' }}>

            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                required
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Juan dela Cruz"
                style={inputStyle}
                className="ct-input"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  required
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="+63 912 345 6789"
                  style={inputStyle}
                  className="ct-input"
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="juan@email.com"
                  style={inputStyle}
                  className="ct-input"
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                className="ct-input"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '4px',
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
                alignSelf: 'flex-start',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = '0.75' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              {loading ? 'Sending...' : 'Send Message ↗'}
            </button>

          </form>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginTop: '60px' }} />
      </div>
    </div>
  )
}

export default Contactus