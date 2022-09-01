import React, { FC } from 'react'
import { makeStyles } from '@mui/styles'

import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SettingsPowerIcon from '@mui/icons-material/SettingsPower'
import { useNavigate } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

import BalanceCard from './BalanceCard'
import MenuCollapse from './MenuCollapse'

import { LinkMenu } from 'typings'

import styles from 'assets/jss/components/adminLayoutStyles'

const useStyles = makeStyles(styles)

interface Props {
  open: boolean
  handleClose: () => void
  menuList: Array<LinkMenu>
  userData: any
}

const Sidebar: FC<Props> = (props) => {
  const classes = useStyles()
  const { logout } = useAuth();
  const { open, handleClose, menuList, userData } = props
  const navigate = useNavigate()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleClose}
      className={classes.drawer}
    >
      <Box>
        <BalanceCard showUserId={true} userData={userData && userData} />
        <Box className={classes.btcToUsd} display="flex" alignItems="center">
          <Typography variant="body1">1 BTC = 20083 USD</Typography>
        </Box>
        <Box
          className={classes.btcToUsd}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
            marginTop: "10px"
          }}
          onClick={logoutUser}
        >
          Logout
          <SettingsPowerIcon />
        </Box>
        <MenuCollapse menu={menuList[1]} isSidebar={true} />
        {menuList
          .filter((menu) => menu.id !== 2)
          .map((menu) => (
            <MenuCollapse menu={menu} key={menu.id} isSidebar={true} />
          ))}
      </Box>
    </Drawer>
  )
}

export default Sidebar
