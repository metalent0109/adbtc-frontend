import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomTextField from 'components/CustomTextField'

const FaucetpayDeposit: FC = () => {

  const [step, setStep] = useState(0)

  return (
    <Layout title='Deposit using FaucetPay'>
      {
        step === 0 ? (
          <>
            <Box mt={2}>
              <CustomTextField
                variant='standard'
                label='Amount in satoshis'
                fullWidth
                sx={{ marginBottom: '2rem' }}
                inputProps={{
                  type: 'number'
                }}
              />
            </Box>
            <Box mb={4}>
              <CustomButton variant='contained' btnColor='info' onClick={() => setStep(1)}>
                continue
              </CustomButton>
            </Box>
          </>
        ) : (
          <CustomButton variant='contained' btnColor='success' href='https://faucetpay.io/merchant/webscr'>
            pay
          </CustomButton>
        )
      }

    </Layout>
  )
}

export default FaucetpayDeposit
