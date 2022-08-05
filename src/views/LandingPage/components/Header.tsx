import React, { VFC, useState, useEffect } from 'react'
import clsx from 'clsx'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "redux/store"

import { makeStyles } from '@mui/styles'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import styles from 'assets/jss/pages/homeStyles'
import { auth, signInWithGoogle } from '../../../firebaseSetup'
import { toast } from 'react-toastify'
import { regGoogleAuthenticationData } from 'redux/reducers/authSlice'

const useStyles = makeStyles(styles)

const Header: VFC = () => {
  const userStorage = localStorage.getItem("jwtToken")
  const [user] = useAuthState(auth)
  const { isError, isSuccess, message } = useSelector((state: RootState) => state.auth)
const dispatch = useDispatch<AppDispatch>()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const classes = useStyles()

  const navigate = useNavigate()

  const signUpWithGoogle = () => {
    signInWithGoogle()
    setIsLoggedIn(true)
  }

  useEffect(() => {
    if (isError) {
      toast.error(message.error)
    }
    if (user) {
      const data = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        surfingBalance: "0",
        advertisingBalance: "0"
      }
      console.log("user with useAthState", data)
      dispatch(regGoogleAuthenticationData(data))
      setIsLoggedIn(true)
    }
  }, [user, isError, message, dispatch])

  return (
    <Box className={classes.headerSection}>
      <Container maxWidth="xl">
        <Box maxWidth={1280} mx="auto">
          <Typography variant="h3" align="center">
            Earn money for watching websites
          </Typography>

          <Box display="flex" justifyContent="center" mb={4}>
            <Button
              variant="contained"
              className={clsx(classes.signInBtn, classes.signBtn)}
              onClick={(e) => {
                e.preventDefault()
                navigate('/login')
              }}
            >
              SIGN IN
            </Button>
            <Button
              variant="contained"
              className={clsx(classes.signUpBtn, classes.signBtn)}
              onClick={(e) => {
                e.preventDefault()
                navigate('/signup')
              }}
            >
              SIGN UP
            </Button>
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              className={classes.googleLoginBtn}
              onClick={signUpWithGoogle}
            >
              {isLoggedIn ? (
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 48 48"
                  className="abcRioButtonSvg"
                >
                  <g>
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 48 48"
                  className="abcRioButtonSvg"
                >
                  <g>
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </g>
                </svg>
              )}
              {isLoggedIn ? 'Signed in' : 'Sign in'}
            </Button>
          </Box>
          {isLoggedIn && (
            <Box
              textAlign="center"
              style={{
                backgroundColor: 'white',
                margin: "auto",
                marginTop: "20px",
                width: '75%'
              }}
            >
              Sign in completed.{' '}
              <Link to="/index" style={{ textDecoration: 'none' }}>
                Dashboard
              </Link>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default Header
