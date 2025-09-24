import React from 'react';

const Banner = ({title  , message}) => (
   <div style={{
    background: 'linear-gradient(135deg, #2E86AB 0%, #1B73A7 50%, #0F5F9A 100%)',
    color: '#fff',
    padding: '80px 40px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '32px',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <h1 style={{
      fontSize: '4rem',
      fontWeight: '600',
      marginBottom: '30px',
      letterSpacing: '-0.02em',
      lineHeight: '1.1',
      margin: '0 0 30px 0'
    }}>
      {title}
    </h1>
    <p style={{
      fontSize: '1.375rem',
      fontWeight: '400',
      lineHeight: '1.5',
      maxWidth: '800px',
      opacity: '0.95',
      letterSpacing: '0.01em',
      margin: '0'
    }}>
      {message}
    </p>
  </div>
);

export default Banner;
