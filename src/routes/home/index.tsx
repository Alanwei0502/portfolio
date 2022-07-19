import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { selectTheme } from '../../store/theme/themeSlice'
import HomeTitle from './home-title/HomeTitle'
import { WaveAnimation } from './index.style'

const HomePage = () => {
  const mode = useAppSelector(selectTheme)
  const isLightMode = mode === 'light'

  return (
    <>
      <WaveAnimation isLightMode={isLightMode}>
        <HomeTitle />
      </WaveAnimation>
    </>
  )
}

export default HomePage