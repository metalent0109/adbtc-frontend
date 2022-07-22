import { Theme } from "@mui/system"

const textFieldStyles = ((theme: Theme) => ({
  textField: {
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#26a69a'
    },
    '& .MuiInput-root.Mui-focused::after': {
      borderColor: '#26a69a !important'
    }
  }
}))

export default textFieldStyles
