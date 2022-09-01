import React, { FC, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import Layout from 'components/Layout'
import CustomSelect from 'components/CustomSelect'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/pages/earnStyles'
import useAds from 'hooks/useAds'
import  useAuth  from 'hooks/useAuth'
import { toast } from 'react-toastify'

const useStyles = makeStyles(styles)

const SurfBrowseDetail: FC = () => {
  const classes = useStyles();
  
  const navigate = useNavigate()
  
  const { id } = useParams()
  const { ads, getAdById, getAllAdvert, surfAdvert } = useAds()
  const { getAUser, updateSurfingBalance, surfSuccess, isError, message } = useAuth()

  const [isLoading, setIsLoading] = useState(false);
  const [typeValue, setTypeValue] = useState('surfing for satoshis')
  const [captcha, setCaptcha] = useState('Mathematical expression')
  const [isClosed, setIsClosed] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  const openInNewTab = (url: string) => {
    setIsOpened(true);
    const newWindow = window.open(url)
    let timer = 0
    // interval call every second
    const interval = setInterval(() => {
      timer = timer + 1
      const remainingTime = ads.viewDuration - timer
      document.title = `${remainingTime}s has left. DON'T CLOSE THE TAB.`
      if(newWindow?.closed == true) {
        setIsOpened(false)
        setIsClosed(true)
        clearInterval(interval)
        document.title = 'You closed page'
        setTimeout(() => {
          document.title = 'BTC-ADS'
        }, 3000)
      }
      if(timer > ads.viewDuration) {
        document.title = 'Checking the view'
        setIsOpened(false)
        updateSurfingBalance(ads.basePrice, `${ads._id}`)
        clearInterval(interval)
      }
    }, 1000)
  }

  const skipAds = () => {
    getAllAdvert()
  }

  const skipAdsAfterClosed = () => {
    getAllAdvert()
    setIsClosed(false)
  }

  useEffect(() => {
    getAdById(`${id}`)
  }, []);

  useEffect(() => {
    if(!ads) return;
    setIsLoading(true);
    navigate(`/surf/browse/${ads._id}`)
  }, [navigate, ads])

  useEffect(() => {
    if(isError) {
      toast.error(message)
      document.title = 'BTC-ADS'
    }
  }, [navigate, isError, message])

  useEffect(() => {
    if(surfSuccess) {
      document.title = 'Excellent! '
      navigate('/surf/browse')
      document.title = 'BTC-ADS'
    }
  }, [navigate, surfSuccess])

  return (
    isLoading ? 
    <Layout
      title={'Get Bitcoin for viewing websites'}
    >
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
            {/* <CustomButton
              variant="contained"
              btnColor="danger"
              sx={{
                marginTop: '.2rem',
                marginBottom: '0.9rem'
              }}
            >
              {ad && ads.rated}
            </CustomButton> */}
            <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
              Price: <b>{ads && ads.basePrice} satoshis</b>
            </Typography>
            {
              isClosed ?
              <Link
                component="button"
                underline="none"
                onClick={() => navigate('/surf/abuse')}
              >
                Report Ad
              </Link> : 
              <Link onClick={() => {
                skipAds()
              }} 
                  underline="none"
                  style={{cursor: "pointer"}}
              >
                  Skip
              </Link>
            }
            <br />
            {
              isClosed ?
              <Typography variant="body1" sx={{ marginTop: '1.5rem' }}>
                <b>You closed page</b>
                <br />
                The advertised site must remain open for a reward to be credited
              </Typography> : ''
            }
            <br />
            <br />
            {
              isClosed ?
              <CustomButton
                variant="contained"
                btnColor="secondary"
                sx={{ marginTop: '1.5rem' }}
                onClick={() => {
                  skipAdsAfterClosed();
                }}
              >
                Skip
              </CustomButton>: 
              !isOpened ?
              <CustomButton
                variant="contained"
                btnColor="gray"
                sx={{ marginTop: '1.5rem', marginLeft: "auto" }}
                onClick={() => {openInNewTab(ads.url)}}
              >
                Open
              </CustomButton> : 
              <Box sx={{ marginTop: '2.5rem', marginLeft: "20rem" }} >
                <CircularProgress size={100} />
                <div>
                  Loading...
                </div>
              </Box>
            }
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
    </Layout> :
    <Layout title=''>
    </Layout>
  )
}

export default SurfBrowseDetail
