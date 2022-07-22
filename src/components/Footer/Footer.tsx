import React, { VFC } from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import styles from 'assets/jss/components/footerStyles'

const useStyles = makeStyles(styles)

const Footer: VFC = () => {

  const classes = useStyles()

  return (
    <Box className={classes.footer}>
      <Container maxWidth='xl'>
        <Box maxWidth={1280} mx='auto'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box className={classes.logoSection}>
                <Typography variant='h5'>
                  ↗ adBTC
                </Typography>
                <Box className={classes.imgList} display='flex' alignItems='center' flexWrap='wrap'>
                  <img src="/images/accepted.png" alt="" width={250} />
                  <img src="/images/payeer.png" alt="" width={48} />
                  <img src="/images/ssl.png" alt="" width={150} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <Box className={classes.links} py={2}>
                <Link href='/'>
                  Terms of use
                </Link>
                <Link href='/'>
                  Privacy
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <Box className={classes.links} py={2}>
                <Link href='/'>
                  Current prices
                </Link>
                <Link href='/'>
                  Latest withdrawals
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Box className={classes.socials}>
                <Link href='https://twitter.com/adbtc' target='_blank'>
                  <img src="/images/twitter.png" alt="" width={24} />
                </Link>
                <Link href='https://t.me/adbtcofficial' target='_blank'>
                  <img src="/images/telegram.png" alt="" width={24} />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography variant='body1' className={classes.copyRight}>
                Contact &nbsp;
                <Link href='/'>support@adbtc.top</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
