import React, { VFC } from 'react'

const loadingSpinnerContainer = {
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: '5000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const loadingSpinner = {
  width: '64px',
  height: '64px',
  border: '8px solid',
  borderColor: '#000 transparent #555 transparent',
  borderRadies: '50%',
  animation: 'spin 1.2s linear infinite',
}

const Spinner: VFC = () => {
  return (
    <div style={loadingSpinnerContainer}>
      <div style={loadingSpinner}></div>
    </div>
  )
}

export default Spinner
