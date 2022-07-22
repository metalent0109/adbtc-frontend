import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'

import Layout from 'components/Layout'

const AccountWwbtc: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='Withdraw WBTC (Polygon Network)'>
      <Box mt={5}>
        <Typography variant='h4' sx={{ fontSize: '2.2rem', marginBottom: '1rem' }} align='center'>
          Error
        </Typography>
        <Typography variant='body1' align='center'>
          WBTC address not set <br />
          <Link
            href='/'
            underline='none'
            sx={{color: '#039be5'}}
            onClick={(e) => {
              e.preventDefault();
              navigate('/acc/code_wbtc')
            }}
          >
            Change Wallet
          </Link>
        </Typography>
      </Box>
    </Layout>
  )
}

export default AccountWwbtc
