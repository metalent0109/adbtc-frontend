import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import SortIcon from '@mui/icons-material/Sort';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import LanguageIcon from '@mui/icons-material/Language';
import EqualizerIcon from '@mui/icons-material/Equalizer';

import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import { CustomCard } from 'components/CustomCard/CustomCard'

import styles from 'assets/jss/components/tablesStyles'

const useStyles = makeStyles(styles)

const SurfiatProjects: FC = () => {

  const navigate = useNavigate()
  const classes = useStyles()

  const urlParams = new URLSearchParams(window.location.search);
  const created = urlParams.get('created');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const rows = [
    {
      id: 1,
      advertisement: 'https://www.w3schools.com/tags/tag_pre.asp',
      description: 'test text',
      balance: 0,
      price: 2,
      views: '0',
      total: 0,
      status: 'Not showing:'
    },
    {
      id: 2,
      advertisement: 'https://www.w3schools.com/tags/tag_pre.asp',
      description: 'test text 2',
      balance: 0,
      price: 2,
      views: '0',
      total: 0,
      status: 'Not showing:'
    }
  ]

  return (
    <Layout title='There is no ads yet'>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant='body1' sx={{ fontSize: '15px' }}>
            It is surfing for ₽ &nbsp;
            <Link
              href='/'
              underline='none'
              onClick={(e) => { e.preventDefault(); navigate('/surf/projects/') }}
              sx={{ color: '#039be5' }}
            >
              surfing for satoshis
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={6} sm={6} md={4}>
          <Button onClick={handleClick} sx={{ textTransform: 'none', color: '#039be5' }}>
            <SortIcon />
            Sort
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Date added</MenuItem>
            <MenuItem onClick={handleClose}>Balance</MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <Box textAlign='right'>
            <Link
              href='/'
              underline='none'
              sx={{ color: '#039be5' }}
            >
              archived
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ margin: '1rem 0' }} />

      {
        !!created && (
          <Box mb={3} sx={{ borderBottom: '1px solid #ddd' }}>
            <TableContainer className={classes.table}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Advertisement</TableCell>
                    <TableCell align="center" sx={{ background: '#fffde7' }}>Balance</TableCell>
                    <TableCell align="center">Views today</TableCell>
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
                        {row.advertisement} <br /> <br />
                        <Typography variant='body1' sx={{ color: '#F44336', display: 'flex' }}>
                          <PhonelinkIcon sx={{ color: '#000' }} />&nbsp; 18 +
                        </Typography><br />
                        <Typography variant='body1'>
                          Price per click: &nbsp;<b>0.07 ₽</b>
                        </Typography> <br />
                        <Typography variant='body1'>
                          Daily limit: Off  &nbsp;
                          <Link component="button" underline='none' sx={{ fontSize: '15px' }} onClick={() => navigate('/surfiat/limit')}>
                            (Change)
                          </Link>
                        </Typography><br />
                        <Link component="button" onClick={() => navigate('/surfiat/edit')} underline='none' sx={{ fontSize: '15px' }}>
                          Edit ad
                        </Link>
                      </TableCell>
                      <TableCell align="center" sx={{ background: '#FFEBEE' }}>
                        <Link component='button' onClick={() => navigate('/surf/topup')} sx={{ fontSize: '15px' }}>
                          {row.balance} ₽
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        {row.views}
                      </TableCell>
                      <TableCell align="center">
                        <Link component='button' sx={{ fontSize: '15px' }} underline='none' onClick={() => navigate('/surfiat/topup')}>
                          Please add funds here
                        </Link>
                        <Typography variant='body1' align='center'>
                          <PauseIcon sx={{ color: '#ff9800' }} />
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => navigate('/surfiat/geo')}>
                          <LanguageIcon sx={{ color: '#000' }} />
                        </IconButton>
                        <IconButton onClick={() => navigate(`/surfiat/${row.id}`)}>
                          <EqualizerIcon sx={{ color: '#2196F3' }} />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon sx={{ color: '#F44336' }} />
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

      <CustomButton variant='contained' btnColor='dark' onClick={() => navigate('/surfiat/add')}>
        {
          created ? '+ Start new campaign' : '+ Lets create one!'
        }
      </CustomButton>

      <Typography variant='body1' sx={{ marginTop: '2rem' }}>
        Unlike other sites, in adBTC surfing the advertised link opens in a full new browser tab,
        which allows you to advertise pages that cannot be opened in iFrame (for example, VK or Facebook groups and posts, Youtube videos, Twitter, etc).
        You choose the price for the visit yourself.
        The higher your bid per click, the higher your site will be displayed in the list and the more visits you will receive.
        The minimum price per visit is 4 satoshis.
      </Typography>
      <CustomCard sx={{ marginTop: '1rem' }}>
        <CardContent sx={{ padding: '24px' }}>
          <Typography variant='body1'>
            Registered users online: 2215
          </Typography>
        </CardContent>
      </CustomCard>
    </Layout>
  )
}

export default SurfiatProjects
