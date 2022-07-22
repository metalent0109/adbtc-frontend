import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import { CustomCard } from 'components/CustomCard/CustomCard'
import CustomSelect from 'components/CustomSelect'
import CustomTextField from 'components/CustomTextField'

const MoveBalance: FC = () => {

  const [currency, setCurrency] = useState('satoshis')

  return (
    <Layout title='Move to advertising balance'>
      <CustomCard>
        <CardContent sx={{ padding: '24px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <CustomSelect
                value={currency}
                handleChange={(e) => setCurrency(e.target.value)}
                sx={{ marginBottom: '2rem' }}
                fullWidth={true}
                options={[
                  {
                    value: 'satoshis',
                    text: 'satoshis'
                  },
                  {
                    value: '₽',
                    text: '₽'
                  }
                ]}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomTextField
                variant='standard'
                label='Amount, satoshis, min 1'
                fullWidth
                defaultValue={0}
                sx={{ marginBottom: '2rem' }}
                inputProps={{
                  type: 'number'
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomButton variant='contained' btnColor='dark'>
                MOVE
              </CustomButton>
            </Grid>
          </Grid>
        </CardContent>
      </CustomCard>

      <Box mt={2}>
        <Typography variant='body1' sx={{color: '#4CAF50 !important'}}>
          Advertising balance is used for advertising your links in surfing and autosurfing and for buying referrals at market. It can not be withdrawn.
        </Typography>
      </Box>
    </Layout>
  )
}

export default MoveBalance
