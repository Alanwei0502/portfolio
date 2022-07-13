import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  // IconButton
} from '@mui/material'
import styled from '@emotion/styled'
import { ProjectDetail } from '../../data/project-list/projectList'

interface Props {
  item: [string, ProjectDetail];
}

const CardContainer = styled(Card)`
  margin: 1rem 0.5rem;
`

const ProjectCard = ({ item }: Props) => {
  return (
    <CardContainer raised key={item[0]} sx={{ maxWidth: 345 }}>
      <CardHeader title={item[1].name} />
      <CardMedia
        component="img"
        height="150"
        image={item[1].image}
        alt={item[1].name}
      />
      <CardContent>
        <Typography noWrap>{item[1].description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CardContainer>
  )
}

export default ProjectCard