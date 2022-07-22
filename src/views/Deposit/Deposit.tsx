import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import SwapVertIcon from '@mui/icons-material/SwapVert';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton';

import styles from 'assets/jss/components/tablesStyles'

const useStyles = makeStyles(styles)

const Deposit: FC = () => {

  const classes = useStyles()

  const navigate = useNavigate()

  const [showQr, setShowQr] = useState(false)

  const rows = [
    {
      amount: 34,
      address: 'internal',
      time: '2022-07-07 15:55:25',
      id: 1
    },
    {
      amount: 9,
      address: 'internal',
      time: '2022-07-06 15:55:25',
      id: 2
    }
  ]

  return (
    <Layout title='Deposit to the advertising balance'>
      {
        showQr ? (
          <>
            <Box sx={{ marginBottom: '20px' }}>
              <img src="https://chart.googleapis.com/chart?chs=165x165&cht=qr&chld=l|0&chl=bitcoin:bc1q2cktpy2sv8jt8v44vysv5uh3tqmgrw5m7rv3cl" alt="" />
            </Box>
            <Typography variant='body1' sx={{ fontSize: '1.4rem', wordBreak: 'break-all' }}>
              Please, send bitcoins to: <br />
              <b>bc1q2cktpy2sv8jt8v44vysv5uh3tqmgrw5m7rv3cl</b> <br /><br />
              You can deposit any amount, no minimum.
              <b>Note, that account balance will increase after 1 confirmation in Bitcoin Network.</b>
            </Typography>
          </>
        ) : (
          <Link component='button' underline='none' sx={{ fontSize: '1.64rem', margin: '1rem 0 0.6rem 0' }} onClick={() => setShowQr(true)}>
            Generate Deposit Address
          </Link>
        )
      }
      <Divider sx={{ margin: '1rem 0' }} />
      <Box>
        <CustomButton variant='contained' btnColor='primary' sx={{ margin: '0 4px 4px 0' }} onClick={() => navigate('/faucetpay/deposit')}>
          Pay with FaucetPay
        </CustomButton>
        <CustomButton variant='contained' btnColor='success' sx={{ margin: '0 4px 4px 0' }} onClick={() => navigate('/payeer/fund')}>
          Deposit using PAYEER
        </CustomButton>
        <CustomButton variant='contained' btnColor='gray' sx={{ margin: '0 4px 4px 0' }} onClick={() => navigate('/index/move_balance')}>
          Move from main balance
          <SwapVertIcon />
        </CustomButton>
      </Box>

      <Box mt={3}>
        <Typography variant='h4' sx={{ fontSize: '1.64rem' }}>
          Latest deposits
        </Typography>
        <TableContainer className={classes.table}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.amount}
                  </TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Deposit
