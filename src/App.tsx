import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { auth } from './firebaseSetup'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LandingPage from 'views/LandingPage'
import Login from 'views/Login'
import SignUp from 'views/SignUp'
import ForgotPassword from 'views/ForgotPassword'

// pages of Earn
import Dashboard from 'views/Dashboard'
import SurfBrowse from 'views/SurfBrowse'
import SurfiatBrowse from 'views/SurfiatBrowse'
import VideoInf from 'views/VideoInf'
import SurftabInf from 'views/SurftabInf'
import ShortLinks from 'views/ShortLinks'

import Withdraw from 'views/Withdraw'
import ReferralSystem from 'views/ReferralSystem'
import SendCode from 'views/SendCode'
import ChangeWallet from 'views/ChangeWallet'
import Security from 'views/Security'
import CodeFh from 'views/CodeFh'
import SendCodePayeer from 'views/SendCodePayeer'
import CodeWbtc from 'views/CodeWbtc'
import AccountWfh from 'views/AccountWfh'
import AccountWbtc from 'views/AccountWbtc'
import AccountWwbtc from 'views/AccountWwbtc'
import MoveBalance from 'views/MoveBalance'

import SurfProjects from 'views/SurfProjects'
import SurfiatProjects from 'views/SurfiatProjects'
import VideoProjects from 'views/VideoProjects'
import SurftabProjects from 'views/SurftabProjects'
import AutosurfProjects from 'views/AutosurfProjects'
import SurfAdd from 'views/SurfAdd'
import SurfiatAdd from 'views/SurfiatAdd'
import VideoAdd from 'views/VideoAdd'
import SurftabAdd from 'views/SurftabAdd'
import AutosurfAdd from 'views/AutosurfAdd'
import EditSurfProject from 'views/EditSurfProject'
import SurfProjectGeo from 'views/SurfProjectGeo'
import SurfProjectDetail from 'views/SurfProjectDetail'
import SurfProjectLimit from 'views/SurfProjectLimit'
import SurfiatProjectLimit from 'views/SurfiatProjectLimit'
import EditSurfiatProject from 'views/EditSurfiatProject'
import SurfiatProjectGeo from 'views/SurfiatProjectGeo'
import SurfiatProjectDetail from 'views/SurfiatProjectDetail'
import VideoTopup from 'views/VideoTopup'
import EditVideoProject from 'views/EditVideoProject'
import VideoProjectGeo from 'views/VideoProjectGeo'
import VideoProjectDetail from 'views/VideoProjectDetail'
import VideoProjectLimit from 'views/VideoProjectLimit'
import SurftabTopup from 'views/SurftabTopup'
import AutosurfTopup from 'views/AutosurfTopup'

import ReferralMarket from 'views/ReferralMarket'
import BuyReferral from 'views/BuyReferral'
import Help from 'views/Help'
import TopSurfers from 'views/TopSurfers'
import TodayVisits from 'views/TodayVisits'
import AccountInfo from 'views/AccountInfo'
import Settings from 'views/Settings'

import InfoRating from 'views/InfoRating'
import InfoRub from 'views/InfoRub'
import AccountFiat from 'views/AccountFiat'
import Deposit from 'views/Deposit'
import MoveRub from 'views/MoveRub'
import PayeerFiat from 'views/PayeerFiat'
import FaucetpayDeposit from 'views/FaucetpayDeposit'
import PayeerFund from 'views/PayeerFund'
import SurfAbuse from 'views/SurfAbuse'
import IndexEarn from 'views/IndexEarn'
import SurfTopup from 'views/SurfTopup'

const theme = createTheme({})

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    const user = localStorage.getItem('jwtToken')
    if (user) {
      setIsAuthenticated(true)
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />

      
            <Fragment>
              <Route path="/index" element={<Dashboard />} />
              <Route path="/surf/browse" element={<SurfBrowse />} />
              <Route path="/surfiat/browse" element={<SurfiatBrowse />} />
              <Route path="/video/inf" element={<VideoInf />} />
              <Route path="/surftab/inf" element={<SurftabInf />} />
              <Route path="/shortlink" element={<ShortLinks />} />

              <Route path="/acc/balance" element={<Withdraw />} />
              <Route path="/acc/ref" element={<ReferralSystem />} />
              <Route path="/acc/send_code" element={<SendCode />} />
              <Route path="/acc/change_wallet" element={<ChangeWallet />} />
              <Route path="/security" element={<Security />} />
              <Route path="/acc/code_fh" element={<CodeFh />} />
              <Route
                path="/acc/send_code_payeer"
                element={<SendCodePayeer />}
              />
              <Route path="/acc/code_wbtc" element={<CodeWbtc />} />
              <Route path="/acc/wfh" element={<AccountWfh />} />
              <Route path="/acc/wbtc" element={<AccountWbtc />} />
              <Route path="/acc/wwbtc" element={<AccountWwbtc />} />
              <Route path="/index/move_balance" element={<MoveBalance />} />

              <Route path="/surf/projects" element={<SurfProjects />} />
              <Route path="/surf/add" element={<SurfAdd />} />
              <Route path="/surf/edit" element={<EditSurfProject />} />
              <Route path="/surf/geo" element={<SurfProjectGeo />} />
              <Route path="/surf/:id" element={<SurfProjectDetail />} />
              <Route path="/surf/limit" element={<SurfProjectLimit />} />
              <Route path="/surfiat/projects" element={<SurfiatProjects />} />
              <Route path="/surfiat/add" element={<SurfiatAdd />} />
              <Route path="/surfiat/limit" element={<SurfiatProjectLimit />} />
              <Route path="/surfiat/edit" element={<EditSurfiatProject />} />
              <Route path="/surfiat/geo" element={<SurfiatProjectGeo />} />
              <Route path="/surfiat/:id" element={<SurfiatProjectDetail />} />
              <Route path="/video/projects" element={<VideoProjects />} />
              <Route path="/video/add" element={<VideoAdd />} />
              <Route path="/video/topup" element={<VideoTopup />} />
              <Route path="/video/edit" element={<EditVideoProject />} />
              <Route path="/video/geo" element={<VideoProjectGeo />} />
              <Route path="/video/:id" element={<VideoProjectDetail />} />
              <Route path="/video/limit" element={<VideoProjectLimit />} />
              <Route path="/surftab/projects" element={<SurftabProjects />} />
              <Route path="/surftab/add" element={<SurftabAdd />} />
              <Route path="/surftab/topup" element={<SurftabTopup />} />
              <Route path="/autosurf/projects" element={<AutosurfProjects />} />
              <Route path="/autosurf/add" element={<AutosurfAdd />} />
              <Route path="/autosurf/topup" element={<AutosurfTopup />} />

              <Route path="/market/index" element={<ReferralMarket />} />
              <Route path="/market/buy/:id" element={<BuyReferral />} />
              <Route path="/help" element={<Help />} />
              <Route path="/info/top" element={<TopSurfers />} />
              <Route path="/info/today/:id" element={<TodayVisits />} />
              <Route path="/info/me" element={<AccountInfo />} />
              <Route path="/acc/options" element={<Settings />} />

              <Route path="/info/rating" element={<InfoRating />} />
              <Route path="/info/rub" element={<InfoRub />} />
              <Route path="/acc/fiat" element={<AccountFiat />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/index/move_rub" element={<MoveRub />} />
              <Route path="/payeer/fiat" element={<PayeerFiat />} />
              <Route path="/faucetpay/deposit" element={<FaucetpayDeposit />} />
              <Route path="/payeer/fund" element={<PayeerFund />} />
              <Route path="/surf/abuse" element={<SurfAbuse />} />
              <Route path="/index/earn" element={<IndexEarn />} />
              <Route path="/surf/topup" element={<SurfTopup />} />
            </Fragment>
      
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
