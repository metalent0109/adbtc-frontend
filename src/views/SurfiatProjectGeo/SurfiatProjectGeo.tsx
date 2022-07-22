import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import DoneIcon from '@mui/icons-material/Done';

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'

import { countries } from 'assets/const/countries'

const SurfiatProjectGeo: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='Geotargeting'>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
            If nothing is selected, the ad will be displayed for all GEOs
          </Typography>
          <Grid container>
            {
              countries.map((country) => (
                <Grid item xs={6} sm={4} md={4} lg={3} key={country.value}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked={country.value === 'Armenia'} checkedIcon={<DoneIcon sx={{ color: '#26a69a' }} />} />}
                    label={country.text}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{marginTop: '1rem'}}>
          <CustomButton variant='contained' btnColor='dark' onClick={() => navigate('/surfiat/projects?created=true')}>
            SET
          </CustomButton>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default SurfiatProjectGeo
