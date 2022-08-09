import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'redux/store'
import { makeStyles } from '@mui/styles'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import Layout from 'components/Layout'
import CustomSelect from 'components/CustomSelect'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/pages/earnStyles'
import { getAllAdvert, surfAdvert } from 'redux/reducers/adsSlice'
import { getAUser } from 'redux/reducers/authSlice'

const useStyles = makeStyles(styles)

interface Props {
  setTimer: any
}


const SurfBrowse: FC<Props> = (props) => {
  const { ads } = useSelector((state: RootState) => state.ads)
  // const { ads } = useSelector((state: RootState) => state.ads)
  const { setTimer } = props
  if (ads !== (undefined || null)) {
    console.log('The ads', ads)
    // console.log('The ads url', ads.url)
  }
  const classes = useStyles()

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const [step, setStep] = useState(0)
  const [typeValue, setTypeValue] = useState('surfing for satoshis')
  const [captcha, setCaptcha] = useState('Mathematical expression')

  useEffect(() => {
    dispatch(getAllAdvert())
  }, [dispatch])

  const skipAds = () => {
    dispatch(getAllAdvert())
  }

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const surfAdverts = () => {
    if (ads !== (undefined || null)) {
      dispatch(surfAdvert("www.someurl.com"))
    }
    var currentDate = new Date();
        var timeToSurf = currentDate.setSeconds(
          currentDate.getSeconds() + ads.viewDuration
        );
        var deadline = new Date(timeToSurf).getTime();
        var x = setInterval(function() {
          var now = new Date().getTime();
          var t = deadline - now;
          var seconds = Math.floor(t % (1000 * 60) / 1000);
          setTimer(seconds)
          console.log(`${seconds}s`);
          if (t < 0) {
            clearInterval(x);
            dispatch(getAUser())
            console.log("time elapsed");
            
          }
        }, 1000)
  }

  return (
    <Layout
      title={
        step === 0
          ? 'The mathematicаl expression result'
          : 'Get Bitcoin for viewing websites'
      }
    >
      {step === 0 ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <Box mb={4}>
              <CustomSelect
                value={typeValue}
                handleChange={(e) => setTypeValue(e.target.value)}
                label="Type"
                fullWidth={true}
                options={[
                  {
                    value: 'surfing for satoshis',
                    text: 'surfing for satoshis',
                  },
                  {
                    value: 'surfing for ₽',
                    text: 'surfing for ₽',
                  },
                ]}
              />
            </Box>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={12} md={9} lg={7}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <Box mb={4}>
                  <CustomSelect
                    value={captcha}
                    handleChange={(e) => setCaptcha(e.target.value)}
                    label=""
                    fullWidth={true}
                    options={[
                      {
                        value: 'reCaptcha',
                        text: 'reCaptcha',
                      },
                      {
                        value: 'hCaptcha',
                        text: 'hCaptcha',
                      },
                      {
                        value: 'Mathematical expression',
                        text: 'Mathematical expression',
                      },
                    ]}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={9}>
                <Box mb={2}>
                  <img
                    src="https://adbtc.top/1captcha/1657022566.8423.jpg"
                    alt=""
                    width={160}
                    height={100}
                  />
                  <img
                    src="https://adbtc.top/1captcha/1657022566.8628.jpg"
                    alt=""
                    width={160}
                    height={145}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={8}>
                <Box mb={4}>
                  <CustomTextField
                    variant="standard"
                    label="The mathematical expression result"
                    fullWidth
                  />
                </Box>

                <Box mb={4}>
                  <CustomButton
                    variant="contained"
                    btnColor="secondary"
                    onClick={() => setStep(1)}
                  >
                    Submit
                  </CustomButton>
                </Box>

                <Box>
                  <Typography variant="body1">
                    <Link
                      underline="none"
                      href="https://neon.today/native/click/9038/54763/1567/2744664994?ref=aHR0cHM6Ly9hZGJ0Yy50b3Avc3VyZi9icm93c2UvMjk1Nzc2OA=="
                      target="_blank"
                    >
                      <b>Крипто монета KaratBankStore</b>
                    </Link>
                    <br />
                    Крипто монета торгуется на бирже Mintme.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={5}>
            <Box className={classes.surfBrowseFrame} mb={2}>
              <iframe
                scrolling="no"
                src="https://neon.today/context/get/9038/199/1/200/300"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <Box mb={4}>
              <CustomSelect
                value={typeValue}
                handleChange={(e) => setTypeValue(e.target.value)}
                label="Type"
                fullWidth={true}
                options={[
                  {
                    value: 'surfing for satoshis',
                    text: 'surfing for satoshis',
                  },
                  {
                    value: 'surfing for ₽',
                    text: 'surfing for ₽',
                  },
                ]}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              When you press start the new page will be opened. Please, don't
              close it until timer is ticking. You will get a reward after time
              will gone.
            </Typography>

            <Box sx={{ border: '1px solid #ddd' }} p={2}>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Will be opened:
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: '1rem', fontSize: '1.4rem' }}
              >
                {ads && ads.description}
              </Typography>
              <CustomButton
                variant="contained"
                btnColor="danger"
                sx={{
                  marginTop: '.2rem',
                  marginBottom: '0.9rem'
                }}
              >
                {ads && ads.rated}
              </CustomButton>
              <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
                Price: <b>{ads && ads.basePrice} satoshis</b>
              </Typography>

              <Link
                component="button"
                underline="none"
                onClick={() => navigate('/surf/abuse')}
              >
                Report Ad
              </Link>
              <Typography variant="body1" sx={{ marginTop: '1.5rem' }}>
                <b>You closed page</b>
                <br />
                The advertised site must remain open for a reward to be credited
              </Typography>
              <CustomButton
                variant="contained"
                btnColor="secondary"
                sx={{ marginTop: '1.5rem' }}
                onClick={skipAds}
              >
                Skip
              </CustomButton>
              <br />
              <br />
              <CustomButton
                variant="contained"
                btnColor="gray"
                sx={{ marginTop: '1.5rem', marginLeft: "auto" }}
                onClick={() => {surfAdverts(); openInNewTab("www.someurl.com")}}
              >
                Open
              </CustomButton>
            </Box>
            <Typography variant="body1" sx={{ marginTop: '1.5rem' }}>
              Today earned: 0 satoshis
            </Typography>

            <Box
              sx={{
                height: '90px',
                border: '1px solid grey',
                width: '100%',
                maxWidth: '728px',
              }}
              mt={4}
            >
              <iframe
                src="https://neon.today/context/get/9038/1009/1/728/90"
                style={{ width: '100%', height: '100%', border: '0' }}
              ></iframe>
            </Box>

            <Typography
              variant="body1"
              sx={{ marginTop: '1.5rem', color: '#9e9e9e !important' }}
            >
              Sponsored links to any site / product / service / any commercial
              or non-commercial information posted on the site is not an
              endorsement or recommendation of these products or services by the
              administration.
            </Typography>
          </Grid>
        </Grid>
      )}
    </Layout>
  )
}

export default SurfBrowse
