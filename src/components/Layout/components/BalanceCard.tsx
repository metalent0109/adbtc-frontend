import React, { FC } from 'react'
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import InfoIcon from '@mui/icons-material/Info';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip';

import styles from 'assets/jss/components/adminLayoutStyles'

const useStyles = makeStyles(styles)

interface Props {
  showUserId: boolean
  userData: any 
}


const BalanceCard: FC<Props> = (props) => {

  const { showUserId, userData } = props

  const classes = useStyles()

  const navigate = useNavigate()

  const handleNavigate = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
    e.preventDefault();
    navigate(url)
  }

  return (
    <Box className={classes.balanceCard} p={3} mb={1}>
      {
        showUserId && (
          <Box>
            <Typography variant='body1'>
              Your id: 2957768
            </Typography>
            <Typography variant='body1'>
              Rating: &nbsp;<b>0.000</b> &nbsp;
              <Link href='/' className={classes.infoLink} onClick={(e) => handleNavigate(e, '/info/rating')}>
                <InfoIcon />
              </Link>
            </Typography>
          </Box>
        )
      }

      <Box my={2}>
        <Typography variant='body1'>
          Balance
        </Typography>
        <Typography variant='body1'>
          {userData && userData.user.surfingBalance} satoshis &nbsp;
          <Tooltip title='Withdraw' classes={{ popper: classes.tooltip }}>
            <Link href='/acc/balance' onClick={(e) => handleNavigate(e, '/acc/balance')}>
              <AccountBalanceWalletIcon />
            </Link>
          </Tooltip>
        </Typography>

        <Typography variant='body1'>
          0,00 ₽ &nbsp;
          <Link href='/' className={classes.infoLink} onClick={(e) => handleNavigate(e, '/info/rub')}>
            <InfoOutlinedIcon />
          </Link>
          <Tooltip title='Withdraw' classes={{ popper: classes.tooltip }}>
            <Link href='/' onClick={(e) => handleNavigate(e, '/acc/fiat')}>
              <AccountBalanceWalletIcon />
            </Link>
          </Tooltip>
        </Typography>
      </Box>

      <Divider />

      <Box my={2}>
        <Typography variant='body1'>
          Advertising balance
        </Typography>
        <Typography variant='body1'>
        {userData && userData.user.advertisingBalance} satoshis &nbsp;
          <Tooltip title='Deposit' classes={{ popper: classes.tooltip }}>
            <Link href='/' onClick={(e) => handleNavigate(e, '/deposit')}>
              <AddBoxIcon />
            </Link>
          </Tooltip>
          <Tooltip title='Move from main balance' classes={{ popper: classes.tooltip }}>
            <Link href='/' onClick={(e) => handleNavigate(e, '/index/move_balance')}>
              <ImportExportIcon />
            </Link>
          </Tooltip>
        </Typography>

        <Typography variant='body1'>
          0,00 ₽ &nbsp;
          <Link href='/' className={classes.infoLink} onClick={(e) => handleNavigate(e, '/info/rub')}>
            <InfoOutlinedIcon />
          </Link>
          <Tooltip title='Deposit' classes={{ popper: classes.tooltip }}>
            <Link href='/' onClick={(e) => handleNavigate(e, '/payeer/fiat')}>
              <AddBoxIcon />
            </Link>
          </Tooltip>
          <Tooltip title='Move from main balance' classes={{ popper: classes.tooltip }}>
            <Link href='/' onClick={(e) => handleNavigate(e, '/index/move_rub')}>
              <ImportExportIcon />
            </Link>
          </Tooltip>
        </Typography>
      </Box>
    </Box>
  )
}

export default BalanceCard
