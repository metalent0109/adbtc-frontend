import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Layout from 'components/Layout'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'

const VideoProjectLimit: FC = () => {

  const navigate = useNavigate()

  const [success, setSuccess] = useState(false)

  return (
    <Layout title='Limit views'>
      {
        success ? (
          <Box textAlign='center'>
            <Typography variant='h4' sx={{ fontSize: '2.28rem', margin: '3rem 0 1rem' }} align='center'>
              Success
            </Typography>
            <Typography variant='body1' align='center' sx={{ marginBottom: '2rem' }}>
              Limit set!
            </Typography>
            <Link component='button' underline='none' onClick={() => navigate('/video/projects?created=true')}>
              Video ads
            </Link>
          </Box>
        ) : (
          <Box mt={2}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant='body1' sx={{ marginBottom: '1.5rem' }}>
                  Daily limit: Off *
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <CustomTextField
                  variant='standard'
                  label='Daily visits (0 means unlimited)'
                  fullWidth
                  sx={{ marginBottom: '2rem' }}
                  defaultValue={0}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton variant='contained' btnColor='dark' onClick={() => setSuccess(true)}>
                  Set
                </CustomButton>
                <Typography variant='body1' sx={{ marginTop: '1.5rem' }}>
                  * This is not affect that users now watching your ad.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )
      }

    </Layout>
  )
}

export default VideoProjectLimit
