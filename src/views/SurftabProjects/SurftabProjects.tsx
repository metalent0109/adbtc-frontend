import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import { CustomCard } from 'components/CustomCard/CustomCard'

import styles from 'assets/jss/components/tablesStyles'

const useStyles = makeStyles(styles)

const SurftabProjects: FC = () => {

  const navigate = useNavigate()

  const classes = useStyles()

  const urlParams = new URLSearchParams(window.location.search);
  const created = urlParams.get('created');

  const rows = [
    {
      id: 1,
      url: 'https://www.w3schools.com/tags/tag_pre.asp',
      description: 'test text',
      balance: 0,
      price: 2,
      views: '0',
      total: 0,
      status: 'Rejected'
    },
    {
      id: 2,
      url: 'https://www.w3schools.com/tags/tag_pre.asp',
      description: 'test text 2',
      balance: 0,
      price: 2,
      views: '0',
      total: 0,
      status: 'Rejected'
    }
  ]

  return (
    <Layout title='Your active window surfing ads'>
      {
        !created && (
          <Typography variant='h5' sx={{ fontSize: '1.64rem', margin: '1rem 0 0.6rem 0' }}>
            There is no ads yet
          </Typography>
        )
      }
      {
        created && (
          <Box mb={3} sx={{ borderBottom: '1px solid #ddd' }}>
            <TableContainer className={classes.table}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>URL</TableCell>
                    <TableCell align="center" sx={{ background: '#fffde7' }}>Balance</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Views today</TableCell>
                    <TableCell align="center">Total</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.description} <br /> <br />
                        {row.url}
                      </TableCell>
                      <TableCell align="center" sx={{ background: '#FFEBEE' }}>
                        <Link component='button' onClick={() => navigate('/surftab/topup')} sx={{ fontSize: '15px' }}>
                          {row.balance}
                        </Link>
                      </TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">
                        {row.views} <span style={{ color: '#4CAF50' }}>({row.views})</span>
                      </TableCell>
                      <TableCell align="center">
                        {row.total}
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant='body1' sx={{color: '#F44336 !important'}} align='center'>
                          {row.status}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton>
                          <PauseIcon sx={{ color: '#ff9800' }} />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon sx={{ color: '#F44336' }} />
                        </IconButton>
                        <IconButton>
                          <RestoreIcon sx={{ color: '#000' }} />
                        </IconButton>   
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )
      }
      <CustomButton variant='contained' btnColor='dark' onClick={() => navigate('/surftab/add')}>
        {
          created ? '+ Start new campaign' : '+ Lets create one!'
        }
      </CustomButton>

      <CustomCard sx={{ marginTop: '1rem' }}>
        <CardContent sx={{ padding: '24px' }}>
          <Typography variant='body1'>
            Registered users online: 2154
          </Typography>
        </CardContent>
      </CustomCard>
    </Layout>
  )
}

export default SurftabProjects
