import {
  Typography
} from '@mui/material'
import styled from '@emotion/styled'

type RWDTitleProps = {
  fz: string;
  max: string;
}

export const RWDTypography = styled(Typography) <RWDTitleProps>`
  font-size: max(${props => props.fz}, ${props => props.max});
`;