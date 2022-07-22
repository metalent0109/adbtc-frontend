import { Theme } from "@mui/system"

const authStyles = ((theme: Theme) => ({
  contents: {
    minHeight: 'calc(100vh - 64px - 240px)'
  },
  langSection: {
    '& h5': {
      margin: '0.5rem 0 1rem',
      fontSize: '1.64rem'
    },    
  },
  langBtn: {
    '&.MuiButton-root': {
      color: '#000',
      textTransform: 'none'
    }    
  },
  langMenu: {
    color: '#26a69a !important',
    fontSize: '16px !important',
    padding: '14px 16px !important'
  },
  signUpBtn: {
    '&.MuiButton-root': {
      backgroundColor: 'white !important',
      color: '#000'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  captchaSelect: {
    '& .Mui-focused::after': {
      borderColor: '#26a69a'
    }
  },
  authLink: {
    textDecoration: 'none !important',
    color: '#039be5 !important',
    fontSize: '15px'
  },
  imgWrapper: {
    '& img': {
      maxWidth: '256px'
    }
  },
  hideMobile: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  signUpNote: {
    '& span': {
      color: '#F44336 !important'
    }
  },
  forgotHeader: {
    height: '100px',
    backgroundImage: 'url(/images/banner.webp)',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    '& h3': {
      color: 'white',
      fontSize: '2.28rem'
    }
  },
  forgotText: {
    '& h4': {
      margin: '0.5rem 0 1rem',
      fontSize: '2.28rem'
    },
    '& h5': {
      fontWeight: '300',
      margin: '0.5rem 0 1rem',
      fontSize: '1.64rem',
      color: 'rgba(0,0,0,0.87)'
    }
  }
}))

export default authStyles
