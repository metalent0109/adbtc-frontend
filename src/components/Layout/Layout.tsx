import React, { FC, useState } from 'react'
import { makeStyles } from "@mui/styles";

import LaptopIcon from '@mui/icons-material/Laptop';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WebIcon from '@mui/icons-material/Web';
import RepeatIcon from '@mui/icons-material/Repeat';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ContactsIcon from '@mui/icons-material/Contacts';
import SettingsIcon from '@mui/icons-material/Settings';
import HttpsIcon from '@mui/icons-material/Https';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import StarIcon from '@mui/icons-material/Star';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

import Footer from 'components/Footer'
import BalanceCard from './components/BalanceCard'
import MenuCollapse from './components/MenuCollapse'
import Sidebar from './components/Sidebar'

import styles from 'assets/jss/components/adminLayoutStyles'

const useStyles = makeStyles(styles)

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout: FC<Props> = (props) => {

  const classes = useStyles()

  const { children, title } = props

  const [open, setOpen] = useState(false)

  const menuList = [
    {
      id: 1,
      title: 'Earn',
      children: [
        {
          title: 'Surf ads',
          link: '/surf/browse',
          icon: <LaptopIcon />
        },
        {
          title: 'Surf ads ₽',
          link: '/surfiat/browse',
          icon: <LaptopIcon />
        },
        {
          title: 'Video ads',
          link: '/video/inf',
          icon: <OndemandVideoIcon />
        },
        {
          title: 'Active window surfing',
          link: '/surftab/inf',
          icon: <WebIcon />
        },
        {
          title: 'Autosurfing',
          link: 'https://adbtc.top/autosurf/session',
          target: '_blank',
          icon: <RepeatIcon />
        },
        {
          title: 'Shortlinks',
          link: '/shortlink',
          icon: <InsertLinkIcon />
        }
      ]
    },
    {
      id: 2,
      children: [
        {
          title: 'Withdraw',
          link: '/acc/balance',
          icon: <CreditCardIcon />
        },
        {
          title: 'Referral system',
          link: '/acc/ref',
          icon: <ContactsIcon />
        },
        {
          title: 'Change Wallet',
          link: '/acc/change_wallet',
          icon: <SettingsIcon />
        },
        {
          title: 'Security',
          link: '/security',
          icon: <HttpsIcon />
        },
      ]
    },
    {
      id: 3,
      title: 'Advertise',
      children: [
        {
          title: 'Surf ads',
          link: '/surf/projects',
          icon: <FormatListBulletedIcon />
        },
        {
          title: 'Surf ads ₽',
          link: '/surfiat/projects/',
          icon: <FormatListBulletedIcon />
        },
        {
          title: 'Video ads',
          link: '/video/projects',
          icon: <OndemandVideoIcon />
        },
        {
          title: 'Active window surfing',
          link: '/surftab/projects',
          icon: <WebIcon />
        },
        {
          title: 'Autosurfing',
          link: '/autosurf/projects',
          icon: <RepeatIcon />
        },
      ]
    },
    {
      id: 4,
      children: [
        {
          title: 'Referral market',
          link: '/market/index',
          icon: <PersonPinIcon />
        },
        {
          title: 'Help',
          link: '/help',
          icon: <HelpOutlineOutlinedIcon />
        },
        {
          title: 'Top surfers',
          link: '/info/top',
          icon: <StarIcon />
        },
        {
          title: 'Account info',
          link: '/info/me',
          icon: <InsertChartIcon />
        },
        {
          title: 'Settings',
          link: '/acc/options',
          icon: <SettingsIcon />
        }
      ]
    },
    {
      id: 5,
      children: [
        {
          title: 'Logout',
          link: '/login',
          icon: <SettingsPowerIcon />
        },
      ]
    }
  ]

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.mobileHeader} alignItems='center'>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant='body1'>
          adBTC
        </Typography>
        <Box ml='auto' mr={2}>
          <Typography variant='body1'>
            Balance: <b>0 satoshis</b>
          </Typography>
        </Box>
      </Box>
      <Container maxWidth={false} sx={{ paddingLeft: '1rem !important', paddingRight: '1rem !important' }}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={4} lg={3} className={classes.hideMobile}>
            <Box>
              <Box className={classes.logoWrapper} my={1}>
                <Typography variant='h6'>
                  ↗ adBTC
                </Typography>
              </Box>

              <BalanceCard showUserId={false} />

              <Box className={classes.logoWrapper} my={1}>
                <Typography variant='body1'>
                  1 BTC = 20295 USD
                </Typography>
              </Box>
              {
                menuList.map((menu) => (
                  <MenuCollapse menu={menu} key={menu.id} />
                ))
              }
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <Grid container spacing={2} className={classes.pcHeader}>
              <Grid item xs={12} md={5} lg={7}>
                <Typography variant='h5'>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} lg={3} className={classes.hideMobile}>
                <Typography variant='body1'>
                  Your id:  <b>2957768</b>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} lg={2} className={classes.hideMobile}>
                <Typography variant='body1'>
                  <Link href='/info/rating'>Rating</Link>
                  :  <b>0.000</b>
                </Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Box className={classes.contents}>
              {children}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
      <Sidebar 
        open={open}
        handleClose={() => setOpen(false)}
        menuList={menuList}
      />
    </Box>
  )
}

export default Layout
