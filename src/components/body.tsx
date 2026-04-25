function Body() {
  return (
    <div id="bodysection" style={{
      width: '100%',
      color: '#f0ece3',
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      padding: '80px 60px',
      backgroundColor: 'rgba(10, 10, 10, 0.80)',
      marginTop: '70px',
      boxSizing: 'border-box',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');

        .body-outer {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 80px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .body-left {
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 80px;
        }

        .who-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .who-line {
          width: 28px;
          height: 1px;
          background: rgba(212,255,92,0.5);
          display: inline-block;
          flex-shrink: 0;
        }

        .who-text {
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(240,236,227,0.35);
          font-weight: 400;
        }

        .heading-about {
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: #f0ece3;
          text-transform: uppercase;
          margin: 0;
        }

        .heading-me {
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: #d4ff5c;
          text-transform: uppercase;
          margin: 0;
          font-style: italic;
        }

        .body-right {
          display: flex;
          flex-direction: column;
          padding-top: 4px;
        }

        .body-para {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(240,236,227,0.55);
          margin: 0 0 20px;
        }

        .body-para strong {
          color: #f0ece3;
          font-weight: 600;
        }

        .va-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          border-left: 2px solid rgba(212,255,92,0.3);
          padding: 18px 20px;
          margin-top: 12px;
          background: rgba(212,255,92,0.03);
        }

        .va-icon {
          width: 32px;
          height: 32px;
          background: rgba(240,236,227,0.06);
          border: 1px solid rgba(240,236,227,0.1);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 14px;
        }

        .va-text {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(240,236,227,0.45);
          margin: 0;
        }

        .va-text span {
          color: #f0ece3;
          font-weight: 500;
        }

        .body-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin-top: 60px;
        }

        /* Tablet */
        @media (max-width: 900px) {
          #bodysection {
            padding: 60px 32px !important;
          }
          .body-outer {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .body-left {
            position: relative;
            top: auto;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          #bodysection {
            padding: 48px 20px !important;
            margin-top: 48px !important;
          }
          .body-para {
            font-size: 14px;
          }
          .va-text {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="body-outer">

        <div className="body-left">
          <div className="who-label">
            <span className="who-line" />
            <span className="who-text">Who I Am</span>
          </div>
          <p className="heading-about">About</p>
          <p className="heading-me">Me</p>
        </div>

        <div className="body-right">
          <p className="body-para">
            I'm <strong>Marlon Ampoon</strong> — a Web Developer and Graphic Artist passionate about
            helping people and businesses succeed online. I build websites that don't just look great —
            they work smoothly, load fast, and make a real impact for the people behind them.
          </p>

          <p className="body-para">
            I find genuine fulfillment in taking <strong>technical challenges</strong> and transforming
            them into clean, functional solutions. Whether it's crafting a responsive frontend from scratch,
            designing a cohesive brand identity, or producing bold digital graphics — I bring both the{' '}
            <strong>engineering precision</strong> and the <strong>visual sensibility</strong>.
          </p>

          <p className="body-para">
            Every project I take on gets my full commitment — not just to meet the brief, but to exceed it.
            I believe great work comes from clear communication, attention to detail, and a genuine
            willingness to go the extra mile. If there's a way I can help you achieve your goals, I'd be
            honored to be a part of that journey.
          </p>

          <div className="va-card">
            <div className="va-icon">💼</div>
            <p className="va-text">
              I also offer <span>Web Operations Support</span> as a secondary service — drawing on my background in site management, content updates, and performance monitoring to help clients maintain their digital presence and handle routine IT tasks when needed.
            </p>
          </div>
        </div>
      </div>

      <div className="body-divider" />
    </div>
  )
}

export default Body