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
    <>
      <style>{`
        .nav-wrap {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 20px 20px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .nav-btn {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0c0c0c;
          background-color: #d4ff5c;
          padding: 10px 16px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          font-family: "'Inter', 'Helvetica Neue', sans-serif";
          transition: opacity 0.2s;
          white-space: nowrap;
        }

        .nav-btn:hover {
          opacity: 0.75;
        }

        @media (max-width: 400px) {
          .nav-wrap {
            gap: 6px;
          }
          .nav-btn {
            font-size: 9px;
            padding: 9px 12px;
            flex: 1 1 auto;
            text-align: center;
          }
        }
      `}</style>

    </>
  )
}

export default Nav