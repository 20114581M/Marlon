import heroImage from '../assets/avatar.png'

function Hero() {
  return (
    <section style={{
      minHeight: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#f0ece3',
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      textAlign: 'center',
      paddingTop: '60px',
      paddingLeft: '20px',
      paddingRight: '20px',
      gap: '0',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');

        .hero-avatar {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(212,255,92,0.3);
          outline: 1px solid rgba(255,255,255,0.06);
          outline-offset: 5px;
          margin-bottom: 28px;
          flex-shrink: 0;
        }

        .hero-title {
          font-size: clamp(28px, 7vw, 52px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0 0 12px;
          padding: 0 8px;
        }

        .hero-sub {
          font-size: 13px;
          font-weight: 300;
          color: #5a5652;
          max-width: 340px;
          margin: 0 auto;
          line-height: 1.7;
          padding: 0 4px;
        }

        .hero-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 20px;
        }

        .hero-pill {
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6b6660;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4px 12px;
          border-radius: 999px;
        }

        @media (max-width: 480px) {
          .hero-avatar {
            width: 110px;
            height: 110px;
            margin-bottom: 20px;
          }
          .hero-sub {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="hero-avatar">
        <img
          src={heroImage}
          alt="Marlon Ampoon"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </div>

      <div className="hero-pills">
        {['Web Developer', 'Graphic Artist', 'UI Designer'].map((role) => (
          <span key={role} className="hero-pill">{role}</span>
        ))}
      </div>

      <h1 className="hero-title">
        Crafting digital{' '}
        <span style={{ color: '#d4ff5c', fontStyle: 'italic' }}>experiences.</span>
      </h1>

      <p className="hero-sub">
        Clean, purposeful code meets striking visual design. From pixel-perfect
        UIs to bold graphic work — I build things that look great and work even better.
      </p>
    </section>
  )
}

export default Hero