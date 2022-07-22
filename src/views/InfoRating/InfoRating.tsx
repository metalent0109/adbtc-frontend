import React, { FC } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import Layout from 'components/Layout'

const InfoRating: FC = () => {

  return (
    <Layout title='How is the rating calculated'>
      <Box sx={{ margin: '20px 0' }}>
        <Typography variant='body1' sx={{ fontSize: '1.4rem' }}>
          For every earned 10,000 satoshis/100₽ in surfing + 1 point <br />
          For every earned 5,000 satoshis in autosurfing + 1 point <br />
          <br />
          For every 10,000 satoshis/100₽ spent on advertisement + 1 point<br />
          <br />
          For every 10,000 satoshis spent by your referrals on advertisement + 1 point<br />
          For every referral bought on market + 0.1 point<br />
          <br />
          Lack of activity on the site for 7 days <span style={{ color: "red" }}>-1 point</span><br />
          <br />
          Points are awarded evenly, in proportion to income. For example, after viewing a surfing ad for the price of 100 Satoshi, you get +0.01 to the rating.
        </Typography>
      </Box>
      <Typography variant='body1'>
        Advertisers can filter visitors in surfing by rating, for example, you can display a link only to users with a rating of 1 or higher.
        <br /><br />
        Advertisers with a rating above 100 are given a discount on surfing (the minimum cost per ad is reduced to 3 Satoshi)
      </Typography>
    </Layout>
  )
}

export default InfoRating
