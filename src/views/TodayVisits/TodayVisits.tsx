import React, { FC } from 'react'

import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link'

import Layout from 'components/Layout'

const TodayVisits: FC = () => {  

  const rows = [
    {
      url: 'https://faucetbr.tk/doge?r=DJUKHuiVWxd8bfCeccvJLz4uivzYkUGk4D',
      title: 'Кран криптовалюты. Одно нажатие кнопки и сатоши переводятся на faucetpay каждые 5 минут в течении тр',
      time: '2022-07-05 18:16:56',
      price: '2.8 satoshis'
    },
    {
      url: 'https://conice.biz/?ref=adbtc123123',
      title: 'Conice Investment Limited----The best cryptocurrency investment platform in 2022!!!',
      time: '2022-07-05 18:15:32',
      price: '2.1 satoshis'
    },
    {
      url: 'https://www.probit.com/r/67508646',
      title: 'Buy crypto and earn big! ProBit Exchange',
      time: '2022-07-05 17:07:54',
      price: '5.6 satoshis'
    },
    {
      url: 'https://viralcrypt.blogspot.com/',
      title: 'Viral Crypto Airdrops is a free source that presents the world’s most current and legitimate cryptoc',
      time: '2022-07-05 17:00:43',
      price: '2.8 satoshis'
    },
    {
      url: 'https://bohrium.finance/?r=9ey0l641wk',
      title: 'Smart Lending Contract Up to 160% APY on Stable coins',
      time: '2022-07-05 16:15:35',
      price: '6.3 satoshis'
    }
  ]

  return (
    <Layout title='Today visits'>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">URL</TableCell>
                  <TableCell align="left">Time</TableCell>
                  <TableCell align="left">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">
                      <Link href={row.url} target="_blank" underline='none' sx={{color: '#039be5'}}>
                        {row.title}
                      </Link>
                    </TableCell>
                    <TableCell align="left">{row.time}</TableCell>
                    <TableCell align="left">
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default TodayVisits
