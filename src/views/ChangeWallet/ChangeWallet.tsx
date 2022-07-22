import React, { FC } from 'react'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomTextField from 'components/CustomTextField'

const ChangeWallet: FC = () => {

  return (
    <Layout title='adBTC'>
      <Typography variant='h5' sx={{ fontSize: '1.64rem' }}>
        Change Wallet
      </Typography>
      <Box mb={4}>
        <CustomTextField
          variant='standard'
          label='New BTC Address'
          fullWidth
        />
      </Box>
      <CustomButton variant='contained' btnColor='dark'>
        Submit
      </CustomButton>
    </Layout>
  )
}

export default ChangeWallet
