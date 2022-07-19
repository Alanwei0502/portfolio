import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { orangeRed } from '../../../utils/theme'

export const CustomLogo = styled(Typography)`
  display: flex;
  margin-right: 5;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: .3rem;
  color: ${orangeRed};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  
  @media (max-width: 900px) {
    flex-grow: 50
  }
`