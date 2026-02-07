import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../navigation/Navigation'

const LandingPage = () => {
  return (
    <Grid container size={{ xs: 12 }} className="px-5 lg:px-36 justify-between">
        <Grid size={{ xs: 0, lg: 2.5 }} className="w-full lg-block relative">
            <Navigation />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }} className="w-full lg-block relative">
            <p className='text-center'>middle part</p>
        </Grid>
        <Grid size={{ xs: 0, lg: 3 }} className="w-full lg-block relative">
            <p className='text-center'>middle part</p>
        </Grid>
    </Grid>
  )
}

export default LandingPage