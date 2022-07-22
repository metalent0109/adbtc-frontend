import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'

const AccountWfh: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='Withdraw to FaucetPay'>
      <Box mt={5}>
        <Typography variant='h4' sx={{ fontSize: '2.2rem', marginBottom: '1rem' }} align='center'>
          Error
        </Typography>
        <Typography variant='body1' align='center'>
          Please, go to &nbsp;
          <Link href='/' underline='none' onClick={(e) => {
            e.preventDefault();
            navigate('/acc/code_fh')
          }}>
            change FaucetPay wallet
          </Link>&nbsp;
          page and enter valid Bitcoin address linked to &nbsp;
          <Link href='https://faucetpay.io/?r=64905' underline='none' target='_blank'>
            FaucetPay
          </Link>

          <Box mt={3}>
            <CustomButton variant='contained' btnColor='info' onClick={() => navigate('/acc/code_fh')}>
              Change FaucetPay wallet
            </CustomButton>
          </Box>
        </Typography>
      </Box>
    </Layout>
  )
}

export default AccountWfh
