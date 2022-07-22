import { Theme } from "@mui/system"

const earnStyles = ((theme: Theme) => ({
  surfBrowseFrame: {
    '& iframe': {
      width: '200px',
      height: '300px',
      border: '1px dotted grey'
    }
  },
  totalEarn: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
    margin: '1rem 0 !important',
    '& .MuiSvgIcon-root': {
      marginRight: '4px'
    },
    '& > span': {
      color: '#4CAF50 !important'
    }
  },
  shortLinkCard: {
    borderRaidus: '2px',
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)',
    fontSize: '15px'
  }
}))

export default earnStyles
