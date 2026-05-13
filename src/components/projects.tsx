import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Lab 3',
    description: 'From this activity, I learned that props are used to pass data from a parent component to a child component in React, making components reusable and dynamic. I also learned that the useState hook allows a component to manage its own data internally, and that whenever the state changes, React automatically re-renders the component to reflect the update. Together, props and state form the foundation of how data flows and changes within a React application.',
    url: 'https://20114581m.github.io/lab3/',
  },
  {
    id: 2,
    title: 'Router & Form Handling',
    description: 'From this activity, I learned that React Router enables navigation between different pages or views in a React application without reloading the entire page. I also learned that the useNavigate hook allows programmatic navigation, meaning I can redirect users to a different route based on an action or condition, such as after submitting a form. The Link component, on the other hand, works like an anchor tag but prevents full page reloads, keeping the navigation smooth and fast. Together, these tools make it possible to build multi-page experiences within a single-page application.',
    url: 'https://20114581m.github.io/RouterAndFormHandlingCombination',
  },
  {
    id: 3,
    title: 'Feedback App',
    description: 'From this activity, I learned that useState is essential in handling controlled forms in React, where every input field value is bound to a state variable and updated through an onChange event handler. This means the component always has full control over the form data, making it easier to validate, manipulate, or submit. I also encountered other important concepts within the code, such as onSubmit for handling form submission, e.preventDefault() to stop the default browser reload behavior, and two-way binding where the input value reflects the current state at all times. Additionally, I learned how to manage multiple fields using a single state object, updating only the relevant property using the spread operator. Overall, controlled forms with useState give developers precise control over user input throughout the entire lifecycle of the form.',
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
      boxSizing: 'border-box',
    }}>
      <style>{`
        @media (max-width: 900px) {
          #projectsection {
            padding: 60px 32px !important;
          }
        }
        @media (max-width: 480px) {
          #projectsection {
            padding: 48px 20px !important;
          }
          .proj-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ width: '28px', height: '1px', background: 'rgba(212,255,92,0.5)', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.35)' }}>
              My Work
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95, margin: 0 }}>
            Projects<br />
            <span style={{ color: '#d4ff5c', fontStyle: 'italic' }}>Built.</span>
          </h2>
        </div>

        <div
          className="proj-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
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

              <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
                    flexShrink: 0,
                    marginLeft: '8px',
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