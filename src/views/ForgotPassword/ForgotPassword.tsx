import React, { VFC, useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, sendPasswordReset } from '../../firebaseSetup'
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import * as yup from "yup";
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "redux/store"

import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

import HomeNavbar from 'components/HomeNavbar'
import Footer from 'components/Footer'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/pages/authStyles'
import { passwordReset } from 'redux/reducers/authSlice';

const useStyles = makeStyles(styles)

const ResetPasswordFormSchema = yup.object().shape({
  email: yup.string().required('Email')
})

const defaultValues = {
  email: ''
}

const ForgotPassword: VFC = () => {
  const { isSuccess, isLoading, message } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()

  const classes = useStyles()
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading) return
    if (message) {
      toast.success(message.message)
    }
    if (isSuccess) {
      navigate("/login")
    }
  }, [isSuccess, isLoading, message, navigate])

  return (
    <Box>
      <HomeNavbar showLinks={false} />
      <Box className={classes.contents} pb={5}>
        <Box className={classes.forgotHeader} display='flex' alignItems='center' justifyContent='center'>
          <Typography variant='h3' align='center'>
            Forgot password
          </Typography>
        </Box>
        <Container maxWidth='xl'>
          <Box maxWidth={1280} mx='auto'>
            <Formik
              initialValues={{ ...defaultValues }}
              validationSchema={ResetPasswordFormSchema}
              onSubmit={(values) => {
                dispatch(passwordReset(values))
              }}
            >
              {
                ({ errors, handleChange, handleSubmit, touched }) => (
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Box className={classes.forgotText} mb={4}>
                          <Typography variant='h4' align='center'>
                            Password recover
                          </Typography>
                          <Typography variant='h5' align='center'>
                            Please enter your email and we will send you instructions
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={3}>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Box mb={4}>
                          <CustomTextField
                            variant='standard'
                            label='Email'
                            fullWidth
                            onChange={handleChange}
                            error={Boolean(touched.email && errors.email)}                            
                            name='email'
                          />
                        </Box>
                        <Box mb={4} display='flex' justifyContent='center'>
                          <ReCAPTCHA
                            sitekey="YOUR-SITE-KEY"
                            onChange={() => { }}
                          />
                        </Box>
                        <Box textAlign='center'>
                          <CustomButton variant='contained' btnColor='dark' type='submit'>
                            Recover password
                          </CustomButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                )
              }
            </Formik>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default ForgotPassword
