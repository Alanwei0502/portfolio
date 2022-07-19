import {
  Card,
  Typography
} from '@mui/material'
import styled from '@emotion/styled'
// import {  pink1 } from '../../utils/theme'

export const CardContainer = styled(Card)`
  margin: 1rem 0.5rem;
  max-width: 345;
  &:hover{
  }
`

export const TypographyEllipsis = styled(Typography)`
 overflow: hidden;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 line-clamp: 2; 
 -webkit-box-orient: vertical;
`