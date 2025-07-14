import React from 'react'


const Header = () => {
  return (
    <header
      style={{
        background: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <h2 style={{ margin: 0, color: '#1976d2', fontWeight: 600, fontSize: '2rem' }}>
        header 
      </h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '16px 0 0 0',
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
        }}
      >
        <li style={{ color: '#555', fontSize: '1.1rem', cursor: 'pointer' }}>home</li>
        <li style={{ color: '#555', fontSize: '1.1rem', cursor: 'pointer' }}>about</li>
        <li style={{ color: '#555', fontSize: '1.1rem', cursor: 'pointer' }}>contact</li>
      </ul>
    </header>
  )
}

export default React.memo(Header)