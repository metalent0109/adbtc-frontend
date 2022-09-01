import React, { FC, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Layout from 'components/Layout'
import CustomTextField from 'components/CustomTextField'
import CustomButton from 'components/CustomButton'
import useAds from 'hooks/useAds'
import { toast } from 'react-toastify'
import axios from 'services/api/axios'

const SurfTopup: FC = () => {
  const [amount, setAmount] = useState('100')
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState(null)

  const { fundSatoshi, getAdsCreatedByMe, fundSuccess, isLoading, message } = useAds()
  const { id } = useParams()

  const navigate = useNavigate()

  const addSataoshi = async () => {
    if (!amount) {
      setError('Please enter an amount to fund')
      return
    }
    if (Number(amount) < 100) {
      setError('Please the minimum to fund is 100 Satoshi')
      return
    }

    const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
    
    await axios
    .get(`ads/fundSatoshi/${id}/?amount=${amount}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((satoshi) => {
      // console.log("satoshi funded")
      setSuccessMsg(satoshi.data.message);
    })
    .catch((error) => {
      const errorMsg = error.response.data.error;
      toast.error(errorMsg);
      setAmount('100');
      return error.response.data.error;
    });
  }

  useEffect(() => {
    if (successMsg) {
      toast.success(successMsg)
      navigate('/surf/projects?created=true')
    } 
  }, [navigate, successMsg])

  return (
    <Layout title="adBTC">
      <Box mb={2} mt={2}>
        {error && (
          <span
            style={{
              color: 'red',
              fontStyle: 'italic',
              marginBottom: '20px',
              marginTop: '10px',
              marginLeft: '20px',
            }}
          >
            {error}
          </span>
        )}
      </Box>
      <Typography
        variant="h4"
        sx={{ fontSize: '2.28rem', margin: '1rem 0 0.6rem 0' }}
      >
        Deposit
      </Typography>
      <Box my={4}>
        <CustomTextField
          variant="standard"
          label="Amount, satoshis (min 100 satoshis)"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Box>
      <CustomButton
        variant="contained"
        btnColor="info"
        onClick={addSataoshi}
      >
        Submit
      </CustomButton>
    </Layout>
  )
}

export default SurfTopup
