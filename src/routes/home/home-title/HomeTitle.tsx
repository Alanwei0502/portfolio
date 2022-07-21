import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button
} from '@mui/material'
import { HelloContainer, ActionButtonContainer } from './HomeTitle.style'
import { StyleTitle } from '../../../components/style-title/index.style'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { RWDTypography } from '../../../components/rwd-typography'

const HomeTitle = () => {
  const navigate = useNavigate();

  const onCheckProjects = () => {
    navigate(`/Project`)
  }

  return (
    <HelloContainer>
      <Box>
        <RWDTypography fz='6vw' max='44px' fontWeight={900}>Hi, I'm <StyleTitle>Alan</StyleTitle></RWDTypography>
        <RWDTypography fz='2vw' max='26px' align='right'>Frontend Developer</RWDTypography>
        <RWDTypography fz='1.5vw' max='20px' marginTop={3}>Focus on eye-catching websites with a good user experience.</RWDTypography>
        <ActionButtonContainer>
          <Button
            variant='outlined'
            endIcon={<ArrowRightAltIcon />}
            onClick={onCheckProjects}
          >
            Check out my projects!
          </Button>
        </ActionButtonContainer>
      </Box>
    </HelloContainer >
  )
}

export default HomeTitle