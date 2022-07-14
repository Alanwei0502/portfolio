import React from 'react'
import { Container, Typography } from '@mui/material';

interface Props {
  title: string;
  children: JSX.Element;
}

const ContentLayout = ({ title, children }: Props) => {
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4">{title}</Typography>
      {children}
    </Container>
  )
}

export default ContentLayout