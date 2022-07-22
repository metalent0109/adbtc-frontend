import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import DoneIcon from '@mui/icons-material/Done';

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Layout from 'components/Layout'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'
import CustomSelect from 'components/CustomSelect'

const EditSurfiatProject: FC = () => {

  const navigate = useNavigate()

  const [rating, setRating] = useState('all')
  const [lang, setLang] = useState('all')
  const [device, setDevice] = useState('all')
  const [duration, setDuration] = useState('15')

  const [success, setSuccess] = useState(false)

  return (
    <Layout title='Edit ad'>
      {
        success ? (
          <Box textAlign='center'>
            <Typography variant='h4' sx={{ fontSize: '2.28rem', margin: '3rem 0 1rem' }} align='center'>
              Success
            </Typography>
            <Typography variant='body1' align='center' sx={{ marginBottom: '2rem' }}>
              Ad successfully updated
            </Typography>
            <Link component='button' underline='none' onClick={() => navigate('/surfiat/projects?created=true')}>
              Surf ads
            </Link>
          </Box>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CustomTextField
                variant='standard'
                label='URL'
                fullWidth
                placeholder='https://'
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: '2rem' }}
                defaultValue='https://www.w3schools.com/tags/tag_pre.asp'
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
                    text: '30 seconds (+0.10₽ per view)'
                  },
                  {
                    value: '45',
                    text: '45 seconds (+0.15₽ per view)'
                  },
                  {
                    value: '60',
                    text: '60 seconds (+0.310 per view)'
                  }
                ]}
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
              <Box display='flex' justifyContent='space-between'>
                <CustomButton
                  variant='contained'
                  btnColor='dark'
                  onClick={() => {
                    setSuccess(true)
                  }}
                >
                  Submit
                </CustomButton>

                <CustomButton
                  variant='contained'
                  btnColor='danger'                
                >
                  Archive
                </CustomButton>
              </Box>

            </Grid>
          </Grid >
        )
      }

    </Layout >
  )
}

export default EditSurfiatProject
