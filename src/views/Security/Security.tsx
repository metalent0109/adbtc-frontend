import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

import DoneIcon from '@mui/icons-material/Done';

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

const Security: FC = () => {

  const navigate = useNavigate()

  const rows = [
    {
      id: 1,
      time: '2022-07-05 11:18:38',
      ip: '000.000.000.00',
      country: 'US',
      status: 'success'
    },
    {
      id: 2,
      time: '2022-07-05 08:45:17',
      ip: '000.000.000.00',
      country: 'US',
      status: 'success'
    },
    {
      id: 3,
      time: '2022-07-04 11:16:41',
      ip: '000.000.000.00',
      country: 'US',
      status: 'success'
    },
    {
      id: 4,
      time: '2022-07-04 05:10:49',
      ip: '000.000.000.00',
      country: 'US',
      status: 'success'
    },
  ]

  return (
    <Layout title='Security'>
      <Box mt={3} mb={2}>
        <CustomButton variant='contained' btnColor='info' onClick={() => navigate('/forgot_password')}>
          change password
        </CustomButton>
      </Box>
      <Typography variant='h5' sx={{ fontSize: '1.64rem' }}>
        Login attempts to your account
      </Typography>
      <Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='center'>Time</TableCell>
                <TableCell align="center">IP</TableCell>
                <TableCell align="center">Country</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                rows.map((row) => (
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={row.id}>
                    <TableCell align="center">
                      {row.time}
                    </TableCell>
                    <TableCell align="center">
                      {row.ip}
                    </TableCell>
                    <TableCell align="center">
                      {row.country}
                    </TableCell>
                    <TableCell align="center">
                      <DoneIcon color='success' />
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Divider />
      </Box>
    </Layout>
  )
}

export default Security
