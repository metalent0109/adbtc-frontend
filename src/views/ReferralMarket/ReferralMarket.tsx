import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

import RepeatIcon from '@mui/icons-material/Repeat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import Pagination from '@mui/material/Pagination';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomSelect from 'components/CustomSelect'
import CustomTextField from 'components/CustomTextField'

import styles from 'assets/jss/pages/referralMarketStyles'

const useStyles = makeStyles(styles)

const ReferralMarket: FC = () => {

  const classes = useStyles()

  const navigate = useNavigate()

  const [typeValue, setTypeValue] = useState('BTC')
  const [price, setPrice] = useState<number[]>([1, 200000]);

  const handleChangePrice = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const rows = [
    {
      id: 1,
      registered: '2019-08-22',
      lastSeen: '2022-07-05',
      totalEarned: 339400,
      todayEarned: 191,
      spent: 0,
      balance: 541,
      price: 110135
    },
    {
      id: 2,
      registered: '2021-03-09',
      lastSeen: '2022-07-05',
      totalEarned: 64738,
      todayEarned: 172,
      spent: 0,
      balance: 2772,
      price: 54997
    },
    {
      id: 3,
      registered: '2019-01-10',
      lastSeen: '2022-07-05',
      totalEarned: 251039,
      todayEarned: 169,
      spent: 0,
      balance: 1179,
      price: 39110
    },
    {
      id: 4,
      registered: '2017-10-24',
      lastSeen: '2022-07-05',
      totalEarned: 1354153,
      todayEarned: 166,
      spent: 0,
      balance: 46967,
      price: 106601
    },
    {
      id: 5,
      registered: '2018-05-02',
      lastSeen: '2022-07-05',
      totalEarned: 43154,
      todayEarned: 163,
      spent: 0,
      balance: 2228,
      price: 71500
    }
  ]
  console.log(price)
  return (
    <Layout title='Referral market'>
      <Typography variant='body1' sx={{ fontSize: '15px', margin: '1rem 0' }}>
        You can buy referral, which will bring you bitcoin each time he earns.
      </Typography>

      <Card className={classes.filterCard}>
        <CardContent sx={{ padding: '24px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5} md={5}>
              <Box>
                <CustomSelect
                  value={typeValue}
                  handleChange={(e) => setTypeValue(e.target.value)}
                  label='Type'
                  fullWidth={true}
                  options={[
                    {
                      value: 'BTC',
                      text: 'BTC'
                    },
                    {
                      value: '₽',
                      text: '₽'
                    }
                  ]}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Box textAlign='center'>
                <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#26a69a !important' }} />} label="Confirmed email" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={2} md={2}>
              <CustomButton variant='contained' btnColor='success'>
                <RepeatIcon />
              </CustomButton>
            </Grid>

            <Grid item xs={12}>
              <Box mt={2} className={classes.slider}>
                <Typography variant='body1'>
                  Price:
                </Typography>
                <Slider
                  value={price}
                  onChange={handleChangePrice}
                  valueLabelDisplay="auto"
                  min={1}
                  max={5000000}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CustomTextField
                fullWidth={true}
                variant='standard'
                inputProps={{ type: 'number' }}
                value={price[0]}
              />
              <Typography variant='caption' sx={{ color: 'rgba(0,0,0,0.54)' }}>
                satoshis
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ marginLeft: 'auto' }}>
              <CustomTextField
                fullWidth={true}
                variant='standard'
                inputProps={{ type: 'number' }}
                value={price[1]}
              />
              <Typography variant='caption' sx={{ color: 'rgba(0,0,0,0.54)' }}>
                satoshis
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box mt={4}>
        <TableContainer className={classes.table}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='center'>Registered</TableCell>
                <TableCell align="center">Last seen</TableCell>
                <TableCell align="center">Total earned</TableCell>
                <TableCell align="center">Today earned</TableCell>
                <TableCell align="center">Spent on advertising</TableCell>
                <TableCell align="center">Balance</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">
                    {row.registered}
                  </TableCell>
                  <TableCell align="center">{row.lastSeen}</TableCell>
                  <TableCell align="center">{row.totalEarned} satoshis</TableCell>
                  <TableCell align="center">{row.todayEarned} satoshis</TableCell>
                  <TableCell align="center">{row.spent} satoshis</TableCell>
                  <TableCell align="center">{row.balance} satoshis</TableCell>
                  <TableCell align="center">{row.price} satoshis</TableCell>
                  <TableCell align="right">
                    <Link href='/' onClick={(e) => {
                      e.preventDefault();
                      navigate(`/market/buy/${row.id}`)
                    }}>
                      <ShoppingCartIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={3}>
          <Pagination count={11} defaultPage={6} siblingCount={0} />
        </Box>
      </Box>

    </Layout>
  )
}

export default ReferralMarket
