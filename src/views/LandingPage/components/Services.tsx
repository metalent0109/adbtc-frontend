import React, { VFC } from 'react'

import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

import styles from 'assets/jss/pages/homeStyles'

const useStyles = makeStyles(styles)

const Services: VFC = () => {

  const classes = useStyles()

  return (
    <Box mt={2}>
      <Container maxWidth='xl'>
        <Box maxWidth={1280} mx='auto'>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Box textAlign='center' className={classes.serviceItem} py={2}>
                <img src="/images/marketing.png" alt="Marketing" width={60} />
                <Typography variant='h5'>
                  ADVERTISERS
                </Typography>
                <Typography variant='body1'>
                  Target <b>REAL</b> bitcoin users.
                </Typography>
                <Typography variant='body1'>
                  CPC starts from 2 Satoshis.
                </Typography>
                <Typography variant='body1'>
                  No minimum purchase required!
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Box textAlign='center' className={classes.serviceItem} py={2}>
                <img src="/images/bitcoin.png" alt="Marketing" width={60} />
                <Typography variant='h5'>
                  EARNERS
                </Typography>
                <Typography variant='body1'>
                  High rates for surfing
                </Typography>
                <Typography variant='body1'>
                  Withdrawals from 500 Satoshis/1 ₽
                </Typography>
                <Typography variant='body1'>
                  Affiliate program: 10% from you referral surfing earnings<br />
                  5% from your referral advertisement spendings!
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.serviceAd} mx='auto' mb={4}>
                <iframe src="//ad.a-ads.com/298312?size=468x60"></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Services
