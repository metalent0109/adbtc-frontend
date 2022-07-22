const referralSystemStyles = (() => ({
  bannerCard: {
    marginTop: '1rem',
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%) !important',
    '& > .MuiCardContent-root': {
      padding: '0',
      paddingBottom: '0 !important'
    }
  },
  cardHeader: {
    padding: '1rem',
    cursor: 'pointer'   
  },
  childCard: {
    marginBottom: '24px',
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%) !important',
    '& .MuiCardActions-root': {
      padding: '16px 24px',
      borderTop: '1px solid #eee'
    }
  },
  banner: {
    height: '80px',
    overflow: 'auto',
    padding: '8px',
    border: '1px solid #ccc',
    boxSizing: 'border-box' as const,
    width: '100%',
    '& pre': {
      fontSize: '15px'
    }
  }
}))

export default referralSystemStyles
