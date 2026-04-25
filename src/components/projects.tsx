import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Lab 3',
    description: 'A web development lab exercise showcasing core frontend fundamentals.',
    url: 'https://20114581m.github.io/lab3/',
  },
  {
    id: 2,
    title: 'Router & Form Handling',
    description: 'A combination of client-side routing and form handling with a book request flow.',
    url: 'https://20114581m.github.io/RouterAndFormHandlingCombination',
  },
  {
    id: 3,
    title: 'Feedback App',
    description: 'A simple feedback collection app built with React.',
    url: 'https://20114581m.github.io/feedbackApp/',
  },
]

function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div id="projectsection" style={{
      width: '100%',
      color: '#f0ece3',
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      padding: '80px 60px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ width: '28px', height: '1px', background: 'rgba(212,255,92,0.5)', display: 'inline-block' }} />
            <span style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.35)' }}>
              My Work
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95, margin: 0 }}>
            Projects<br />
            <span style={{ color: '#d4ff5c', fontStyle: 'italic' }}>Built.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {projects.map(({ id, title, description, url }) => (
            <div
              key={id}
              onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                border: hovered === id ? '1px solid rgba(212,255,92,0.35)' : '1px solid rgba(255,255,255,0.07)',
                borderRadius: '6px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                <iframe
                  src={url}
                  title={title}
                  style={{
                    width: '150%',
                    height: '150%',
                    border: 'none',
                    transform: 'scale(0.667)',
                    transformOrigin: 'top left',
                    pointerEvents: 'none',
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: hovered === id ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0)',
                  transition: 'background 0.2s',
                }} />
                {hovered === id && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#d4ff5c',
                    color: '#0c0c0c',
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    padding: '8px 16px',
                    borderRadius: '2px',
                    whiteSpace: 'nowrap',
                  }}>
                    Open Project ↗
                  </div>
                )}
              </div>

              <div style={{
                padding: '20px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.02em', margin: 0, color: '#f0ece3' }}>
                    {title}
                  </p>
                  <span style={{
                    fontSize: '8px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(212,255,92,0.6)',
                    border: '1px solid rgba(212,255,92,0.15)',
                    padding: '3px 8px',
                    borderRadius: '999px',
                  }}>
                    Live
                  </span>
                </div>
                <p style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(240,236,227,0.4)', lineHeight: 1.7, margin: 0 }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginTop: '60px' }} />
      </div>
    </div>
  )
}

export default Projects