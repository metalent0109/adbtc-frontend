import React, { VFC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha'

import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link'

import HomeNavbar from 'components/HomeNavbar'
import Footer from 'components/Footer'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/pages/authStyles'

const useStyles = makeStyles(styles)

const Login: VFC = () => {

  const classes = useStyles()

  const navigate = useNavigate()

  const [captcha, setCaptcha] = useState('reCaptcha');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCaptcha(event.target.value);
  };

  return (
    <Box>
      <HomeNavbar showLinks={false} />
      <Box className={classes.contents} pt={4} pb={5}>
        <Container maxWidth='xl'>
          <Box maxWidth={1280} mx='auto'>
            <Box display='flex' justifyContent='space-between' alignItems='center' mb={5}>
              <Box className={classes.langSection}>
                <Typography variant='h5'>
                  Sign in
                </Typography>
                <Box>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    startIcon={<img src='/images/language-icon.png' />}
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
                    <MenuItem onClick={handleClose} className={classes.langMenu}>English language</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.langMenu}>Русский язык</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.langMenu}>Idioma español</MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Box className={classes.hideMobile}>
                <Button variant='contained' className={classes.signUpBtn} onClick={() => navigate('/signup')}>
                  SIGN UP
                </Button>
              </Box>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <Box mb={2}>
                  <CustomTextField
                    variant='standard'
                    label='Enter your Email and click the button below to start'
                    fullWidth
                  />
                </Box>
                <Box mb={2}>
                  <CustomTextField
                    variant='standard'
                    label='Password'
                    fullWidth
                  />
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
                      <MenuItem value='reCaptcha'>reCaptcha</MenuItem>
                      <MenuItem value='hCaptcah'>hCaptcah</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box mb={4}>
                  <ReCAPTCHA
                    sitekey="YOUR-SITE-KEY"
                    onChange={() => {}}
                  />
                </Box>

                <Box>
                  <CustomButton variant='contained' btnColor='dark' onClick={() => navigate('/index')}>
                    Login
                  </CustomButton>
                </Box>
                <Box mt={2}>
                  <Link
                    href='/'
                    className={classes.authLink}
                    onClick={(e) => {
                      e.preventDefault()
                      navigate('/forgot_password')
                    }}
                  >
                    Forgot password
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6} className={classes.hideMobile}>
                <Box className={classes.imgWrapper} textAlign='center'>
                  <img src="/images/login.png" alt="" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default Login
