import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'

const BuyReferral: FC = () => {

  const navigate = useNavigate()

  return (
    <Layout title='Buy Referral'>
      <Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='left'>Registered</TableCell>
                <TableCell align="left">Total earned</TableCell>
                <TableCell align="left">Today earned</TableCell>
                <TableCell align="left">Spent on advertising</TableCell>
                <TableCell align="left">Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">2019-08-22 05:03:06</TableCell>
                <TableCell align="left">339402 satoshis<br />0 ₽</TableCell>
                <TableCell align="left">193 satoshis<br />0 ₽</TableCell>
                <TableCell align="left">0 satoshis<br />0 ₽</TableCell>
                <TableCell align="left">543 satoshis<br />0 ₽</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Divider />
      </Box>

      <Box mt={3}>
        <Typography variant='body1'>
          Advertising balance: 0 satoshis, 0 ₽ <br />
          Last seen: 2022-07-05 20:58:02 <br />
          Referrals: 0 <br />
          Total paid out: 339243 satoshis, 0 ₽
        </Typography>

        <Typography variant='body1' sx={{ fontWeight: '500', marginTop: '1.5rem' }}>
          Price: 110135 satoshis
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: '500', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          Insufficient funds to buy this Referral
        </Typography>

        <CustomButton variant='contained' btnColor='white' onClick={() => navigate('/deposit')}>
          Deposit
        </CustomButton>
      </Box>
    </Layout>
  )
}

export default BuyReferral
