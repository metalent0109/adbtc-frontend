import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux"
import { RootState } from "redux/store"

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
import PrivateRoute from 'components/PrivateRoute';

const theme = createTheme({})

function App() {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    document.title = timer > 0 ? `${timer}` : "BTC-CADS"
  }, [timer])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />

      
            <Fragment>
              <Route path="/index" element={<PrivateRoute page={<Dashboard />} />} />
              <Route path="/surf/browse" element={<PrivateRoute page={<SurfBrowse setTimer={setTimer} />} />} />
              <Route path="/surfiat/browse" element={<PrivateRoute page={<SurfiatBrowse />} />} />
              <Route path="/video/inf" element={<PrivateRoute page={<VideoInf />} />} />
              <Route path="/surftab/inf" element={<PrivateRoute page={<SurftabInf />} />} />
              <Route path="/shortlink" element={<PrivateRoute page={<ShortLinks />} />} />

              <Route path="/acc/balance" element={<PrivateRoute page={<Withdraw />} />} />
              <Route path="/acc/ref" element={<PrivateRoute page={<ReferralSystem />} />} />
              <Route path="/acc/send_code" element={<PrivateRoute page={<SendCode />} />} />
              <Route path="/acc/change_wallet" element={<PrivateRoute page={<ChangeWallet />} />} />
              <Route path="/security" element={<PrivateRoute page={<Security />} />} />
              <Route path="/acc/code_fh" element={<PrivateRoute page={<CodeFh />} />} />
              <Route
                path="/acc/send_code_payeer"
                element={<PrivateRoute page={<SendCodePayeer />} />}
              />
              <Route path="/acc/code_wbtc" element={<PrivateRoute page={<CodeWbtc />} />} />
              <Route path="/acc/wfh" element={<PrivateRoute page={<AccountWfh />} />} />
              <Route path="/acc/wbtc" element={<PrivateRoute page={<AccountWbtc />} />} />
              <Route path="/acc/wwbtc" element={<PrivateRoute page={<AccountWwbtc />} />} />
              <Route path="/index/move_balance" element={<PrivateRoute page={<MoveBalance />} />} />

              <Route path="/surf/projects" element={<PrivateRoute page={<SurfProjects />} />} />
              <Route path="/surf/add" element={<PrivateRoute page={<SurfAdd />} />} />
              <Route path="/surf/edit" element={<PrivateRoute page={<EditSurfProject />} />} />
              <Route path="/surf/geo" element={<PrivateRoute page={<SurfProjectGeo />} />} />
              <Route path="/surf/:id" element={<PrivateRoute page={<SurfProjectDetail />} />} />
              <Route path="/surf/limit" element={<PrivateRoute page={<SurfProjectLimit />} />} />
              <Route path="/surfiat/projects" element={<PrivateRoute page={<SurfiatProjects />} />} />
              <Route path="/surfiat/add" element={<PrivateRoute page={<SurfiatAdd />} />} />
              <Route path="/surfiat/limit" element={<PrivateRoute page={<SurfiatProjectLimit />} />} />
              <Route path="/surfiat/edit" element={<PrivateRoute page={<EditSurfiatProject />} />} />
              <Route path="/surfiat/geo" element={<PrivateRoute page={<SurfiatProjectGeo />} />} />
              <Route path="/surfiat/:id" element={<PrivateRoute page={<SurfiatProjectDetail />} />} />
              <Route path="/video/projects" element={<PrivateRoute page={<VideoProjects />} />} />
              <Route path="/video/add" element={<PrivateRoute page={<VideoAdd />} />} />
              <Route path="/video/topup" element={<PrivateRoute page={<VideoTopup />} />} />
              <Route path="/video/edit" element={<PrivateRoute page={<EditVideoProject />} />} />
              <Route path="/video/geo" element={<PrivateRoute page={<VideoProjectGeo />} />} />
              <Route path="/video/:id" element={<PrivateRoute page={<VideoProjectDetail />} />} />
              <Route path="/video/limit" element={<PrivateRoute page={<VideoProjectLimit />} />} />
              <Route path="/surftab/projects" element={<PrivateRoute page={<SurftabProjects />} />} />
              <Route path="/surftab/add" element={<PrivateRoute page={<SurftabAdd />} />} />
              <Route path="/surftab/topup" element={<PrivateRoute page={<SurftabTopup />} />} />
              <Route path="/autosurf/projects" element={<PrivateRoute page={<AutosurfProjects />} />} />
              <Route path="/autosurf/add" element={<PrivateRoute page={<AutosurfAdd />} />} />
              <Route path="/autosurf/topup" element={<PrivateRoute page={<AutosurfTopup />} />} />

              <Route path="/market/index" element={<PrivateRoute page={<ReferralMarket />} />} />
              <Route path="/market/buy/:id" element={<PrivateRoute page={<BuyReferral />} />} />
              <Route path="/help" element={<PrivateRoute page={<Help />} />} />
              <Route path="/info/top" element={<PrivateRoute page={<TopSurfers />} />} />
              <Route path="/info/today/:id" element={<PrivateRoute page={<TodayVisits />} />} />
              <Route path="/info/me" element={<PrivateRoute page={<AccountInfo />} />} />
              <Route path="/acc/options" element={<PrivateRoute page={<Settings />} />} />

              <Route path="/info/rating" element={<PrivateRoute page={<InfoRating />} />} />
              <Route path="/info/rub" element={<PrivateRoute page={<InfoRub />} />} />
              <Route path="/acc/fiat" element={<PrivateRoute page={<AccountFiat />} />} />
              <Route path="/deposit" element={<PrivateRoute page={<Deposit />} />} />
              <Route path="/index/move_rub" element={<PrivateRoute page={<MoveRub />} />} />
              <Route path="/payeer/fiat" element={<PrivateRoute page={<PayeerFiat />} />} />
              <Route path="/faucetpay/deposit" element={<PrivateRoute page={<FaucetpayDeposit />} />} />
              <Route path="/payeer/fund" element={<PrivateRoute page={<PayeerFund />} />} />
              <Route path="/surf/abuse" element={<PrivateRoute page={<SurfAbuse />} />} />
              <Route path="/index/earn" element={<PrivateRoute page={<IndexEarn />} />} />
              <Route path="/surf/topup" element={<PrivateRoute page={<SurfTopup />} />} />
            </Fragment>
      
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
