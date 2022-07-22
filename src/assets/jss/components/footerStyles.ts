const footerStyles = (() => ({
  footer: {
    backgroundColor: '#2c3544 !important',
    paddingTop: '20px',
    paddingBottom: '1rem'
  },
  logoSection: {
    '& h5': {
      color: '#fff',
      fontSize: '1.64rem',
      margin: '1rem 0 0.65rem 0'
    }
  },
  imgList: {
    '& img:first-child': {
      marginLeft: '-2rem',
      marginTop: '1rem'      
    },
    '& img:nth-child(2)': {
      marginBottom: '0.5rem'
    },
    '& img:last-child': {
      marginLeft: "1rem"
    }
  },
  links: {
    '& a': {
      display: 'block',
      color: '#fff',
      textDecoration: 'none !important',
      fontSize: '15px',
      lineHeight: '1.5'
    }
  },
  socials: {
    '& a:first-child': {
      marginRight: '8px'
    }
  },
  copyRight: {
    color: '#f5f5f5 !important',   
    '& a': {
      color: '#81d4fa !important',
      textDecoration: 'none !important'
    }
  }
}))

export default footerStyles
