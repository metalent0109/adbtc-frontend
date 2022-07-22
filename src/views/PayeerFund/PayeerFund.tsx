import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomTextField from 'components/CustomTextField'
import CustomSelect from 'components/CustomSelect'

const PayeerFund: FC = () => {

  const [currency, setCurrency] = useState('USD')
  const [step, setStep] = useState(0)

  return (
    <Layout title='Deposit using PAYEER'>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <CustomSelect
            value={currency}
            handleChange={(e) => setCurrency(e.target.value)}
            label='Type'
            sx={{ marginBottom: '2rem' }}
            fullWidth={true}
            options={[
              {
                value: 'USD',
                text: 'USD'
              },
              {
                value: 'EUR',
                text: 'EUR'
              },
              {
                value: 'RUB',
                text: 'RUB'
              }
            ]}
          />
        </Grid>
        {
          step === 0 ? (
            <Grid item xs={12}>
              <Box mt={2}>
                <CustomTextField
                  variant='standard'
                  label='Amount in USD'
                  fullWidth
                  defaultValue={0}
                  sx={{ marginBottom: '2rem' }}
                  inputProps={{
                    type: 'number'
                  }}
                />
              </Box>
              <Box my={4}>
                <CustomButton variant='contained' btnColor='info' onClick={() => setStep(1)}>
                  continue
                </CustomButton>
              </Box>
              <Typography variant='body1'>
                Deposit to advertising balance. Minimum amount is 0.1 USD
              </Typography>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Typography variant='body1'>
                <b>33.00 USD, 150193 satoshis</b> will be credited
              </Typography>

              <CustomButton variant='contained' href='https://payeer.com/merchant/' btnColor='info' sx={{marginTop: '2rem'}}>
                Pay with PAYEER
              </CustomButton>
            </Grid>
          )
        }
      </Grid>
    </Layout>
  )
}

export default PayeerFund
