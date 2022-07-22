import React, { FC } from 'react'
import { makeStyles } from "@mui/styles";

import PaymentIcon from '@mui/icons-material/Payment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Layout from 'components/Layout'
import CardItem from './components/CardItem'

import styles from 'assets/jss/pages/dashboardStyles'

const useStyles = makeStyles(styles)

const Dashboard: FC = () => {

  const classes = useStyles()

  return (
    <Layout title="adBTC">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <CardItem
            title='Earn money for viewing ads'
            subTitle='Earn satoshis or ₽ by surfing/autosurfing/shortlinks. It is easy!'
            btnText='Start Earning'
            icon={<PaymentIcon />}
            url='/index/earn'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <CardItem
            title='Promote your webpage'
            subTitle='Unique visitors to your webpage just from 5000 Satoshis per 1000 unique views.'
            btnText='Add link'
            icon={<TrendingUpIcon />}
            url='/surf/add'
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Box className={classes.frame} mb={3}>
            <iframe src="https://neon.today/context/get/9038/1009/1/728/90"></iframe>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Box className={classes.tweetsFrame} mb={3}>
            <iframe src="https://neon.today/context/get/9038/1009/1/728/90"></iframe>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Dashboard
