import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'redux/store'
import { makeStyles } from '@mui/styles'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'

import PauseIcon from '@mui/icons-material/Pause'
import DeleteIcon from '@mui/icons-material/Delete'
import RestoreIcon from '@mui/icons-material/Restore'
import PhonelinkIcon from '@mui/icons-material/Phonelink'
import EditIcon from '@mui/icons-material/Edit'
import LanguageIcon from '@mui/icons-material/Language'
import EqualizerIcon from '@mui/icons-material/Equalizer'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import { CustomCard } from 'components/CustomCard/CustomCard'

import styles from 'assets/jss/components/tablesStyles'
import { getAdsCreatedByMe } from 'redux/reducers/adsSlice'

const useStyles = makeStyles(styles)

const SurfProjects: FC = (props) => {
  const { myAds } = useSelector((state: RootState) => state.ads)
  const dispatch = useDispatch<AppDispatch>()
  console.log('this is my ads', myAds)

  const navigate = useNavigate()
  const classes = useStyles()

  const urlParams = new URLSearchParams(window.location.search)
  const created = urlParams.get('created')

  const rows = [
    {
      id: 1,
      advertisement: 'https://www.w3schools.com/tags/tag_pre.asp',
      description: 'test text',
      balance: 0,
      price: 2,
      views: '0',
      total: 0,
      status: 'Not showing:',
    },
    {
      id: 2,
      advertisement: 'https://www.w3schools.com/tags/tag_pre.asp',
      description: 'test text 2',
      balance: 0,
      price: 2,
      views: '0',
      total: 0,
      status: 'Not showing:',
    },
  ]

  useEffect(() => {
    dispatch(getAdsCreatedByMe())
  }, [dispatch])

  return (
    <Layout title={created ? 'Your surfing ads' : 'There is no ads yet'}>
      <Typography
        variant="body1"
        sx={{ fontSize: '15px', margin: '1rem 0 0.6rem 0' }}
      >
        It is surfing for satoshis &nbsp;
        <Link
          href="/surfiat/projects/"
          underline="none"
          onClick={(e) => {
            e.preventDefault()
            navigate('/surfiat/projects/')
          }}
        >
          surfing for ₽
        </Link>
      </Typography>
      <Divider sx={{ marginBottom: '1rem' }} />

      {!!created && (
        <Box mb={3} sx={{ borderBottom: '1px solid #ddd' }}>
          <TableContainer className={classes.table}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Advertisement</TableCell>
                  <TableCell align="center" sx={{ background: '#fffde7' }}>
                    Balance
                  </TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Views today</TableCell>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myAds?.map((ad: any) => (
                  <TableRow
                    key={ad._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {ad.description} <br /> <br />
                      {ad.url} <br /> <br />
                      <Typography
                        variant="body1"
                        sx={{ color: '#F44336', display: 'flex' }}
                      >
                        <PhonelinkIcon sx={{ color: '#000' }} />
                        &nbsp; 18 +
                      </Typography>
                    </TableCell>
                    <TableCell align="center" sx={{ background: '#FFEBEE' }}>
                      <Link
                        component="button"
                        onClick={() => navigate('/surf/topup')}
                        sx={{ fontSize: '15px' }}
                      >
                        {ad.escrowAmount}
                      </Link>
                    </TableCell>
                    <TableCell align="center">{ad.basePrice}</TableCell>
                    <TableCell align="center">
                      0 <span style={{ color: '#4CAF50' }}>(0)</span>
                    </TableCell>
                    <TableCell align="center">{ad.escrowAmount}</TableCell>
                    <TableCell align="center">
                      {ad.isPublished && 'Showing'} &nbsp;{' '}
                      {!ad.isPublished && ('Not showing')} &nbsp; <br />
                      {!ad.isPublishd && (
                        <Link
                          component="button"
                          underline="none"
                          onClick={() => navigate('/surf/topup')}
                        >
                          Please add funds here
                        </Link>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton>
                        <PauseIcon sx={{ color: '#ff9800' }} />
                      </IconButton>
                      <IconButton onClick={() => navigate('/surf/edit')}>
                        <EditIcon sx={{ color: '#cddc39' }} />
                      </IconButton>
                      <IconButton>
                        <RestoreIcon sx={{ color: '#000' }} />
                      </IconButton>
                      <IconButton onClick={() => navigate('/surf/geo')}>
                        <LanguageIcon sx={{ color: '#000' }} />
                      </IconButton>
                      <IconButton onClick={() => navigate(`/surf/${ad._id}`)}>
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
      )}

      <CustomButton
        variant="contained"
        btnColor="dark"
        onClick={() => navigate('/surf/add')}
      >
        {created ? '+ Start new campaign' : '+ Lets create one!'}
      </CustomButton>

      <Typography variant="body1" sx={{ marginTop: '2rem' }}>
        Unlike other sites, in adBTC surfing the advertised link opens in a full
        new browser tab, which allows you to advertise pages that cannot be
        opened in iFrame (for example, VK or Facebook groups and posts, Youtube
        videos, Twitter, etc). You choose the price for the visit yourself. The
        higher your bid per click, the higher your site will be displayed in the
        list and the more visits you will receive. The minimum price per visit
        is 4 satoshis.
      </Typography>
      <CustomCard sx={{ marginTop: '1rem' }}>
        <CardContent sx={{ padding: '24px' }}>
          <Typography variant="body1">Registered users online: 2215</Typography>
        </CardContent>
      </CustomCard>
    </Layout>
  )
}

export default SurfProjects
