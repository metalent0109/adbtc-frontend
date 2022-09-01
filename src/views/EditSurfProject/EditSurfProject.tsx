import React, { FC, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

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

import useAds from 'hooks/useAds'
import { toast } from 'react-toastify';


const EditSurfProject: FC = () => {

  const { id } = useParams();
  const { ads, isUpdated, getAdById, updateAdvert } = useAds();

  useEffect(() => {
    getAdById(`${id}`);
  }, []);

  useEffect(() => {
    if (!ads) return;
    setUrl(ads.url);
    setDescription(ads.description);
    setBasePrice(ads.basePrice);
    setRating(ads.minRatingToViewAd);
    setDevice(ads.deviceToShowAd);
    setDuration(ads.viewDuration);
    setCountriesInfo(ads.geoTargeting);
    setIsRated18(ads.rated == '18+' ? true : false)
  }, [ads]);
  
  useEffect(() => {
    if(isUpdated) {
      setSuccess(true);
    }
  }, [isUpdated])
  
  const navigate = useNavigate()

  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [basePrice, setBasePrice] = useState<number | string>(4)
  const [rating, setRating] = useState('')
  const [lang, setLang] = useState('all')
  const [device, setDevice] = useState('')
  const [duration, setDuration] = useState('')
  const [success, setSuccess] = useState(false)
  const [isRated18, setIsRated18] = useState(false)
  const [countriesInfo, setCountriesInfo] = useState<any>({
    selectedCountries: [],
    response: [],
  })
  const [errors, setErrors] = useState('')
  const [submitError, setSubmitError] = useState('')

  const handleIsRated18 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setIsRated18(true)
    } else {
      setIsRated18(false)
    }
  }

  const EditAdvert = () => {
    if (
      !url ||
      !description ||
      !basePrice ||
      !duration ||
      !device ||
      !rating
    ) {
      setErrors('Please all fields are required')
      return
    }

    if (
      Number(duration) !== 15 &&
      Number(duration) !== 30 &&
      Number(duration) !== 40 &&
      Number(duration) !== 60
    ) {
      setErrors('please view duration must be either 15, 30, 40 or 60')
      return
    }
    const viewDuration = duration;
    const adsData = {
      url,
      description,
      basePrice,
      viewDuration,
      minRatingToViewAd: rating,
      deviceToShowAd: device,
      geoTargeting: countriesInfo,
      rated: isRated18 ? '18+' : '18-',
    }
    updateAdvert(adsData, `${id}`);
  }

  return (
    ads == null ? 
    <Layout title=''>
    </Layout> : 
    <Layout title='Edit ad'>
    {
      success ? (
        <Box textAlign='center'>
          <Typography variant='h4' sx={{ fontSize: '2.28rem', margin: '3rem 0 1rem' }} align='center'>
            Success
          </Typography>
          <Typography variant='body1' align='center' sx={{marginBottom: '2rem'}}>
            Ad successfully updated
          </Typography>
          <Link component='button' underline='none' onClick={() => navigate('/surf/projects')}>
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
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              sx={{ marginBottom: '2rem' }}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              variant='standard'
              label='Base price (Satoshis / view)'
              fullWidth
              onChange={(e) => setBasePrice(e.target.value)}
              value={basePrice}
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              fullWidth
              sx={{ marginBottom: '2rem' }}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomSelect
              value={lang}
              handleChange={(e) => setLang(e.target.value)}
              label='Language'
              sx={{ marginBottom: '2rem' }}
              fullWidth={true}
              options={[
                {
                  value: 'all',
                  text: 'Show to the entire audience of the project'
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
              control={<Checkbox 
                onChange={handleIsRated18}
                checked={isRated18} 
                checkedIcon={<DoneIcon sx={{ color: '#26a69a' }} />}  />}
              label={ads['rated']}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox checkedIcon={<DoneIcon sx={{ color: '#26a69a' }} />}  checked/>}
              label="Start after approving"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h4' sx={{ fontSize: '2rem', marginBottom: '1rem' }}>
              <b>4</b> Satoshis per view
            </Typography>
            <CustomButton
              variant='contained'
              btnColor='dark'
              onClick={() => {
                EditAdvert()
              }}
            >
              Submit
            </CustomButton>
          </Grid>
        </Grid >
      )
    }
  </Layout >
  )
}

export default EditSurfProject
