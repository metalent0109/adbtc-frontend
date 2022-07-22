import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import { CustomCard } from 'components/CustomCard/CustomCard'

const Withdraw: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='Balance'>
      <Link href='/' underline='none' sx={{ color: '#039be5' }}>
        Withdraw ₽
      </Link>
      <CustomCard sx={{ marginTop: '1rem' }}>
        <CardContent sx={{ padding: '1.5rem' }}>
          <Typography variant='body1'>
            Since October 2020, commissions on the Bitcoin network have increased by about 5 times and it has become very unprofitable to withdraw small amounts. Sometimes, the commission for the payment could be more than the amount sent itself.
            While the Bitcoin network maintains high sending fees, we are raising the minimum amount for withdrawing to Bitcoin wallets.
            Please use alternative withdrawal methods - FaucetPay and ExpressCrypto if you want to receive funds faster.
          </Typography>
        </CardContent>
      </CustomCard>

      <Typography variant='body1' sx={{ fontSize: '1.4rem', margin: '1rem 0' }}>
        BTC Address:&nbsp;
        <Link
          href='/'
          underline='none'
          sx={{ color: '#039be5' }}
          onClick={(e) => {
            e.preventDefault();
            navigate('/acc/send_code')
          }}
        >
          (Change)
        </Link>
      </Typography>

      <Typography variant='body1' sx={{ fontSize: '1.4rem', margin: '1rem 0' }}>
        FaucetPay: Not set &nbsp;
        <Link
          href='/'
          underline='none'
          sx={{ color: '#039be5' }}
          onClick={(e) => {
            e.preventDefault();
            navigate('/acc/code_fh')
          }}
        >
          (Change)
        </Link>
      </Typography>

      <Typography variant='body1' sx={{ fontSize: '1.4rem', margin: '1rem 0' }}>
        Payeer: Not set &nbsp;
        <Link
          href='/'
          underline='none'
          sx={{ color: '#039be5' }}
          onClick={(e) => {
            e.preventDefault();
            navigate('/acc/send_code_payeer')
          }}
        >
          (Change)
        </Link>
      </Typography>

      <Typography variant='body1' sx={{ fontSize: '1.4rem', margin: '1rem 0' }}>
        WBTC (Polygon Network): Not set &nbsp;
        <Link
          href='/'
          underline='none'
          sx={{ color: '#039be5' }}
          onClick={(e) => {
            e.preventDefault();
            navigate('/acc/code_wbtc')
          }}
        >
          (Change)
        </Link>
      </Typography>

      <Divider sx={{ margin: '1rem 0' }} />

      <Typography variant='h5' sx={{ fontSize: '1.6rem', margin: '1rem 0 0.5rem 0' }}>
        Withdraw
      </Typography>

      <Box mb={2}>
        <CustomButton onClick={() => navigate('/acc/wfh')} variant='contained' btnColor='primary' sx={{ marginRight: '4px', marginBottom: '4px' }}>
          to FaucetPay
        </CustomButton>

        <CustomButton onClick={() => navigate('/acc/wbtc')} variant='contained' btnColor='success' sx={{ marginRight: '4px', marginBottom: '4px' }}>
          to BTC Address
        </CustomButton>

        <CustomButton onClick={() => navigate('/acc/send_code_payeer')} variant='contained' btnColor='yellow' sx={{ marginRight: '4px', color: '#000', marginBottom: '4px' }}>
          Payeer
        </CustomButton>

        <CustomButton onClick={() => navigate('/acc/wwbtc')} variant='contained' btnColor='secondary' sx={{ marginRight: '4px', marginBottom: '4px' }}>
          WBTC (Polygon)
        </CustomButton>

        <CustomButton onClick={() => navigate('/index/move_balance')} variant='contained' btnColor='orrange'>
          Move to advertising balance
        </CustomButton>
      </Box>

      <Typography variant='body1' sx={{ fontSize: '15px' }}>
        Your withdrawal will be processed in 3 business days from the date of request.
      </Typography>
      <Typography variant='body1' sx={{ fontSize: '15px', fontWeight: '500' }}>
        Didn't get your withdraw after after it's confirmed on the blockchain? Please contact your wallet provider instead of us.
      </Typography>
    </Layout>
  )
}

export default Withdraw
