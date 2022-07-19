import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import {
  Box
} from '@mui/material'
import { pink1, darkBlue } from '../../utils/theme'

type WaveAnimationProps = {
  isLightMode: boolean
}

const rotate = keyframes`
  0%{
    transform: translate(-50%, 0) rotateZ(0deg);
  }

  50%{
    transform: translate(-50%, -2%) rotateZ(180deg);
  }

  100%{
    transform: translate(-50%, 0) rotateZ(360deg);
  }
`

export const WaveAnimation = styled(Box) <WaveAnimationProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  overflow: hidden;

  &::before, &::after{
    content: '';
    position: absolute;
    left: 50%;
    min-width: 250vw;
    min-height: 250vw;
    background-color: ${props => props.isLightMode ? pink1 : darkBlue};
    animation: ${rotate} infinite linear;
  }

  &::before{
    bottom:15vh;
    border-radius: 45%;
    animation-duration: 15s;
  }

  &::after{
    bottom: 13vh;
    opacity: .5;
    border-radius: 47%;
    animation-duration: 15s;
  }
`

export const HelloContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  z-index: 2;

  @media (min-width: 601px) {
    max-width: 60vw;
  }

  @media (max-width: 600px) {
    max-width: 80vw;
  }
`