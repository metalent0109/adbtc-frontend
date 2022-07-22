import { Theme } from "@mui/system"

const adminLayoutStyles = ((theme: Theme) => ({
  wrapper: {
    paddingTop: '0.5rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '0'
    }
  },
  logoWrapper: {
    border: '1px solid #e0e0e0',
    backgroundColor: '#2c3544!important',
    padding: '10px 20px',
    '& h6': {
      fontSize: '1.6rem',
      lineHeight: '2rem',
      color: '#eafaf9',
      fontWeight: '400'
    },
    '& p': {
      color: '#eafaf9',
      fontSize: '15px'
    }
  },
  balanceCard: {
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)',
    backgroundColor: '#2c3544!important',
    '& p': {
      fontSize: '1.4rem',
      color: '#fff',
      display: 'flex',
      alignItems: 'center'
    },
    '& a': {
      display: 'flex',
      alignItems: 'center',
      color: '#4CAF50'
    },
    '& .MuiDivider-root': {
      backgroundColor: '#e0e0e0',
      margin: '0.5rem 0'
    },
    [theme.breakpoints.down('md')]: {
      '& p': {
        fontSize: '16px'
      }
    }
  }, 
  infoLink: {
    color: '#039be5 !important'
  },
  tooltip: {
    '& .MuiTooltip-tooltip': {
      backgroundColor: '#323232',
      fontSize: '1rem',
      color: 'white',
      fontWeight: '400',
      padding: '10px 8px',
      borderRadius: '0',
    }
  },

  collpaseMenu: {
    border: '1px solid #ddd'
  },
  collpaseHeader: {
    padding: '5.5px 20px',
    fontSize: '15px',
    '& .MuiButtonBase-root': {
      color: '#000',
      marginLeft: '1rem'
    }
  },
  sidebarCollpaseHeader: {
    padding: '10px 32px',
    color: 'rgba(0,0,0,0.54)',
  },
  sidebarCollpase: {
    borderWidth: '0px 0 0 0'
  },
  menuList: {
    borderTop: '1px solid #ddd',
    padding: '0 !important',
    '& .MuiMenuItem-root': {
      padding: '10px 20px',
      color: '#2c3544',
      '&:hover': {
        backgroundColor: '#2c3544!important',
        color: '#fff',
        '& .MuiSvgIcon-root': {
          color: '#fff'
        },
      }
    },
    '& .MuiSvgIcon-root': {
      color: '#2c3544'
    },
    '& .MuiListItemIcon-root': {
      minWidth: 'unset !important'
    }
  },
  collpaseMenuList: {
    borderTop: '0',
    borderBottom: '1px solid #ddd',
    '& .MuiMenuItem-root': {
      paddingLeft: '32px',
      paddingRight: '32px'
    }
  },
  activedMenu: {
    '&.MuiMenuItem-root': {
      backgroundColor: '#2c3544!important',
      color: '#fff',
      '& .MuiSvgIcon-root': {
        color: '#fff'
      }
    },
  },
  pcHeader: {
    '& h5': {
      margin: '0.5rem 0 1rem',
      fontSize: '1.64rem'
    },
    '& p': {
      fontSize: '15px',
      margin: '1rem 0'
    },
    '& a': {
      color: '#039be5'
    },
    [theme.breakpoints.down('sm')]: {
      '& h5': {
        marginBottom: '0'
      }
    }
  },
  divider: {
    backgroundColor: '#eee !important',
    margin: '0.5rem 0 !important'
  },
  hideMobile: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  mobileHeader: {
    display: 'none',
    backgroundColor: '#2c3544!important',
    color: 'white',
    height: "47px",
    '& p': {
      fontSize: '14px',
    },
    '& .MuiButtonBase-root': {
      color: 'white',
      marginRight: '0.5rem'
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex'
    }
  },
  drawer: {
    '& .MuiPaper-root': {
      width: '300px'
    }
  },
  btcToUsd: {
    height: '48px',
    padding: '0 32px',
    marginTop: '-8px',
    borderBottom: '1px solid #eee',
    '& p': {
      fontSize:" 14px",
      fontWeight: '500',      
    }
  },
  noTitle: {
    borderTop: '0'
  },
  contents: {
    minHeight: 'calc(100vh - 64px - 200px)',
    paddingBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 47px - 540px)'
    }
  }
}))

export default adminLayoutStyles
