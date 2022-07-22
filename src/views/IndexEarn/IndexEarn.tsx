import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import ComputerIcon from '@mui/icons-material/Computer';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import RepeatIcon from '@mui/icons-material/Repeat';
import WebIcon from '@mui/icons-material/Web';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton';

import styles from 'assets/jss/pages/dashboardStyles'

const useStyles = makeStyles(styles)

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const IndexEarn: FC = () => {

  const classes = useStyles()
  const navigate = useNavigate()

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout title='Earn'>
      <Tabs value={value} onChange={handleChange} className={classes.tabs}>
        <Tab label="Satoshis" {...a11yProps(0)} />
        <Tab label="₽" {...a11yProps(1)} />
      </Tabs>

      {
        value === 0 && (
          <Box display='flex' mt={3}>
            <CustomButton variant='contained' btnColor='yellow' sx={{ margin: '0 4px 4px 4px' }} onClick={() => navigate('/surf/browse')}>
              Surf ads &nbsp;
              <ComputerIcon />
            </CustomButton>
            <CustomButton variant='contained' btnColor='success' sx={{ margin: '0 4px 4px 4px' }} href='https://adbtc.top/autosurf/session'>
              Autosurfing &nbsp;
              <RepeatIcon />
            </CustomButton>
            <CustomButton variant='contained' btnColor='primary' sx={{ margin: '0 4px 4px 4px' }} onClick={() => navigate('/surftab/inf')}>
              Active window surfing &nbsp;
              <WebIcon />
            </CustomButton>
          </Box>
        )
      }
      {
        value === 1 && (
          <Box display='flex' mt={3}>
            <CustomButton variant='contained' btnColor='yellow' sx={{ margin: '0 4px 4px 4px' }} onClick={() => navigate('/surfiat/browse')}>
              Surf ads &nbsp;
              <ComputerIcon />
            </CustomButton>
            <CustomButton variant='contained' btnColor='success' sx={{ margin: '0 4px 4px 4px' }} onClick={() => navigate('/video/inf')}>
              Video ads &nbsp;
              <OndemandVideoIcon />
            </CustomButton>
            <CustomButton variant='contained' btnColor='primary' sx={{ margin: '0 4px 4px 4px' }} onClick={() => navigate('/shortlink')}>
              Shortlinks  &nbsp;
              <InsertLinkIcon />
            </CustomButton>
          </Box>
        )
      }
    </Layout>
  )
}

export default IndexEarn
