import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'redux/store'

import DoneIcon from '@mui/icons-material/Done'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'

import Layout from 'components/Layout'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'
import CustomSelect from 'components/CustomSelect'

import { countries } from 'assets/const/countries'
import { createAd, reset } from 'redux/reducers/adsSlice'

const SurfAdd: FC = (props) => {
  const { isCreated, isError, message } = useSelector(
    (state: RootState) => state.ads,
  )
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [url, setUrl] = useState('https://')
  const [description, setDescription] = useState('')
  const [basePrice, setBasePrice] = useState<number | string>(4)
  const [rating, setRating] = useState('all')
  const [lang, setLang] = useState('all')
  const [device, setDevice] = useState('all')
  const [viewDuration, setViewDuration] = useState<number | string>(15)
  const [success, setSuccess] = useState(false)
  const [isRated18, setIsRated18] = useState(false)
  const [countriesInfo, setCountriesInfo] = useState<any>({
    selectedCountries: [],
    response: [],
  })
  const [errors, setErrors] = useState('')
  const [submitError, setSubmitError] = useState('')

  const handleCountriesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, checked } = event.target
    const { selectedCountries } = countriesInfo

    if (checked) {
      setCountriesInfo({
        selectedCountries: [...selectedCountries, value],
        response: [...selectedCountries, value],
      })
    } else {
      setCountriesInfo({
        selectedCountries: selectedCountries.filter(
          (event: any) => event !== value,
        ),
        response: selectedCountries.filter((event: any) => event !== value),
      })
    }
  }

  const handleIsRated18 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target

    if (checked) {
      setIsRated18(true)
    } else {
      setIsRated18(false)
    }
  }

  const createAdvert = () => {
    if (
      !url ||
      !description ||
      !basePrice ||
      !viewDuration ||
      !device ||
      !countriesInfo.response ||
      !rating
    ) {
      setErrors('Please all fields are required')
      return
    }

    if (
      Number(viewDuration) !== 15 &&
      Number(viewDuration) !== 30 &&
      Number(viewDuration) !== 40 &&
      Number(viewDuration) !== 60
    ) {
      setErrors('please view duration must be either 15, 30, 40 or 60')
      return
    }
    const adsData = {
      url,
      description,
      basePrice,
      viewDuration,
      minRatingToViewAd: rating,
      deviceToShowAd: device,
      geoTargeting: countriesInfo.selectedCountries,
      rated: isRated18 ? '18+' : '18-',
    }

    dispatch(createAd(adsData))
  }

  useEffect(() => {
    if (isError) {
      setSubmitError(message.error)
      return
    }

    if (isCreated) {
      setSuccess(true)
    }

    dispatch(reset())
  }, [isCreated, isError, message, dispatch])

  return (
    <Layout title="New Surfing Ad">
      {success ? (
        <Box textAlign="center">
          <Typography
            variant="h4"
            sx={{ fontSize: '2.28rem', margin: '3rem 0 1rem' }}
            align="center"
          >
            Your link added
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ marginBottom: '2rem' }}
          >
            You can manage this ad from &nbsp;
            <Link
              component="button"
              sx={{ fontSize: '16px' }}
              underline="none"
              onClick={() => navigate('/surf/projects?created=true')}
            >
              your account
            </Link>{' '}
            &nbsp; after we approve it
          </Typography>
        </Box>
      ) : (
        <>
          <Typography variant="body1">
            Prices starting at 4 satoshis per click! <br />
            Each visit duration is at least 15 seconds. <br />
            We will review your website and activate as soon as possible. <br />
            Only unique visits are counted each day. <br />
            No illegal/warez, adult sites or hacks. &nbsp;
            <b>
              Advertising of websites with viruses is strictly prohibited.
            </b>{' '}
            <br />
            Note, that Ads with higher price are prior. You can view current
            prices &nbsp;
            <Link href="/info/price" underline="none">
              here
            </Link>
          </Typography>
          <Divider sx={{ margin: '1rem 0' }} />
          <Grid container spacing={3}>
            <Box mb={2} mt={2}>
              {submitError && (
                <span
                  style={{
                    color: 'red',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  {submitError}
                </span>
              )}
            </Box>
            <Box mb={2} mt={2}>
              {errors && (
                <span
                  style={{
                    color: 'red',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    marginTop: '10px',
                    marginLeft: '20px',
                  }}
                >
                  {errors}
                </span>
              )}
            </Box>
            <Grid item xs={12}>
              <CustomTextField
                variant="standard"
                label="URL"
                fullWidth
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                placeholder="https://"
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: '2rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                variant="standard"
                label="View Duration"
                fullWidth
                onChange={(e) => setViewDuration(e.target.value)}
                value={viewDuration}
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: '2rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                variant="standard"
                label="Short description, will be shown to user, 100 symbols max"
                name={`description`}
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                sx={{ marginBottom: '2rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                variant="standard"
                label="Base price (Satoshis / view)"
                fullWidth
                onChange={(e) => setBasePrice(e.target.value)}
                value={basePrice}
                inputProps={{ type: 'number' }}
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: '2rem' }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomSelect
                value={rating}
                handleChange={(e) => setRating(e.target.value)}
                label="Minimum rating to view this ad"
                fullWidth={true}
                sx={{ marginBottom: '2rem' }}
                options={[
                  {
                    value: 'all',
                    text: 'Show to all',
                  },
                  {
                    value: '1',
                    text: '1 point and above',
                  },
                  {
                    value: '5',
                    text: '5 point and above',
                  },
                  {
                    value: '10',
                    text: '10 point and above',
                  },
                  {
                    value: '50',
                    text: '50 point and above',
                  },
                  {
                    value: '100',
                    text: '100 point and above',
                  },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomSelect
                value={lang}
                handleChange={(e) => setLang(e.target.value)}
                label="Language"
                sx={{ marginBottom: '2rem' }}
                fullWidth={true}
                options={[
                  {
                    value: 'all',
                    text: 'Show to thhe entire audience of the project',
                  },
                  {
                    value: 'russian',
                    text: 'Show only Russian-speaking audience',
                  },
                  {
                    value: 'english',
                    text: 'only show English speakers',
                  },
                  {
                    value: 'hispanic',
                    text: 'Show only to Hispanic audience',
                  },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <CustomSelect
                value={device}
                handleChange={(e) => setDevice(e.target.value)}
                label="On which devices will this ad be displayed"
                fullWidth={true}
                sx={{ marginBottom: '1rem' }}
                options={[
                  {
                    value: 'all',
                    text: 'On mobile and desktops',
                  },
                  {
                    value: 'mobile',
                    text: 'Only on mobile devices',
                  },
                  {
                    value: 'desktops',
                    text: 'Only on desktops',
                  },
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Geotargeting <br />
                If nothing is selected, the ad will be displayed for all GEOs
              </Typography>
              <Grid container>
                {countries.map((country) => (
                  <Grid item xs={6} sm={4} md={4} lg={3} key={country.value}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleCountriesChange}
                          value={country.text}
                          checkedIcon={<DoneIcon sx={{ color: '#26a69a' }} />}
                        />
                      }
                      label={country.text}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleIsRated18}
                    value={isRated18}
                    checkedIcon={<DoneIcon sx={{ color: '#26a69a' }} />}
                  />
                }
                label="18 +"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checkedIcon={<DoneIcon sx={{ color: '#26a69a' }} />}
                    checked
                  />
                }
                label="Start after approving"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{ fontSize: '2rem', marginBottom: '1rem' }}
              >
                <b>4</b> Satoshis per view
              </Typography>

              <CustomButton
                variant="contained"
                btnColor="dark"
                onClick={createAdvert}
              >
                start campaign
              </CustomButton>
            </Grid>
          </Grid>
        </>
      )}
    </Layout>
  )
}

export default SurfAdd
