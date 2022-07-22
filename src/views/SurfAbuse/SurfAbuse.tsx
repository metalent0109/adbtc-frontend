import React, { FC } from 'react'

import Box from '@mui/material/Box'

import Layout from 'components/Layout'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'


const SurfAbuse: FC = () => {

  return (
    <Layout title='Report Ad'>
      <Box mb={4}>
        <CustomTextField         
          multiline
          fullWidth
          rows={4}
        />
      </Box>
      <CustomButton variant='contained' btnColor='info'>
        Submit
      </CustomButton>
    </Layout>
  )
}

export default SurfAbuse
