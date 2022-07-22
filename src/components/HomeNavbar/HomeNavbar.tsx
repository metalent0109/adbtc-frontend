import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from 'assets/jss/components/homeNavbarStyles'

const useStyles = makeStyles(styles)

interface Props {
  showLinks: boolean
}

const HomeNavbar: FC<Props> = (props) => {

  const { showLinks } = props

  const classes = useStyles()

  const navigate = useNavigate()

  const [lang, setLang] = useState('English language')

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar>
          <Button variant='text' className={classes.navLogo} onClick={() => navigate('/')}>
            ↗ adBTC
          </Button>
          {
            showLinks && (
              <Box ml='auto' className={classes.navLinks}>
                <Tooltip
                  placement="bottom"
                  title="Visited site in the last 7 days"
                  classes={{
                    popper: classes.tooltip
                  }}
                >
                  <Button className={classes.navLink}>
                    77256 active users
                  </Button>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title="Registered users online"
                  classes={{
                    popper: classes.tooltip
                  }}
                >
                  <Button className={classes.navLink}>
                    2523 online
                  </Button>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title="Today ads viewed"
                  classes={{
                    popper: classes.tooltip
                  }}
                >
                  <Button className={classes.navLink}>
                    ~434k impressions today
                  </Button>
                </Tooltip>

                <Box display='inline-block'>
                  <Button className={classes.langBtn} onClick={handleClick}>
                    {lang}
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
                      className={classes.langMenu}
                      onClick={() => {
                        setLang('English language')
                        handleClose()
                      }}
                    >
                      English language
                    </MenuItem>
                    <MenuItem
                      className={classes.langMenu}
                      onClick={() => {
                        setLang('Русский язык')
                        handleClose()
                      }}
                    >
                      Русский язык
                    </MenuItem>
                    <MenuItem
                      className={classes.langMenu}
                      onClick={() => {
                        setLang('Idioma español')
                        handleClose()
                      }}
                    >
                      Idioma español
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            )
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default HomeNavbar
