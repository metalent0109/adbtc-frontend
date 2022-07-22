import React, { VFC } from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/pages/homeStyles'

const useStyles = makeStyles(styles)

const WithdrawalsTable: VFC = () => {

  const classes = useStyles()

  const tableData = [
    {
      id: 1,
      time: '2022-07-04 18:05:55',
      amount: '1775 satoshis',
      type: 'Payeer'
    },
    {
      id: 2,
      time: '2022-07-04 17:29:07',
      amount: '	114,00 ₽',
      type: 'Payeer'
    },
    {
      id: 3,
      time: '2022-07-04 17:07:43',
      amount: '49,00 ₽',
      type: 'Payeer'
    },
    {
      id: 4,
      time: '2022-07-04 16:31:00',
      amount: '20,00 ₽',
      type: 'Payeer'
    },
    {
      id: 5,
      time: '2022-07-04 16:15:48',
      amount: '2331 satoshis',
      type: 'Payeer'
    },
    {
      id: 6,
      time: '2022-07-04 15:59:31',
      amount: '900,00 ₽',
      type: 'Payeer'
    },
    {
      id: 7,
      time: '2022-07-04 14:49:50',
      amount: '100,00 ₽',
      type: 'Payeer'
    }
  ]

  return (
    <Box className={classes.tableWrapper}>
      <Typography variant='h5'>
      Latest withdrawals
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default WithdrawalsTable
