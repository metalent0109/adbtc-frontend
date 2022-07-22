import { Theme } from "@mui/system"

const topSurfersStyles = ((theme: Theme) => ({
  topSurfersTable: {
    '& td, th': {
      padding: '15px 5px',
      fontSize: '15px',
      lineHeight: '1.5',
      borderBottom: '0'
    },
    '& .MuiTableBody-root td a': {
      color: '#039be5'
    },
    '& .MuiTableBody-root tr:nth-child(odd)': {
      backgroundColor: 'rgba(242,242,242,0.5)'
    }
  },
  greenRow: {
    backgroundColor: '#4CAF50 !important',
    '& th, td, a': {
      color: 'white !important'
    }
  }
}))

export default topSurfersStyles
