const selectStyles = (() => ({
  select: {
    '& .Mui-focused::after': {
      borderColor: '#26a69a'
    },
    '& .MuiMenuItem-root': {
      color: '#26a69a'
    },
    '& .Mui-focused.MuiInputLabel-root': {
      color: '#26a69a'
    }
  },
  menuItem: {
    color: '#26a69a !important',
    padding: '14px 16px !important',
    fontSize: '16px !important',
    lineHeight: '22px !important'
  }
}))

export default selectStyles
