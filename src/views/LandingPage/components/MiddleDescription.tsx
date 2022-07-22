import React, { VFC } from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import styles from 'assets/jss/pages/homeStyles'

const useStyles = makeStyles(styles)

const MiddleDescription: VFC = () => {

  const classes = useStyles()

  return (
    <Box className={classes.middleDesc} py={2}>
      <Container maxWidth='xl'>
        <Box maxWidth={1280} mx='auto'>
          <Typography variant='h4'>
            Earn bitcoin
          </Typography>
          <Typography variant='body1'>
            Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.
            Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part.
            Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.
            This website allows you to get free bitcoin. 
            It is better than bitcoin faucet, it is not btc miner, just earn bitcoin online for viewing web pages, mostly bitcoin sites. <br />
            Internet advertising is evolving and now you have the right to get paid for it! Earn bitcoin online free and withdraw it to your Bitcoin wallet.
            Now, the volume of bitcoin transactions is over than 2.73 Billions USD daily. You can join the flow of money and start with easy bitcoin got here! Have a good rich day!
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default MiddleDescription
