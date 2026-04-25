const links = [
  { label: 'About Me', id: 'bodysection' },
  { label: 'Projects', id: 'projectsection' },
  { label: 'Contact Me', id: 'Contactussection' },
]

function Nav() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      width: '100%',
      maxWidth: '480px',
      margin: '0 auto',
    }}>
      {links.map(({ label, id }) => (
        <button
          key={id}
          onClick={() => handleScroll(id)}
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#0c0c0c',
            backgroundColor: '#d4ff5c',
            padding: '10px 20px',
            borderRadius: '2px',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}

export default Nav