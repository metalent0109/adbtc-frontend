import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomSelect from 'components/CustomSelect'

const Settings: FC = () => {

  const [currency, setCurrency] = useState('USD')

  return (
    <Layout title='Settings'>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <Box mb={4}>
            <CustomSelect
              value={currency}
              handleChange={(e) => setCurrency(e.target.value)}
              label='Currency'
              fullWidth={true}
              options={[
                {
                  value: 'RUB',
                  text: 'RUB'
                },
                {
                  value: 'BRL',
                  text: 'BRL'
                },
                {
                  value: 'EUR',
                  text: 'EUR'
                },
                {
                  value: 'INR',
                  text: 'INR'
                },
                {
                  value: 'THB',
                  text: 'THB'
                },
                {
                  value: 'TRY',
                  text: 'TRY'
                },
                {
                  value: 'USD',
                  text: 'USD'
                }
              ]}
            />
          </Box>

          <Box>
            <CustomButton variant='contained' btnColor='info'>
              SUBMIT
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Settings

