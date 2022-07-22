import { Theme } from "@mui/system"

const dashboardStyles = ((theme: Theme) => ({
  cardItem: {
    borderRadius: '2px',
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)',
    paddingTop: '54px'
  },
  cardImg: {
    '& .MuiSvgIcon-root': {
      fontSize: '4rem'
    }
  },
  cardContents: {
    '& h6': {
      marginBottom: '8px',
      fontSize: '24px',
      fontWeight: '300'
    },
    '& p': {
      fontSize: '15px'
    }
  },
  cardFooter: {
    borderTop: '1px solid rgba(160,160,160,0.2)'
  },
  frame: {
    '& iframe': {
      width: '100%',
      maxWidth: '728px',
      height: '90px',
      border: '1px dotted grey'
    }
  },
  tweetsFrame: {
    '& iframe': {
      width: '100%',
      height: '700px',
      border: '0',
      [theme.breakpoints.down('sm')]: {
        height: '500px'
      }
    }
  },
  tabs: {
    '& .MuiButtonBase-root': {
      width: '25%',
      color: '#ee6e73 !important'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#000'
    }
  }
}))

export default dashboardStyles
