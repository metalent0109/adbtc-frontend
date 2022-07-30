import React, { VFC, useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { auth } from '../../firebaseSetup'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

import { makeStyles } from '@mui/styles'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Link from '@mui/material/Link'

import HomeNavbar from 'components/HomeNavbar'
import Footer from 'components/Footer'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/pages/authStyles'
import { validateForm, validEmailRegex } from 'utils/utility'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { firebaseConfig } from 'firebaseConfig'
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const useStyles = makeStyles(styles)

let initialState = {
  name: '',
  email: '',
  password: '',
}

let initialErrors = {
  name: '',
  email: '',
  password: '',
}

const SignUp: VFC = () => {
  const [registerInput, setRegisterInput] = useState(initialState)
  const [errors, setErrors] = useState(initialErrors)
  const [submitError, setSubmitError] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)

  const classes = useStyles()

  const navigate = useNavigate()

  const [captcha, setCaptcha] = useState('reCaptcha')

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setCaptcha(event.target.value)
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    let errorValues = errors

    switch (name) {
      case 'name':
        errorValues.name = value.length === 0 ? 'Name field is required' : ''
        break
      case 'email':
        errorValues.email = validEmailRegex.test(value)
          ? ''
          : 'Email is not valid'
        break
      case 'password':
        errorValues.password =
          value.length < 8 ? 'Password must be at least 8 characters long!' : ''
        break
      default:
        break
    }
    setRegisterInput({
      ...registerInput,
      [name]: value,
    })
    setErrors(errorValues)
  }

  const registerUser = async () => {
    if (
      registerInput.name.length === 0 ||
      registerInput.email.length === 0 ||
      registerInput.password.length === 0
    ) {
      setSubmitError('Name, Email and Password fields are required')
      return
    }
    if (validateForm(errors)) {
      const data = {
        name: registerInput.name,
        email: registerInput.email,
        password: registerInput.password,
      }
      await axios
        .post('http://localhost:5000/api/user/signup', data)
        .then((user) => {
          console.log(user.data)
          const token = user.data.token
          localStorage.setItem('jwtToken', token)
          setIsRegistered(true)
          navigate('/index')
        }).catch((error) => {
          console.log(error.response.data.error)
          setSubmitError(error.response.data.error)
        })

      // registerWithEmailAndPassword(
      //   registerInput.name,
      //   registerInput.email,
      //   registerInput.password,
      // )
    } else {
      console.log('Invalid form')
    }
  }

  useEffect(() => {
    const  user = localStorage.getItem("jwtToken")
    if (isRegistered || user) {
      navigate('/index')
    }
  }, [isRegistered, navigate])

  return (
    <Box>
      <HomeNavbar showLinks={false} />
      <Box className={classes.contents} pt={4} pb={5}>
        <Container maxWidth="xl">
          <Box maxWidth={1280} mx="auto">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={5}
            >
              <Box className={classes.langSection}>
                <Typography variant="h5">Sign up</Typography>
                <Box>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    startIcon={<img src="/images/language-icon.png" />}
                    className={classes.langBtn}
                  >
                    Language
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
                    <MenuItem
                      onClick={handleClose}
                      className={classes.langMenu}
                    >
                      English language
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.langMenu}
                    >
                      Русский язык
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.langMenu}
                    >
                      Idioma español
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Box className={classes.hideMobile}>
                <Button
                  variant="contained"
                  className={classes.signUpBtn}
                  onClick={() => navigate('/login')}
                >
                  SIGN IN
                </Button>
              </Box>
            </Box>

            <Box mb={4}>
              <Typography variant="body1">
                Please enter your email and choose your password to register.
                Please note that the password <b>must be unique</b> , which you
                do not use on other sites.
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <Box mb={2}>
                  {submitError && (
                    <span
                      style={{
                        color: 'red',
                        fontStyle: 'italic',
                        marginBottom: '20px',
                      }}
                    >
                      {submitError}
                    </span>
                  )}
                </Box>
                <Box mb={2}>
                  <CustomTextField
                    variant="standard"
                    label="Name *"
                    fullWidth
                    name={`name`}
                    onChange={onChangeHandler}
                  />
                  {errors.name.length > 0 && (
                    <span style={{ color: 'red', fontStyle: 'italic' }}>
                      {errors.name}
                    </span>
                  )}
                </Box>
                <Box mb={2}>
                  <CustomTextField
                    variant="standard"
                    label="Email *"
                    fullWidth
                    name={`email`}
                    onChange={onChangeHandler}
                  />
                  {errors.email.length > 0 && (
                    <span style={{ color: 'red', fontStyle: 'italic' }}>
                      {errors.email}
                    </span>
                  )}
                </Box>
                <Box mb={2}>
                  <CustomTextField
                    variant="standard"
                    label="Password * (At least 8 symbols)"
                    fullWidth
                    name={`password`}
                    onChange={onChangeHandler}
                    type={`password`}
                  />
                  {errors.password.length > 0 && (
                    <span style={{ color: 'red', fontStyle: 'italic' }}>
                      {errors.password}
                    </span>
                  )}
                </Box>

                <Box mb={2} className={classes.captchaSelect}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                    <Select
                      value={captcha}
                      onChange={handleChange}
                      label=""
                      fullWidth
                    >
                      <MenuItem value="reCaptcha">reCaptcha</MenuItem>
                      <MenuItem value="hCaptcah">hCaptcah</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box mb={4}>
                  <ReCAPTCHA sitekey="YOUR-SITE-KEY" onChange={() => {}} />
                </Box>

                <Box>
                  <CustomButton
                    variant="contained"
                    btnColor="dark"
                    onClick={registerUser}
                  >
                    Sign Up!
                  </CustomButton>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6} className={classes.hideMobile}>
                <Box className={classes.imgWrapper} textAlign="center">
                  <img src="/images/signup.png" alt="" />
                </Box>
              </Grid>
            </Grid>
            <Box mt={3}>
              <Typography variant="body1" className={classes.signUpNote}>
                <span>
                  Registration of several accounts by one person is prohibited.
                </span>
                If you are registered user, please &nbsp;
                <Link
                  href="/"
                  className={classes.authLink}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/login')
                  }}
                >
                  sign
                </Link>{' '}
                &nbsp; in using your email address. Fields marked with an
                asterisk * are required.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default SignUp
