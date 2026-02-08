import { Grid } from '@mui/material'
import Navigation from '../navigation/Navigation'
import RightPart from '../right-part/RightPart'
import { Outlet, Route, Routes } from 'react-router'

const LandingPage = () => {
  return (
    <Grid container size={{ xs: 12 }} className="px-5 lg:px-36 justify-between">
        <Grid size={{ xs: 0, lg: 2.5 }} className="w-full lg-block relative">
            <Navigation />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }} className="w-full lg-block relative px-5 lg:px-9">
            <Outlet />
        </Grid>
        <Grid size={{ xs: 0, lg: 3 }} className="w-full lg-block relative">
            <RightPart />
        </Grid>
    </Grid>
  )
}

export default LandingPage