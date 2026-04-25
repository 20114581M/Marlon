import React from 'react'
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
      fontFamily: 'sans-serif',
      textAlign: 'center',
      paddingTop: '60px',
      gap: '0',
    }}>

      <div style={{
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid rgba(212,255,92,0.3)',
        outline: '1px solid rgba(255,255,255,0.06)',
        outlineOffset: '5px',
        marginBottom: '28px',
        flexShrink: 0,
      }}>
        <img
          src={heroImage}
          alt="Hero"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '20px',
      }}>
        {['Web Developer', 'Graphic Artist', 'UI Designer'].map((role) => (
          <span key={role} style={{
            fontSize: '9px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase' as const,
            color: '#6b6660',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '4px 12px',
            borderRadius: '999px',
          }}>
            {role}
          </span>
        ))}
      </div>

      <h1 style={{
        fontSize: 'clamp(28px, 4vw, 52px)',
        fontWeight: 800,
        lineHeight: 1.08,
        letterSpacing: '-0.03em',
      }}>
        Crafting digital{' '}
        <span style={{ color: '#d4ff5c', fontStyle: 'italic' }}>experiences.</span>
      </h1>

      <p style={{
        fontSize: '13px',
        fontWeight: 300,
        color: '#5a5652',
        maxWidth: '340px',
      }}>
        Clean, purposeful code meets striking visual design. From pixel-perfect
        UIs to bold graphic work — I build things that look great and work even better.
      </p>

    </section>
  )
}

export default Hero