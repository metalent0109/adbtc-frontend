const surftabModalStyles = (() => ({
  wrapper: {    
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',    
    backgroundColor: '#fff',
    height: '70vh',
    width: '90vw',
    maxWidth: '880px'
  },
  contents: {
    padding: '20px',
    height: 'calc(100% - 100px)',
    overflowY: 'auto' as const,
    overflowX: 'hidden'as const,
    '& iframe': {
      width: '100%',
      height: 'calc(100% - 50px)',
      marginBottom: '1rem'
    }
  }
}))

export default surftabModalStyles
