import React from 'react'
import {
  Typography,
  Box
} from '@mui/material'
import { HelloContainer, Name } from './HomeTitle.style'

const HomeTitle = () => {
  return (
    <HelloContainer>
      <Box>
        <Box sx={{ mb: 5 }}>
          <Typography variant='h3'>Hi, I'm <Name>Alan</Name></Typography>
          <Typography variant='h5' align='right'>Frontend Developer</Typography>
        </Box>
        <Typography variant='h6'>Focus on eye-catching websites with a good user experience.</Typography>
      </Box>
    </HelloContainer>
  )
}

export default HomeTitle