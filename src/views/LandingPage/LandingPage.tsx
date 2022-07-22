import React, { VFC } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

import HomeNavbar from 'components/HomeNavbar'
import Header from './components/Header'
import Services from './components/Services'
import MiddleDescription from './components/MiddleDescription'
import DepositsTable from './components/DepositsTable'
import WithdrawalsTable from './components/WithdrawalsTable'
import Footer from 'components/Footer'

const LandingPage: VFC = () => {

  return (
    <Box>
      <HomeNavbar showLinks={true} />
      <Header />
      <Services />
      <MiddleDescription />
      <Box py={3}>
        <Container maxWidth='xl'>
          <Box maxWidth={1280} mx='auto'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6}>
                <DepositsTable />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <WithdrawalsTable />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default LandingPage
