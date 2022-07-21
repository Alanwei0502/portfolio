import React from 'react'
import { Container } from '@mui/material';

interface Props {
  children: JSX.Element;
}

const ContentLayout = ({ children }: Props) => {
  return (
    <Container sx={{ mt: 10 }}>
      {children}
    </Container>
  )
}

export default ContentLayout