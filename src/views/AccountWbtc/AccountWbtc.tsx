import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'

const AccountWbtc: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='Withdraw to BTC Address'>
      <Box mt={5}>
        <Typography variant='h4' sx={{ fontSize: '2.2rem', marginBottom: '1rem' }} align='center'>
          Error
        </Typography>
        <Typography variant='body1' align='center'>
          Please, go to &nbsp;
          <CustomButton variant='contained' btnColor='info' onClick={() => navigate('/acc/change_wallet')}>
            settings page
          </CustomButton> &nbsp;
          and enter valid BITCOIN address (not email or username or something else)
        </Typography>
      </Box>
    </Layout>
  )
}

export default AccountWbtc
