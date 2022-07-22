import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import DoneIcon from '@mui/icons-material/Done';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'

import Layout from 'components/Layout'

import styles from 'assets/jss/pages/earnStyles'

const useStyles = makeStyles(styles)

const VideoInf: FC = () => {

  const classes = useStyles()

  const navigate = useNavigate()

  return (
    <Layout title='Video ads'>
      <Box my={3}>
        <Typography variant='body1' sx={{ fontSize: "1.4rem" }}>
          You have watched all the available ads for now.
          Please, come back later, new sites are adding several times a day.
          Users with higher rating have more ads available.
        </Typography>
      </Box>
      <Divider />
      <Box mb={4}>
        <Typography variant='body1' className={classes.totalEarn}>
          <DoneIcon color='success' />
          Today earned: &nbsp;
          <span>0</span>&nbsp;
          ₽
        </Typography>

        <Link
          href='https://adbtc.top/shortlink/'
          onClick={(e) => {
            e.preventDefault();
            navigate('/shortlink')
          }}
        >
          <img src="/images/url.png" alt="" width={64} />
        </Link>
      </Box>
    </Layout>
  )
}

export default VideoInf
