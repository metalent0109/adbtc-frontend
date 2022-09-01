import React, { FC, useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import useAds from 'hooks/useAds'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import Layout from 'components/Layout'
import CustomSelect from 'components/CustomSelect'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/pages/earnStyles'

const useStyles = makeStyles(styles)

interface Props {
  ads: any
}

const SurfBrowse: FC<Props> = (props) => {
  const { getAllAdvert, surfAdvert } = useAds();

  const navigate = useNavigate()
  const classes = useStyles()

  const [typeValue, setTypeValue] = useState('surfing for satoshis')
  const [captcha, setCaptcha] = useState('Mathematical expression')

  return (
    <Layout
      title={'The mathematicаl expression result'}
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
                  onClick={() => {navigate(`/surf/browse/${props.ads._id}`)}}
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
    </Layout>
  )
}

export default SurfBrowse
