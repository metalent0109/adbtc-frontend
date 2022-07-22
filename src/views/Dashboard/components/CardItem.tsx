import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import CustomButton from 'components/CustomButton';

import styles from 'assets/jss/pages/dashboardStyles'

const useStyles = makeStyles(styles)

interface Props {
  title: string;
  subTitle: string;
  btnText: string;
  icon: React.ReactNode;
  url: string;
}

const CardItem: FC<Props> = (props) => {

  const classes = useStyles()

  const navigate = useNavigate()

  const { title, subTitle, btnText, icon, url } = props

  return (
    <Box className={classes.cardItem} my={1}>
      <Box className={classes.cardImg} textAlign='center'>
        {icon}
      </Box>
      <Box p={3} className={classes.cardContents}>
        <Typography variant='h6' align='center'>
          {title}
        </Typography>
        <Typography variant='body1' align='center'>
          {subTitle}
        </Typography>
      </Box>
      <Box className={classes.cardFooter} py={2} px={3} textAlign='center'>
        <CustomButton variant='contained' btnColor='dark' onClick={() => navigate(url)}>
          {btnText}
        </CustomButton>
      </Box>
    </Box>
  )
}

export default CardItem
