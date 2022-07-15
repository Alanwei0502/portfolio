import React from 'react'
import { Box } from '@mui/material'
import welcomeImage from '../../assets/images/welcome.jpg'

const HomePage = () => {
  return (
    <Box
      component="img"
      sx={{
        width: '100vw'
      }}
      alt='Welcome to AlanWei website!'
      src={welcomeImage}
    />
  )
}

export default HomePage