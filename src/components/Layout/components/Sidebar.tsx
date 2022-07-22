import React, { FC } from 'react'
import { makeStyles } from "@mui/styles";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import BalanceCard from './BalanceCard'
import MenuCollapse from './MenuCollapse'

import { LinkMenu } from 'typings'

import styles from 'assets/jss/components/adminLayoutStyles'

const useStyles = makeStyles(styles)

interface Props {
  open: boolean;
  handleClose: () => void;
  menuList: Array<LinkMenu>
}

const Sidebar: FC<Props> = (props) => {

  const classes = useStyles()

  const { open, handleClose, menuList } = props

  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={handleClose}
      className={classes.drawer}
    >
      <Box>
        <BalanceCard showUserId={true} />
        <Box className={classes.btcToUsd} display='flex' alignItems='center'>
          <Typography variant='body1'>
            1 BTC = 20083 USD
          </Typography>
        </Box>
        <MenuCollapse menu={menuList[1]} isSidebar={true} />
        {
          menuList.filter((menu) => menu.id !== 2).map((menu) => (
            <MenuCollapse menu={menu} key={menu.id} isSidebar={true} />
          ))
        }
      </Box>
    </Drawer>
  )
}

export default Sidebar
