import React, { FC } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider';

import Layout from 'components/Layout'

const InfoRub: FC = () => {

  return (
    <Layout title='adBTC'>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        ₽ (Russian ruble) — is the currency of the Russian Federation &nbsp;
        <Link href='https://en.wikipedia.org/wiki/Russian_ruble' underline='none' sx={{ color: '#9e9e9e !important' }} target='_blank'>
          (Wiki)
        </Link>
      </Typography>

      <Typography variant='body1'>
        Current exchange rate : <br />
        1 ₽ = 0.015837143486104 USD <br />
        1 ₽ = 0.01559213470357 EUR
      </Typography>

      <Divider sx={{ margin: '1rem 0' }} />

      <Typography variant='body1'>
        The minimum surfing price in ₽ for an advertiser is 0.05 ₽, which equals 0.00079185717430519 USD or 0.00077960673517851 EUR.<br />
        A Payeer wallet is used to top-up an account in ₽ (it is replenished with many world currencies).
      </Typography>

      <Divider sx={{ margin: '1rem 0' }} />
      <Typography variant='body1'>
        The minimum withdrawal amount is 1 ₽ = 0.015837143486104 USD or 0.01559213470357 EUR <br />
        The withdrawal is carried out to the Payeer wallet, where you can exchange rubles for the currency you are interested in (fiat or crypto) and withdraw to your wallet. <br />
        You cannot exchange Satoshi for ₽ on the website. Please use the Payeer service for exchange. <br />
      </Typography>

      <Box mt={3}>
        <img src="/images/russian-ruble.png" alt="" width={320} />
      </Box>      
    </Layout>
  )
}

export default InfoRub
