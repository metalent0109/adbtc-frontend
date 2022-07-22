import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton';

const AccountFiat: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='adBTC'>
      <Link href='/acc/balance' underline='none' sx={{ color: '#039be5' }}>
        Withdraw satoshis
      </Link>
      <Typography variant='body1' sx={{ margin: '1rem 0', fontSize: '1.4rem' }}>
        Payeer: Not set &nbsp;
        <Link
          href='/acc/change_wallet_payeer'
          underline='none'
          sx={{ color: '#039be5' }}
          onClick={(e) => {
            e.preventDefault()
            navigate('/acc/send_code_payeer')
          }}
        >
          (Change)
        </Link>
      </Typography>

      <Divider />

      <Typography variant='h5' sx={{ fontSize: '1.64rem', margin: '1rem 0 0.6rem 0' }}>
        Withdraw
      </Typography>
      <CustomButton variant='contained' btnColor='success' sx={{ marginBottom: '20px' }} onClick={() => navigate('/acc/send_code_payeer')}>
        на PAYEER
      </CustomButton>

      <Typography variant='body1'>
        Your withdrawal will be processed in 3 business days from the date of request.
      </Typography>
    </Layout>
  )
}

export default AccountFiat
