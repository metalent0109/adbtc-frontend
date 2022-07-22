const referralMarketStyles = (() => ({
  filterCard: {
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%) !important'
  },
  table: {
    '& td, th': {
      padding: '15px 5px',
      fontSize: '15px',
      lineHeight: '1.5',
      borderBottom: '0'
    },
    '& thead th': {
      color: '#039be5'
    },
    '& .MuiTableBody-root td a': {
      color: '#039be5'
    },
    '& .MuiTableBody-root tr:nth-child(odd)': {
      backgroundColor: 'rgba(242,242,242,0.5)'
    }
  },
  slider: {
    '& .MuiSlider-rail': {
      height: '18px',
      borderRadius: '4px',
      border: '1px solid #D3D3D3',
      boxShadow: 'inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb',
      background: '#FAFAFA'
    },
    '& .MuiSlider-track': {
      background: '#3FB8AF',
      boxShadow: 'inset 0 0 3px rgb(51 51 51 / 45%)',
      height: '18px',
      border: '0'
    },
    '& .MuiSlider-thumb': {
      width: '34px',
      height: '28px',
      boxShadow: 'inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb !important',
      background: '#fff',
      borderRadius: '3px',
      border: '1px solid #D9D9D9',
      '&::before': {
        height: '14px',
        width: '1px',
        background: '#E8E7E6',
        left: '14px',
        top: '6px'
      },
      '&::after': {
        left: '17px',
        height: '14px',
        width: '1px',
        background: '#E8E7E6',
        top: '6px',
        transform: 'none'
      }
    }
  }
}))

export default referralMarketStyles
