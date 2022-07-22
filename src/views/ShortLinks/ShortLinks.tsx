import React, { FC } from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/pages/earnStyles'

const useStyles = makeStyles(styles)

const ShortLinks: FC = () => {

  const classes = useStyles()

  const shortLinks = [
    {
      title: 'exe.io',
      price: '0.05'
    },
    {
      title: 'adbull.me',
      price: '0.03'
    },
    {
      title: 'fc.lc',
      price: '0.03'
    },
    {
      title: 'hrshort.com',
      price: '0.02'
    },
    {
      title: 'ovlinks.com',
      price: '0.02'
    }
  ]

  return (
    <Layout title='Shortlinks'>
      <Box my={3}>
        <Typography variant='body1' sx={{ fontSize: '1.4rem' }}>
          Today earned: &nbsp;
          <b>0,00 ₽</b>
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {
          shortLinks.map((shortLink) => (
            <Grid item xs={12} sm={12} md={6} key={shortLink.title}>
              <Box className={classes.shortLinkCard} p={3} display='flex' alignItems='center' justifyContent='space-between'>
                <Box>
                  <Typography variant='body1'>
                    {shortLink.title}
                  </Typography>
                  <Typography variant='body1'>
                    Price: <b>{`${shortLink.price} ₽`}</b>
                  </Typography>
                </Box>
                <CustomButton variant='contained' btnColor='success'>
                  VISIT
                </CustomButton>
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </Layout>
  )
}

export default ShortLinks
