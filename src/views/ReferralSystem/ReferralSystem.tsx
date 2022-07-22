import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link'
import Collapse from '@mui/material/Collapse';
import CardActions from '@mui/material/CardActions';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/pages/referralSystemStyles'

const useStyles = makeStyles(styles)

const ReferralSystem: FC = () => {

  const classes = useStyles()
  const navigate = useNavigate()
  
  const [expanded, setExpanded] = useState(true)

  return (
    <Layout title='Referral system'>
      <Box mt={2}>
        <Typography variant='body1' align='center' sx={{ fontSize: '15px' }}>
          Share this link and earn <br />
          10% from you referral surfing earnings <br />
          <b>5% from your referral advertisement spendings</b>
        </Typography>

        <Typography variant='h3' align='center' sx={{ fontSize: '2.9rem', margin: '2rem 0 1rem', wordBreak: 'break-all' }}>
          https://r.adbtc.top/2957768
        </Typography>

        <Box display='flex' justifyContent='center' mb={2}>
          <Link
            href='https://vk.com/share.php?url=https%3A%2F%2Fr.adbtc.top%2F2957768&title=I%20earn%20bitcoins%20here&utm_source=share2'
            sx={{ backgroundColor: '#07f', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', borderRadius: '4px', marginRight: '4px' }}
          >
            <img
              width={24}
              height={24}
              src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.878 17.304c-5.411 0-8.695-3.755-8.823-9.994h2.74c.086 4.583 2.171 6.528 3.77 6.925V7.31h2.627v3.954c1.542-.17 3.155-1.97 3.698-3.954h2.584c-.414 2.441-2.17 4.24-3.412 4.983 1.242.6 3.24 2.17 4.011 5.01h-2.84c-.6-1.898-2.07-3.369-4.04-3.569v3.57h-.315Z' fill='%23fff'/%3E%3C/svg%3E"
              alt=""
            />
          </Link>
          <Link
            href='https://connect.ok.ru/offer?url=https%3A%2F%2Fr.adbtc.top%2F2957768&title=I%20earn%20bitcoins%20here&utm_source=share2'
            sx={{ backgroundColor: '#eb722e', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', borderRadius: '4px', marginRight: '4px' }}
          >
            <img
              width={24}
              height={24}
              src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.674 6.536a1.69 1.69 0 00-1.688 1.688c0 .93.757 1.687 1.688 1.687a1.69 1.69 0 001.688-1.687 1.69 1.69 0 00-1.688-1.688zm0 5.763a4.08 4.08 0 01-4.076-4.075 4.08 4.08 0 014.076-4.077 4.08 4.08 0 014.077 4.077 4.08 4.08 0 01-4.077 4.075zm-1.649 3.325a7.633 7.633 0 01-2.367-.98 1.194 1.194 0 011.272-2.022 5.175 5.175 0 005.489 0 1.194 1.194 0 111.272 2.022 7.647 7.647 0 01-2.367.98l2.279 2.28a1.194 1.194 0 01-1.69 1.688l-2.238-2.24-2.24 2.24a1.193 1.193 0 11-1.689-1.689l2.279-2.279' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
              alt=""
            />
          </Link>
          <Link
            href='https://twitter.com/intent/tweet?text=I%20earn%20bitcoins%20here&url=https%3A%2F%2Fr.adbtc.top%2F2957768&utm_source=share2'
            sx={{ backgroundColor: '#00aced', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', borderRadius: '4px' }}
          >
            <img
              width={24}
              height={24}
              src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 7.539a6.56 6.56 0 01-1.885.517 3.294 3.294 0 001.443-1.816 6.575 6.575 0 01-2.085.796 3.283 3.283 0 00-5.593 2.994A9.32 9.32 0 015.114 6.6a3.28 3.28 0 001.016 4.382 3.274 3.274 0 01-1.487-.41v.041a3.285 3.285 0 002.633 3.218 3.305 3.305 0 01-1.482.056 3.286 3.286 0 003.066 2.28A6.585 6.585 0 014 17.524 9.291 9.291 0 009.032 19c6.038 0 9.34-5 9.34-9.337 0-.143-.004-.285-.01-.425A6.672 6.672 0 0020 7.538z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E"
              alt=""
            />
          </Link>
        </Box>

        <Typography variant='body1' align='center' sx={{ fontSize: '15px', marginBottom: '1rem' }}>
          It is forbidden to place the referral link in invisible frames, etc., the window with the adBTC site should be visible.
        </Typography>
        <Typography variant='h5' align='center' sx={{ fontSize: '1.64rem' }}>
          Reflink hits:: 0 (0 satoshis)
        </Typography>

        <Card className={classes.bannerCard}>
          <CardContent>
            <Box className={classes.cardHeader}>
              <Typography variant='body1' sx={{ fontWeight: '500' }} onClick={() => setExpanded(!expanded)}>
                Banners
              </Typography>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box p={3} sx={{ borderTop: '1px solid #eee' }}>
                <Card className={classes.childCard}>
                  <CardContent sx={{ padding: '24px', textAlign: 'center' }}>
                    <img src="https://adbtc.top/promo/banner_728x90.png" alt="" />
                  </CardContent>
                  <CardActions>
                    <Box className={classes.banner}>
                      <pre>
                        {
                          `<a href="https://ref.adbtc.top/2957768" target="_blank" border="0"><img src="https://adbtc.top/promo/banner_728x90.png" /></a>`
                        }
                      </pre>
                    </Box>
                  </CardActions>
                </Card>

                <Card className={classes.childCard}>
                  <CardContent sx={{ padding: '24px', textAlign: 'center' }}>
                    <img src="https://adbtc.top/promo/banner_468x60.jpg" alt="" />
                  </CardContent>
                  <CardActions>
                    <Box className={classes.banner}>
                      <pre>
                        {
                          `<a href="https://ref.adbtc.top/2957768" target="_blank" border="0"><img src="https://adbtc.top/promo/banner_468x60.jpg"/></a>`
                        }
                      </pre>
                    </Box>
                  </CardActions>
                </Card>

                <Card className={classes.childCard}>
                  <CardContent sx={{ padding: '24px', textAlign: 'center' }}>
                    <img src="https://adbtc.top/promo/banner_250x250.png" alt="" />
                  </CardContent>
                  <CardActions>
                    <Box className={classes.banner}>
                      <pre>
                        {
                          `<a href="https://ref.adbtc.top/2957768" target="_blank" border="0"><img src="https://adbtc.top/promo/banner_250x250.png"/></a>`
                        }
                      </pre>
                    </Box>
                  </CardActions>
                </Card>

                <Card className={classes.childCard}>
                  <CardContent sx={{ padding: '24px', textAlign: 'center' }}>
                    <img src="https://adbtc.top/promo/banner_728x90_2.png" alt="" />
                  </CardContent>
                  <CardActions>
                    <Box className={classes.banner}>
                      <pre>
                        {
                          `<a href="https://ref.adbtc.top/2957768" target="_blank" border="0"><img src="https://adbtc.top/promo/banner_728x90_2.png"/></a>`
                        }
                      </pre>
                    </Box>
                  </CardActions>
                </Card>
              </Box>
            </Collapse>
          </CardContent>
        </Card>


        <Typography variant='h5' align='center' sx={{ fontSize: '1.64rem', margin: '1rem 0 0.6rem' }}>
          You have 0 referrals
        </Typography>
        <Box textAlign='center'>
          <CustomButton variant='contained' btnColor='primary' onClick={() => navigate('/market/index')}>
            buy referrals
          </CustomButton>
        </Box>
      </Box>
    </Layout>
  )
}

export default ReferralSystem

