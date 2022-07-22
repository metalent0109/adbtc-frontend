import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'

import Layout from 'components/Layout'

const SurfProjectDetail: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='Last 24 hours ad statistics'>
      <Box mt={4}>
        <Typography variant='body1'>
          https://www.w3schools.com/tags/tag_pre.asp <br /><br />
          test dd
        </Typography>
      </Box>
      <Divider sx={{ margin: '1rem 0' }} />
      <Box>
        <Typography variant='body1'>
          Now: 0 <br /><br />
          Views today: 0 (0)<br /><br />
          <Link component='button' underline='none' sx={{ fontSize: '15px' }} onClick={() => navigate('/surf/limit')}>
            Limit views
          </Link>
        </Typography>
      </Box>
      <Divider sx={{ margin: '1rem 0' }} />
      <Typography variant='body1'>
        Total: 0 <br /> <br />
        We have no statistics for this ad
      </Typography>
    </Layout>
  )
}

export default SurfProjectDetail
