import React from 'react'
import { Grid } from '@mui/material';
import ProjectCard from '../../../components/project-card'
import projectList from '../../../data/project-list/projectList'

const ProjectPreview = () => {
  const list = Object.entries(projectList);

  return (
    <Grid container spacing={2}>
      {list.map((item) => (
        <Grid item xs={12} sm={8} md={4} key={item[0]}>
          <ProjectCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProjectPreview