import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomTextField from 'components/CustomTextField'

const SendCodePayeer: FC = () => {

  const [showEmailForm, setShowEmailForm] = useState(false)

  return (
    <Layout title='adBTC'>
      <Box mt={4}>
        {
          !showEmailForm ? (
            <CustomButton variant='contained' btnColor='success' onClick={() => setShowEmailForm(true)}>
              click here to get code to change wallet address payeer
            </CustomButton>
          ) : (
            <Box>
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
                If you can not see our message, please, send your new address to support@adbtc.top
              </Typography>
            </Box>
          )
        }
      </Box>
    </Layout>
  )
}

export default SendCodePayeer
