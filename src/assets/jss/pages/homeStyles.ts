import { Theme } from "@mui/system"

const homeStyles = ((theme: Theme) => ({
  headerSection: {
    backgroundImage: 'url(/images/banner.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    padding: '4rem 0',
    boxSizing: 'border-box' as const,
    minHeight: '455px',
    '& h3': {
      margin: '0.5rem 0 36px',
      color: 'white',
      fontSize: "2.92rem",
      lineHeight: '1.1',
      fontWeight: '400'
    }
  },
  signInBtn: {
    '&.MuiButton-root': {     
      backgroundColor: '#eeff41 !important',
      color: '#263238 !important'
    }
  },
  signBtn: {
    '&.MuiButton-root': {            
      height: '54px',
      lineHeight: '54px',
      fontSize: '15px',
      padding: '0 28px',
      borderRadius: '0',
      fontWeight: '400',
      margin: '0 8px'
    }
  },
  signUpBtn: {
    '&.MuiButton-root': {
      backgroundColor: '#2c3544 !important',
      color: '#fff !important',     
    }
  },
  googleLoginBtn: {
    '&.MuiButton-root': {
      backgroundColor: '#fff !important',
      color: '#757575 !important', 
      textTransform: 'none !important',
      fontWeight: '400',
      borderRadius: '0',
      width: '120px',
      height: '36px',
      padding: '0',
      paddingLeft: '30px',
      '& svg': {
        padding: '8px',
        position: 'absolute',
        left: '0',
        top: '0'
      }
    }
  },
  serviceItem: {
    '& h5': {
      fontSize: "1.64rem",
      lineHeight: '1.1',
      margin: '1rem 0 0.65rem 0',
      fontWeight: '400' 
    },
    '& p': {
      fontWeight: '300',
      fontSize: '15px',
      color: 'rgba(0,0,0,0.87)',
      marginBottom: '1rem',
    }
  },
  serviceAd: {
    maxWidth: '480px',
    width: '100%',
    height: '60px',
    '& iframe': {
      border: 0,
      width: '100%',
      height: '100%'
    }
  },
  middleDesc: {
    backgroundColor: '#2c3544 !important',
    '& h4': {
      fontSize: '2.28rem',
      lineHeight: '1.1',
      margin: '1.5rem 0 1rem 0',
      fontWeight: '400',
      color: 'white'
    },
    '& p': {
      fontSize: '1.4rem',
      color: 'white',
      padding: '1rem 0'
    }
  },
  tableWrapper: {
    '& h5': {
      fontSize: "1.64rem",
      margin: '1rem 0 0.65rem 0',
      color: 'rgba(0,0,0,0.87)'
    },
    '& .MuiTable-root th, .MuiTable-root td': {
      padding: '15px 5px',
      fontSize: '15px',
      border: '0'
    },
    '& tbody tr:nth-child(odd)': {
      backgroundColor: 'rgba(242,242,242,0.5)'
    },
    [theme.breakpoints.down("md")]: {
      '& .MuiTable-root': {
        display: 'block',
        position: 'relative',
        borderSpacing: '0',
        borderCollpase: 'collapse'
      },
      '& .MuiTableHead-root': {
        display: 'block',
        float: 'left',
        '& .MuiTableRow-root': {
          display: 'block',
          padding: '0 10px 0 0',
          borderBottom: 'none'
        },
        '& .MuiTableCell-root': {
          display: 'block',
          textAlign: 'right'
        }
      },
      '& .MuiTableBody-root': {
        display: 'block',
        whiteSpace: 'nowrap',
        '& .MuiTableRow-root': {
          display: 'inline-block',
          verticalAlign: 'top',
          padding: '0 10px',
          borderBottom: '0'
        },
        '& .MuiTableCell-root': {
          display: 'block',
          textAlign: 'left'
        }
      }
    }
  }
}))

export default homeStyles
