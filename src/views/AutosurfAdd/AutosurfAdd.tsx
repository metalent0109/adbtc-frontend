import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import DoneIcon from '@mui/icons-material/Done';

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'

import Layout from 'components/Layout'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'
import CustomSelect from 'components/CustomSelect'

const AutosurfAdd: FC = () => {

  const navigate = useNavigate()

  const [duration, setDuration] = useState('15')
  const [success, setSuccess] = useState(false)

  return (
    <Layout title='Add url to autosurfing'>
      {
        success ? (
          <Box textAlign='center'>
            <Typography variant='h4' sx={{ fontSize: '2.28rem', margin: '3rem 0 1rem' }} align='center'>
              Your link added
            </Typography>
            <Typography variant='body1' align='center' sx={{ marginBottom: '2rem' }}>
              You can manage this ad from &nbsp;
              <Link component='button' sx={{ fontSize: '16px' }} underline='none' onClick={() => navigate('/autosurf/projects?created=true')}>
                your account
              </Link> &nbsp;
              after we approve it
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant='body1' sx={{ marginBottom: '1.5rem' }}>
              Prices starting at 2 Satoshis per click! <br />
              Each visit will last at least 15 seconds. <br />
              Only unique visits are counted each day.<br />
              No illegal/warez, adult sites or hacks.<br />
              <b>URL should be accessible via iFrame</b>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CustomTextField
                  variant='standard'
                  label='URL'
                  fullWidth
                  placeholder='https://'
                  InputLabelProps={{ shrink: true }}
                  sx={{ marginBottom: '2rem' }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomSelect
                  value={duration}
                  handleChange={(e) => setDuration(e.target.value)}
                  label='View Duration'
                  sx={{ marginBottom: '2rem' }}
                  fullWidth={true}
                  options={[
                    {
                      value: '15',
                      text: '15 seconds'
                    },
                    {
                      value: '30',
                      text: '30 seconds (+1 Satoshis per view)'
                    },
                    {
                      value: '45',
                      text: '45 seconds (+2 Satoshis per view)'
                    },
                    {
                      value: '60',
                      text: '60 seconds (+3 Satoshis per view)'
                    }
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  variant='standard'
                  label='Daily visits (0 means unlimited)'
                  fullWidth
                  defaultValue={0}
                  sx={{ marginBottom: '2rem' }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checkedIcon={<DoneIcon sx={{ color: '#26a69a' }} />} checked />}
                  label="Start after approving"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h4' sx={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  2 satoshis per view
                </Typography>

                <CustomButton variant='contained' btnColor='success' onClick={() => setSuccess(true)}>
                  TEST URL
                </CustomButton>
              </Grid>
            </Grid>
          </>
        )
      }
    </Layout>
  )
}

export default AutosurfAdd
