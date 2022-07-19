import styled from '@emotion/styled'
import {
  Box
} from '@mui/material'
import { orangeRed } from '../../../utils/theme'


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

export const Name = styled.span`
  font-weight: 900;
  color: ${orangeRed}
`