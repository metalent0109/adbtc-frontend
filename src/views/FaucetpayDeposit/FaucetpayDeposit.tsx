import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Box from '@mui/material/Box'

import Layout from 'components/Layout'
import CustomButton from 'components/CustomButton'
import CustomTextField from 'components/CustomTextField'

import  useAuth  from 'hooks/useAuth'


const FaucetpayDeposit: FC = () => {

  const [step, setStep] = useState(0)
  const [depositAmount, setDepositAmount] = useState('')

  const {isDeposited, depositFund} = useAuth()
  
  const navigate = useNavigate()

  const deposit = () => {
    depositFund(depositAmount);
  }

  useEffect(() => {
    if(isDeposited) {
      toast.success("Successfully deposited!")
      navigate('/surf/projects')
    }
  }, [navigate, isDeposited])

  return (
    <Layout title='Deposit using FaucetPay'>
      {
        step === 0 ? (
          <>
            <Box mt={2}>
              <CustomTextField
                variant='standard'
                label='Amount in satoshis'
                fullWidth
                sx={{ marginBottom: '2rem' }}
                onChange={(e) => setDepositAmount(e.target.value)}
                value={depositAmount}
                inputProps={{
                  type: 'number'
                }}
              />
            </Box>
            <Box mb={4}>
              <CustomButton variant='contained' btnColor='info' onClick={() => setStep(1)}>
                continue
              </CustomButton>
            </Box>
          </>
        ) : (
          <CustomButton variant='contained' btnColor='success' onClick={() => {
            deposit()
          }}>
            pay
          </CustomButton>
        )
      }
    </Layout>
  )
}

export default FaucetpayDeposit

//href='https://faucetpay.io/merchant/webscr'
