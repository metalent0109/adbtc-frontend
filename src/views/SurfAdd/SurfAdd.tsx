import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import DoneIcon from '@mui/icons-material/Done';

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

import Layout from 'components/Layout'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'
import CustomSelect from 'components/CustomSelect'

import { countries } from 'assets/const/countries'

const SurfAdd: FC = () => {

  const navigate = useNavigate()

  const [rating, setRating] = useState('all')
  const [lang, setLang] = useState('all')
  const [device, setDevice] = useState('all')
  const [success, setSuccess] = useState(false)

  return (
    <Layout title='New Surfing Ad'>
      {
        success ? (
          <Box textAlign='center'>
            <Typography variant='h4' sx={{ fontSize: '2.28rem', margin: '3rem 0 1rem' }} align='center'>
              Your link added
            </Typography>
            <Typography variant='body1' align='center' sx={{ marginBottom: '2rem' }}>
              You can manage this ad from &nbsp;
              <Link component='button' sx={{ fontSize: '16px' }} underline='none' onClick={() => navigate('/surf/projects?created=true')}>
                your account
              </Link> &nbsp;
              after we approve it
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant='body1'>
              Prices starting at 4 satoshis per click! <br />
              Each visit duration is at least 15 seconds. <br />
              We will review your website and activate as soon as possible. <br />
              Only unique visits are counted each day. <br />
              No illegal/warez, adult sites or hacks. &nbsp;
              <b>Advertising of websites with viruses is strictly prohibited.</b> <br />
              Note, that Ads with higher price are prior. You can view current prices &nbsp;
              <Link href='/info/price' underline='none'>here</Link>
            </Typography>
            <Divider sx={{ margin: '1rem 0' }} />
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
                  label='Base price (Satoshis / view)'
                  fullWidth
                  defaultValue={4}
                  inputProps={{ type: 'number' }}
                  InputLabelProps={{ shrink: true }}
                  sx={{ marginBottom: '2rem' }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <CustomSelect
                  value={rating}
                  handleChange={(e) => setRating(e.target.value)}
                  label='Minimum rating to view this ad'
                  fullWidth={true}
                  sx={{ marginBottom: '2rem' }}
                  options={[
                    {
                      value: 'all',
                      text: 'Show to all'
                    },
                    {
                      value: '1',
                      text: '1 point and above'
                    },
                    {
                      value: '5',
                      text: '5 point and above'
                    },
                    {
                      value: '10',
                      text: '10 point and above'
                    },
                    {
                      value: '50',
                      text: '50 point and above'
                    },
                    {
                      value: '100',
                      text: '100 point and above'
                    }
                  ]}
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
              <Grid item xs={12} sm={12} md={6}>
                <CustomSelect
                  value={device}
                  handleChange={(e) => setDevice(e.target.value)}
                  label='On which devices will this ad be displayed'
                  fullWidth={true}
                  sx={{ marginBottom: '1rem' }}
                  options={[
                    {
                      value: 'all',
                      text: 'On mobile and desktops'
                    },
                    {
                      value: 'mobile',
                      text: 'Only on mobile devices'
                    },
                    {
                      value: 'desktops',
                      text: 'Only on desktops'
                    }
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Geotargeting <br />
                  If nothing is selected, the ad will be displayed for all GEOs
                </Typography>
                <Grid container>
                  {
                    countries.map((country) => (
                      <Grid item xs={6} sm={4} md={4} lg={3} key={country.value}>
                        <FormControlLabel
                          control={<Checkbox checkedIcon={<DoneIcon sx={{ color: '#26a69a' }} />} />}
                          label={country.text}
                        />
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checkedIcon={<DoneIcon sx={{ color: '#26a69a' }} />} />}
                  label="18 +"
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
                  <b>4</b> Satoshis per view
                </Typography>

                <CustomButton variant='contained' btnColor='dark' onClick={() => setSuccess(true)}>
                  start campaign
                </CustomButton>
              </Grid>
            </Grid>
          </>
        )
      }
    </Layout>
  )
}

export default SurfAdd
