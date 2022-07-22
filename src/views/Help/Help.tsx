import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Link from '@mui/material/Link'

import Layout from 'components/Layout'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#fff',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Help: FC = () => {

  const navigate = useNavigate()

  const [expanded, setExpanded] = useState<string | false>(false);
  const [withdrawal, setWithdrawal] = useState<string | false>(false)
  const [advertising, setAdvertising] = useState<string | false>(false)
  const [about, setAbout] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Layout title='adBTC'>
      <Box mt={2} mb={1}>
        <Typography variant='h5' sx={{ fontSize: '1.64rem' }}>
          Please, select the category of your problem:
        </Typography>
      </Box>

      <Box>
        <Accordion expanded={expanded === 'withdrawal'} onChange={handleChange('withdrawal')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant='body1' sx={{fontWeight: '700'}}>Withdrawal of funds</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Accordion expanded={withdrawal === 'withdrawal-1'} onChange={() => setWithdrawal(withdrawal === 'withdrawal-1' ? false : 'withdrawal-1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='body1' sx={{fontWeight: '700'}}>No funds at wallet after withdrawal</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>
                    Withdrawal of funds from the site occurs within 3 working days, and then everything depends on the bitcoin network load
                    (the more network is loaded, the longer the transaction is confirmed)
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={withdrawal === 'withdrawal-2'} onChange={() => setWithdrawal(withdrawal === 'withdrawal-2' ? false : 'withdrawal-2')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='body1' sx={{fontWeight: '700'}}>I've got amount less than requested</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>
                    We are very accurate and don't take any fees. May be your wallet not showing 0 at the end of BTC amount.
                    100 000 000 satoshis = 1 BTC, that is why 0.0001 BTC is equal to 0.00010000 BTC
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={withdrawal === 'withdrawal-3'} onChange={() => setWithdrawal(withdrawal === 'withdrawal-3' ? false : 'withdrawal-3')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='body1' sx={{fontWeight: '700'}}>What is the minimum amount for withdrawal?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>
                    to any Bitcoin address - 50000 Satoshis, to FaucetPay - 500 Satoshis, WBTC (Polygon) - 5000 Satoshis.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'advertising'} onChange={handleChange('advertising')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant='body1' sx={{fontWeight: '700'}}>Advertising</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Accordion expanded={advertising === 'advertising-1'} onChange={() => setAdvertising(advertising === 'advertising-1' ? false : 'advertising-1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='body1' sx={{fontWeight: '700'}}>What is Ad Balance?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>
                    It is balance for advertisers, which is used for promotion of advertisers links.
                    It is not impossible to withdraw fund from this ad balance. Also it is used to buy refferals at ref market.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'about'} onChange={handleChange('about')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant='body1' sx={{fontWeight: '700'}}>About adBTC</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Accordion expanded={about === 'about-1'} onChange={() => setAbout(about === 'about-1' ? false : 'about-1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='body1' sx={{fontWeight: '700'}}>Is this site legit?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>
                    Yes. &nbsp;
                    <Link href='https://adbtc.top/info/payments' underline='none'>Here</Link>&nbsp;
                    you can see the payment proofs
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={about === 'about-2'} onChange={() => setAbout(about === 'about-2' ? false : 'about-2')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='body1' sx={{fontWeight: '700'}}>What is rating?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>
                    The higher the rating - the more you can earn on the site.
                    The advertiser can filter visitors in surfing by rating, for example, you can display a link only to users with a rating of 1 or higher.
                    Also the frequency of captcha at surfing depends on the rating.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={about === 'about-3'} onChange={() => setAbout(about === 'about-3' ? false : 'about-3')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='body1' sx={{fontWeight: '700'}}>I need to change account password</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>
                    <Link
                      href='/'
                      underline='none'
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/forgot_password')
                      }}
                    >
                      Please follow this link
                    </Link>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={about === 'about-4'} onChange={() => setAbout(about === 'about-4' ? false : 'about-4')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='body1' sx={{fontWeight: '700'}}>Can I change registered email address?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>
                    No, it is not possibe.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Layout>
  )
}

export default Help
