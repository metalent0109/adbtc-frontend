import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

import Layout from 'components/Layout'
import CustomTextField from 'components/CustomTextField';
import CustomButton from 'components/CustomButton';

const SurftabTopup: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='adBTC'>
      <Typography variant='h4' sx={{ fontSize: '2.28rem', margin: '1rem 0 0.6rem 0' }}>
        Deposit
      </Typography>
      <Box my={4}>
        <CustomTextField
          variant='standard'
          label='Amount, ₽ (min 1 ₽)'
          fullWidth
          defaultValue={4}
          inputProps={{ type: 'number' }}
        />
      </Box>
      <CustomButton variant='contained' btnColor='info' onClick={() => navigate('/surftab/projects?created=true')}>
        Submit
      </CustomButton>
    </Layout>
  )
}

export default SurftabTopup
