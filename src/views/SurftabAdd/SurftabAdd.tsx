import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import DoneIcon from '@mui/icons-material/Done';

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link'
import Box from '@mui/material/Box';

import Layout from 'components/Layout'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'
import CustomSelect from 'components/CustomSelect'
import CheckModal from './components/CheckModal'

const SurftabAdd: FC = () => {

  const navigate = useNavigate()

  const [lang, setLang] = useState('all')
  const [duration, setDuration] = useState('10')

  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  return (
    <Layout title='New active window surfing'>
      {
        success ? (
          <Box textAlign='center'>
            <Typography variant='h4' sx={{ fontSize: '2.28rem', margin: '3rem 0 1rem' }} align='center'>
              Your link added
            </Typography>
            <Typography variant='body1' align='center' sx={{ marginBottom: '2rem' }}>
              You can manage this ad from &nbsp;
              <Link component='button' sx={{ fontSize: '16px' }} underline='none' onClick={() => navigate('/surftab/projects?created=true')}>
                your account
              </Link> &nbsp;
              after we approve it
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant='body1' sx={{ marginBottom: '1.5rem' }}>
              Price starting from 5 Satoshis per click! <br />
              User watching your ad at least 10 seconds.<br />
              Your link should be opened in iFrame.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CustomTextField
                  variant='standard'
                  label='Short description, will be shown to user, 100 symbols max'
                  fullWidth
                  sx={{ marginBottom: '2rem' }}
                />
              </Grid>
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
                      value: '10',
                      text: '10 seconds'
                    },
                    {
                      value: '15',
                      text: '15 seconds (+5 Satoshis per view)'
                    },
                    {
                      value: '30',
                      text: '30 seconds (+15 Satoshis per view)'
                    },
                    {
                      value: '60',
                      text: '60 seconds (+20 Satoshis per view)'
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
              <Grid item xs={12} sm={12} md={6}>
                <CustomSelect
                  value={lang}
                  handleChange={(e) => setLang(e.target.value)}
                  label='Language'
                  sx={{ marginBottom: '2rem' }}
                  fullWidth={true}
                  options={[
                    {
                      value: 'all',
                      text: 'Show to thhe entire audience of the project'
                    },
                    {
                      value: 'russian',
                      text: 'Show only Russian-speaking audience'
                    },
                    {
                      value: 'english',
                      text: 'only show English speakers'
                    },
                    {
                      value: 'hispanic',
                      text: 'Show only to Hispanic audience'
                    }
                  ]}
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
                  5 satoshis per view
                </Typography>

                <CustomButton variant='contained' btnColor='success' onClick={() => setOpen(true)}>
                  TEST URL
                </CustomButton>
              </Grid>
            </Grid>
          </>
        )
      }
      <CheckModal
        open={open}
        handleClose={() => setOpen(false)}
        handleSubmit={() => {
          setOpen(false)
          setSuccess(true)}
        }
      />
    </Layout>
  )
}

export default SurftabAdd
