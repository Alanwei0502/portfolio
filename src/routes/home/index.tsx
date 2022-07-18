import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { selectTheme } from '../../store/theme/themeSlice'
import { Box } from '@mui/material'
import welcomeLightImg from '../../assets/images/welcomeLight.jpg'
import welcomeDarkImg from '../../assets/images/welcomeDark.jpg'


const HomePage = () => {
  const mode = useAppSelector(selectTheme)
  const isLightMode = mode === 'light'
  return (
    <Box
      component="img"
      sx={{
        width: '100vw'
      }}
      alt='Welcome to AlanWei website!'
      src={isLightMode ? welcomeLightImg : welcomeDarkImg}
    />
  )
}

export default HomePage