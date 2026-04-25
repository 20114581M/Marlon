import heroImage from '../assets/avatar.png'

const navLinks = [
  { label: 'About Me', id: 'bodysection' },
  { label: 'Projects', id: 'projectsection' },
  { label: 'Contact Me', id: 'Contactussection' },
]

function Footer() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer style={{
      width: '100%',
      color: '#f0ece3',
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');

        .ft-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .ft-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 40px 0 36px;
          border-top: 1px solid rgba(255,255,255,0.06);
          gap: 24px;
          flex-wrap: wrap;
        }

        .ft-identity {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ft-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid rgba(212,255,92,0.25);
          flex-shrink: 0;
        }

        .ft-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .ft-name {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #f0ece3;
          margin: 0 0 3px;
        }

        .ft-roles {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .ft-role-pill {
          font-size: 7.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,236,227,0.35);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 3px 8px;
          border-radius: 999px;
        }

        .ft-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }

        .ft-nav-btn {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0c0c0c;
          background: #d4ff5c;
          border: none;
          cursor: pointer;
          padding: 9px 16px;
          border-radius: 2px;
          font-family: inherit;
          transition: opacity 0.2s;
          white-space: nowrap;
        }

        .ft-nav-btn:hover {
          opacity: 0.75;
        }

        .ft-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,0.04);
          gap: 16px;
          flex-wrap: wrap;
        }

        .ft-copy {
          font-size: 10px;
          font-weight: 300;
          color: rgba(240,236,227,0.18);
          letter-spacing: 0.04em;
          margin: 0;
        }

        .ft-copy span {
          color: #d4ff5c;
        }

        .ft-badge {
          font-size: 8.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(240,236,227,0.18);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 4px 10px;
          border-radius: 999px;
          white-space: nowrap;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .ft-wrap {
            padding: 0 32px;
          }
          .ft-top-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .ft-wrap {
            padding: 0 20px;
          }
          .ft-nav {
            width: 100%;
          }
          .ft-nav-btn {
            flex: 1 1 auto;
            text-align: center;
            font-size: 9px;
            padding: 9px 10px;
          }
          .ft-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>

      <div className="ft-wrap">

        <div className="ft-top-bar">
          <div className="ft-identity">
            <div className="ft-avatar">
              <img src={heroImage} alt="Marlon Ampoon" />
            </div>
            <div>
              <p className="ft-name">Marlon Ampoon</p>
              <div className="ft-roles">
                {['Web Developer', 'Graphic Artist', 'UI Designer'].map((r) => (
                  <span key={r} className="ft-role-pill">{r}</span>
                ))}
              </div>
            </div>
          </div>

          <nav className="ft-nav">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                className="ft-nav-btn"
                onClick={() => handleScroll(id)}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="ft-bottom-bar">
          <p className="ft-copy">
            © {new Date().getFullYear()} <span>Marlon Ampoon</span>. All rights reserved.
          </p>
          <span className="ft-badge">Designed &amp; Built by Marlon</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer