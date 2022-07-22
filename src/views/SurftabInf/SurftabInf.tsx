import React, { FC } from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link'

import Layout from 'components/Layout'
import { CustomCard } from 'components/CustomCard/CustomCard'

import styles from 'assets/jss/pages/earnStyles'

const useStyles = makeStyles(styles)

const SurftabInf: FC = () => {

  const classes = useStyles()

  return (
    <Layout title='Active window surfing'>
      <Box my={3}>
        <Typography variant='body1' sx={{ fontSize: "15px" }}>
          After you click on the link, new page will be opened and when page loaded, timer starts.
          Please, don't close it until timer is ticking.
          When time will be gone and you resolve captcha, you get satoshis.
        </Typography>
      </Box>
      <Box mb={3}>
        <CustomCard>
          <CardContent sx={{ padding: '24px' }}>
            <Link underline='none' href='https://adbtc.top/surftab/w/121464' target='_blank' sx={{ marginBottom: '1rem', display: 'block' }}>
              More Gift Bitcoin
            </Link>
            <Typography variant='body1'>
              Price: 7 satoshis | 15 seconds
            </Typography>
          </CardContent>
        </CustomCard>
      </Box>

      <Box mb={3}>
        <CustomCard>
          <CardContent sx={{ padding: '24px' }}>
            <Link underline='none' href='https://adbtc.top/surftab/w/121472' target='_blank' sx={{ marginBottom: '1rem', display: 'block' }}>
              BNC Bitcoin Mining
            </Link>
            <Typography variant='body1'>
              Price: 3 satoshis | 10 seconds
            </Typography>
          </CardContent>
        </CustomCard>
      </Box>
    </Layout>
  )
}

export default SurftabInf
