import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomTextField from 'components/CustomTextField'

const PayeerFiat: FC = () => {

  const [step, setStep] = useState(0)

  return (
    <Layout title='Deposit using PAYEER'>
      {
        step === 0 && (
          <>
            <Box mt={2}>
              <CustomTextField
                variant='standard'
                label='Amount in RUB'
                fullWidth
                defaultValue={0}
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
            <Typography variant='body1'>
              Пополнение рекламного баланса. Минимальная сумма для пополнения 1 RUB
            </Typography>
          </>
        )
      }
      {
        step === 1 && (
          <Box mt={2}>
            <Typography variant='body1' sx={{marginBottom: '1.5rem'}}>
              <b> 4.00 RUB</b> будет зачислен
            </Typography>
            <CustomButton variant='contained' btnColor='info' href='https://payeer.com/merchant/'>
              continue
            </CustomButton>
          </Box>
        )
      }
    </Layout>
  )
}

export default PayeerFiat
