import React, { FC } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'

import Layout from 'components/Layout'

const AccountInfo: FC = () => {

  return (
    <Layout title='Account info'>
      <Box>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          id: 2957768
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          Registered: 2022-07-04 05:10:49
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          Referrals: 0
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          Total paid out: 0.00000000 BTC
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          Total paid out: 0,00 ₽
        </Typography>
      </Box>

      <Divider sx={{ margin: '0.5rem 0' }} />

      <Box>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '1rem' }}>
          <b>Total earned:</b>
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          Surf ads: 0 satoshis
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          Autosurfing: 0 satoshis
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '1rem' }}>
          Reflink hits:: 0 satoshis
        </Typography>

        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          Surf ads: 0,00 ₽
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          Shortlinks: 0,00 ₽
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1.5' }}>
          Video ads: 0,00 ₽
        </Typography>
      </Box>
    </Layout>
  )
}

export default AccountInfo
