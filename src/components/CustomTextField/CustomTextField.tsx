import React from 'react'
import { styled } from "@mui/material/styles";

import TextField from '@mui/material/TextField';

const CustomTextField = styled(TextField)(() => ({
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#26a69a'
  },
  '& .MuiInput-root.Mui-focused::after': {
    borderColor: '#26a69a !important'
  }
}));

export default CustomTextField;
