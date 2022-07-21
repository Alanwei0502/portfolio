import React from 'react'
import { Typography, Box } from '@mui/material'
import ContentLayout from '../../layout/ContentLayout'
import { StyleTitle } from '../../components/style-title/index.style'
import bulldog from '../../assets/images/bulldog.jpeg'

const AboutPage = () => {
  return (
    <ContentLayout>
      <>
        <Typography variant='h3'><StyleTitle>About Me</StyleTitle></Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <Typography variant='h6'>Hello! My name is Alan Huang. I am a self-teach front-end developer addicted to beautiful interfaces and friendly user experience.</Typography>
            <Typography variant='h6'>A well-organized and communicative person, problem-solver, and easy-going colleague with high attention to detail.</Typography>
            <Typography variant='h6'>Experienced in JavaScript-based programming, especially React and Redux, as well as TypeScript.</Typography>
          </Box>
          <Box>
            <img src={bulldog} width={400} />
          </Box>
        </Box>
      </>
    </ContentLayout>
  )
}

export default AboutPage