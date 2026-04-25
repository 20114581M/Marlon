import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function LogIN() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem('user') === 'MarlonA') {
      navigate('/contact-messages')
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.username === 'MarlonA' && form.password === 'ubaguio2026') {
      sessionStorage.setItem('user', form.username)
      navigate('/contact-messages')
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      color: '#f0ece3',
      padding: '24px',backgroundColor: '#0a0a0f',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');
        .login-input {
          width: 100%;
          padding: 12px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          color: #f0ece3;
          font-size: 13px;
          font-weight: 300;
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .login-input:focus {
          border-color: rgba(212,255,92,0.4);
          background: rgba(212,255,92,0.03);
        }
        .login-input::placeholder {
          color: rgba(240,236,227,0.18);
        }
        .login-btn {
          width: 100%;
          padding: 13px;
          background: #d4ff5c;
          color: #0c0c0c;
          border: none;
          border-radius: 2px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: inherit;
          transition: opacity 0.2s;
        }
        .login-btn:hover { opacity: 0.75; }
        .cancel-btn {
          width: 100%;
          padding: 13px;
          background: transparent;
          color: rgba(240,236,227,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: inherit;
          transition: border-color 0.2s, color 0.2s;
        }
        .cancel-btn:hover {
          border-color: rgba(255,255,255,0.25);
          color: rgba(240,236,227,0.7);
        }
      `}</style>

      <div style={{
        width: '100%',
        maxWidth: '380px',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '8px',
        padding: '40px 36px',
        background: 'rgba(255,255,255,0.02)',
      }}>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ width: '20px', height: '1px', background: 'rgba(212,255,92,0.5)', display: 'inline-block' }} />
            <span style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.35)' }}>
              Admin
            </span>
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, margin: 0 }}>
            Welcome<br />
            <span style={{ color: '#d4ff5c', fontStyle: 'italic' }}>Back.</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <div>
            <label style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.35)', display: 'block', marginBottom: '8px' }}>
              Username
            </label>
            <input
              required
              type="text"
              placeholder="Enter username"
              value={form.username}
              onChange={e => setForm(p => ({ ...p, username: e.target.value }))}
              className="login-input"
            />
          </div>

          <div>
            <label style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.35)', display: 'block', marginBottom: '8px' }}>
              Password
            </label>
            <input
              required
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
              className="login-input"
            />
          </div>

          {error && (
            <p style={{ fontSize: '11px', color: '#ff6b6b', margin: 0, letterSpacing: '0.02em' }}>
              {error}
            </p>
          )}

          <button type="submit" className="login-btn" style={{ marginTop: '4px' }}>
            Log In ↗
          </button>

          <button type="button" className="cancel-btn" onClick={() => navigate('/')}>
            Cancel
          </button>

        </form>
      </div>
    </div>
  )
}

export default LogIN