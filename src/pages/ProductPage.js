import { Container, Typography } from '@mui/material';
import React from 'react'
import {Products} from '../components/Products'

export function ProductPage() {
  return (
    <>
      <Container color="secondary" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom:"2rem"}}>
        <Typography variant="h2" color="secondary">Products</Typography>
        <Products />
      </Container>
    </>
  )
}