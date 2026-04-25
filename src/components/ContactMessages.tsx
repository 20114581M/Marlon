import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface ContactEntry {
  _id: string
  fullName: string
  phoneNumber: string
  email: string
  message: string
  createdAt: string
}

function ContactMessages() {
  const [messages, setMessages] = useState<ContactEntry[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem('user') !== 'MarlonA') {
      navigate('/login')
      return
    }
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const res = await fetch('http://localhost:5000/contact')
      const data = await res.json()
      setMessages(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this message?')) return
    try {
      await fetch(`http://localhost:5000/contact/${id}`, { method: 'DELETE' })
      setMessages(prev => prev.filter(m => m._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      color: '#f0ece3',
      padding: '48px 40px',backgroundColor: '#0a0a0f',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');
        .cm-table { width: 100%; border-collapse: collapse; }
        .cm-table th {
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(240,236,227,0.3);
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .cm-table td {
          font-size: 12px;
          font-weight: 300;
          color: rgba(240,236,227,0.6);
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          vertical-align: top;
          max-width: 200px;
          word-break: break-word;
        }
        .cm-table tr:hover td { background: rgba(255,255,255,0.02); }
        .del-btn {
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ff6b6b;
          background: rgba(255,107,107,0.08);
          border: 1px solid rgba(255,107,107,0.2);
          border-radius: 2px;
          padding: 5px 10px;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .del-btn:hover { background: rgba(255,107,107,0.18); }
        @media (max-width: 768px) {
          .cm-table thead { display: none; }
          .cm-table td {
            display: block;
            padding: 6px 12px;
            max-width: 100%;
          }
          .cm-table tr {
            display: block;
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 6px;
            margin-bottom: 12px;
            padding: 8px 0;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span style={{ width: '20px', height: '1px', background: 'rgba(212,255,92,0.5)', display: 'inline-block' }} />
              <span style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.35)' }}>Admin</span>
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.04em', margin: 0 }}>
              Contact <span style={{ color: '#d4ff5c', fontStyle: 'italic' }}>Messages</span>
            </h1>
          </div>
          <button
            onClick={handleLogout}
            style={{
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#0c0c0c',
              background: '#d4ff5c',
              border: 'none',
              borderRadius: '2px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Log Out
          </button>
        </div>

        {loading ? (
          <p style={{ fontSize: '13px', color: 'rgba(240,236,227,0.3)' }}>Loading...</p>
        ) : messages.length === 0 ? (
          <p style={{ fontSize: '13px', color: 'rgba(240,236,227,0.3)' }}>No messages yet.</p>
        ) : (
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '6px', overflow: 'hidden' }}>
            <table className="cm-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {messages.map((m, i) => (
                  <tr key={m._id}>
                    <td style={{ color: 'rgba(240,236,227,0.2)', fontSize: '11px' }}>{i + 1}</td>
                    <td style={{ color: '#f0ece3', fontWeight: 400 }}>{m.fullName}</td>
                    <td>{m.phoneNumber}</td>
                    <td>{m.email}</td>
                    <td>{m.message}</td>
                    <td style={{ whiteSpace: 'nowrap', fontSize: '11px' }}>
                      {m.createdAt ? new Date(m.createdAt).toLocaleDateString() : '—'}
                    </td>
                    <td>
                      <button className="del-btn" onClick={() => handleDelete(m._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  )
}

export default ContactMessages