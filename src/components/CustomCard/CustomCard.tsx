import React from 'react'
import { styled } from '@mui/material/styles';
import { CardProps } from '@mui/material';

import Card from '@mui/material/Card';

export const CustomCard = styled((props: CardProps) => (
  <Card {...props} />
))(({}) => ({
  boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%) !important',
  borderRadius: '2px'
}))
