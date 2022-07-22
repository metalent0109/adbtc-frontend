import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link'

import Layout from 'components/Layout'
import CustomSelect from 'components/CustomSelect'

import styles from 'assets/jss/pages/topSurfersStyles'

const useStyles = makeStyles(styles)

const TopSurfers: FC = () => {

  const classes = useStyles()

  const navigate = useNavigate()

  const [currency, setCurrency] = useState('satoshis')

  const rows = [
    {
      id: '679209',
      rating: '45.52',
      earned: '266.7 satoshis'
    },
    {
      id: '1467497',
      rating: '6.03',
      earned: '240.1 satoshis'
    },
    {
      id: '755780',
      rating: '44.98',
      earned: '238 satoshis'
    },
    {
      id: '1988610',
      rating: '13.48',
      earned: '231 satoshis'
    },
    {
      id: '2494544',
      rating: '13.28',
      earned: '228.2 satoshis'
    },
    {
      id: '2089467',
      rating: '2.01',
      earned: '224.7 satoshis'
    },
    {
      id: '1995070',
      rating: '6.43',
      earned: '218.4 satoshis'
    },
    {
      id: '70501',
      rating: '134.23',
      earned: '217 satoshis'
    },
    {
      id: '2070392',
      rating: '14.57',
      earned: '216.3 satoshis'
    },
    {
      id: '1356516',
      rating: '17.12',
      earned: '211.4 satoshis'
    }
  ]

  return (
    <Layout title='Top surfers'>
      <Grid container>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Box mb={4}>
            <CustomSelect
              value={currency}
              handleChange={(e) => setCurrency(e.target.value)}
              label='Currency'
              fullWidth={true}
              options={[
                {
                  value: 'satoshis',
                  text: 'satoshis'
                },
                {
                  value: '₽',
                  text: '₽'
                }
              ]}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TableContainer>
            <Table aria-label="simple table" className={classes.topSurfersTable}>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">id</TableCell>
                  <TableCell align="left">Rating</TableCell>
                  <TableCell align="left">Earned</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">#{row.id}</TableCell>
                    <TableCell align="left">{row.rating}</TableCell>
                    <TableCell align="left">
                      <Link
                        href='/'
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/info/today/${row.id}`)
                        }}
                      >
                        {row.earned}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  className={classes.greenRow}
                >
                  <TableCell component="th" scope="row">
                    ...
                  </TableCell>
                  <TableCell align="left">#2957768</TableCell>
                  <TableCell align="left">0</TableCell>
                  <TableCell align="left">
                    <Link
                      href='/'
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/info/today/2957768`)
                      }}
                    >
                      0 satoshis
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default TopSurfers
