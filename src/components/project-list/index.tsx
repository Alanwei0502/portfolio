import React from 'react'
import { Grid } from '@mui/material';
import ContentLayout from '../../layout/ContentLayout';
import ProjectCard from '../project-card';
import projectList from '../../data/project-list/projectList'

const ProjectList = () => {
  const list = Object.entries(projectList);

  return (
    <ContentLayout title='Projects'>
      <Grid container spacing={2}>
        {list.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item[0]}>
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
    </ContentLayout>

  )
}

export default ProjectList