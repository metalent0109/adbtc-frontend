import React, { FC } from 'react'
import { makeStyles } from "@mui/styles";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/components/surftabModalStyles'

const useStyles = makeStyles(styles)

interface Props {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}

const CheckModal: FC<Props> = (props) => {

  const { open, handleClose, handleSubmit } = props

  const classes = useStyles()

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.wrapper} position='absolute'>
        <Box className={classes.contents}>
          <iframe src=""></iframe>
          <Typography variant='body1'>
            If nothing is displayed in the window on the top, you will not be able to advertise this link in auto-surfing and surfing in the active window.
            Please add it to regular surfing.
          </Typography>
        </Box>
        <Box p={1} display='flex' sx={{borderTop: '1px solid #ddd'}}>
          <CustomButton variant='contained' btnColor='dark' sx={{marginLeft: 'auto', marginRight: '4px'}} onClick={handleSubmit}>
            Start campaign
          </CustomButton>
          <Button sx={{color: '#000'}} onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default CheckModal

