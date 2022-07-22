import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomTextField from 'components/CustomTextField'

const SendCode: FC = () => {

  const [showEmailForm, setShowEmailForm] = useState(false)

  return (
    <Layout title='Change Wallet'>
      <Box mt={4}>
        {
          !showEmailForm ? (
            <CustomButton variant='contained' btnColor='success' onClick={() => setShowEmailForm(true)}>
              click here to get code to change wallet address
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
              <Typography variant='body1' sx={{marginTop: '1rem'}}>
                In case you don't see our message, please check SPAM folder.
              </Typography>
            </Box>
          )
        }
      </Box>
    </Layout>
  )
}

export default SendCode
