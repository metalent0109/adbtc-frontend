import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomTextField from 'components/CustomTextField'

const CodeFh: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='adBTC'>
      <Box mt={4}>
        <Typography variant='body1'>
          Code successfully sent to your email. Please enter it to the field below:
        </Typography>
        <Box mt={2} mb={4}>
          <CustomTextField fullWidth={true} variant='standard' label='Code from email' />
        </Box>
        <CustomButton variant='contained' btnColor='info'>
          Submit
        </CustomButton>
        <Typography variant='body1' sx={{ marginTop: '1rem' }}>
          If you can not see our message, please, send your new FaucetPay address to support@adbtc.top from email: xxx@google.com
        </Typography>

        <Typography variant='body1' sx={{ marginTop: '2rem' }}>
          Not a member of FaucetPay yet? &nbsp;
          <Link href='/' underline='none' onClick={(e) => {e.preventDefault(); navigate('/signup')}}>
            Sign up
          </Link>
        </Typography>
      </Box>
    </Layout>
  )
}

export default CodeFh
