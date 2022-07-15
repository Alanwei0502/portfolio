import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProjectList from '../../components/project-list'
import Project from './Project'

const ProjectPage = () => {
  return (
    <Routes>
      <Route index element={<ProjectList />} />
      <Route path=':projectKey' element={<Project />} />
    </Routes>
  )
}

export default ProjectPage