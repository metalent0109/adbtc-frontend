import React, { FC } from 'react'
import clsx from 'clsx'
import { makeStyles } from "@mui/styles";

import Button, { ButtonProps } from '@mui/material/Button';

import styles from 'assets/jss/components/buttonStyles'

const useStyles = makeStyles(styles)

interface Props extends ButtonProps {
  btnColor: 'dark' | 'white' | 'secondary' | 'success' | 'info' | 'primary' | 'yellow' | 'orrange' | 'gray' | "danger"
}

const CustomButton: FC<Props> = (props) => {

  const { children, btnColor, ...otherProps } = props

  const classes = useStyles()

  const classnames = clsx(
    classes.btn,
    {
      [classes.dark]: btnColor === 'dark',
      [classes.secondary]: btnColor === 'secondary',
      [classes.success]: btnColor === 'success',
      [classes.info]: btnColor === 'info',
      [classes.white]: btnColor === 'white',
      [classes.primary]: btnColor === 'primary',
      [classes.yellow]: btnColor === 'yellow',
      [classes.orrange]: btnColor === 'orrange',
      [classes.gray]: btnColor === 'gray',
      [classes.danger]: btnColor === 'danger',
    }
  )

  return (
    <Button {...otherProps} className={ classnames }>
      { children }
    </Button>
  )
}

export default CustomButton
