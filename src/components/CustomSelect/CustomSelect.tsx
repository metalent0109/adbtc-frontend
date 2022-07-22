import React, { FC } from 'react'
import { makeStyles } from "@mui/styles";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControlProps } from '@mui/material'

import { SelectOption } from 'typings'

import styles from 'assets/jss/components/selectStyles'

const useStyles = makeStyles(styles)

interface Props extends FormControlProps {
  value: string;
  handleChange: (e: SelectChangeEvent<any>) => void;
  label?: string;
  fullWidth?: boolean;
  options: Array<SelectOption>
}

const CustomSelect: FC<Props> = (props) => {

  const { value, handleChange, label, fullWidth, options, ...others } = props

  const classes = useStyles()

  return (
    <FormControl variant="standard" fullWidth={fullWidth} className={classes.select} {...others}>
      <InputLabel id="demo-simple-select-standard-label">{label ?? ''}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleChange}
        label={label ?? ''}
      >
        {
          options.map((option) => (
            <MenuItem value={option.value} key={option.value} className={classes.menuItem}>{option.text}</MenuItem>
          ))
        }      
      </Select>
    </FormControl>
  )
}

export default CustomSelect
