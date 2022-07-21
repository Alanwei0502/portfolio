import styled from '@emotion/styled'
import {
  Box
} from '@mui/material'
import { orangeRed, blue } from '../../../utils/theme'


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

export const ActionButtonContainer = styled(Box)`
  margin-top: 3rem;
  text-align: center;
`