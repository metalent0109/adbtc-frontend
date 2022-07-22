import { Theme } from "@mui/system"

const homeNavbarStyles = ((theme: Theme) => ({
  appBar: {
    backgroundColor: '#2c3544 !important',
    boxShadow: 'none !important',
    '& .MuiContainer-root': {
      width: '90%',
      maxWidth: '1280px',
      paddingLeft: '0',
      paddingRight: '0'     
    },
    '& .MuiToolbar-root': {
      paddingLeft: '0',
      paddingRight: '0'
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiToolbar-root': {
        display: 'block',
        textAlign: 'center'
      }      
    }
  },
  navLogo: {
    '&.MuiButton-root': {
      color: 'white',
      fontSize: "2.1rem",
      textTransform: 'none !important',
      padding: "0",
      fontWeight: '400'
    }
  },
  navLink: {
    '&.MuiButton-root': {
      color: '#cddc39',
      padding: '0 15px',
      height: '64px',
      fontSize: '1rem',
      textTransform: 'none !important',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.1)'
      }
    }
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
  langBtn: {
    '&.MuiButton-root': {
      color: '#fff',
      padding: '0 15px',
      height: '64px',
      fontSize: '1rem',
      fontWeight: '400',
      textTransform: 'none !important',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.1)'
      }
    }
  },
  langMenu: {
    color: '#26a69a !important',
    lineHeight: '22px !important',
    padding: '14px 16px !important'
  },
  navLinks: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}))

export default homeNavbarStyles
