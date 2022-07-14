import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@mui/material'
import { CardContainer, TypographyEllipsis } from './index.style'
import { ProjectDetail } from '../../data/project-list/projectList'

interface Props {
  item: [string, ProjectDetail];
}

const ProjectCard = ({ item }: Props) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(item[0]);
  }

  return (
    <CardContainer raised key={item[0]} sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onClickCard}>
        <CardHeader title={item[1].name} />
        <CardMedia
          component="img"
          height="150"
          image={item[1].image}
          alt={item[1].name}
        />
        <CardContent>
          <TypographyEllipsis>{item[1].description}</TypographyEllipsis>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  )
}

export default ProjectCard