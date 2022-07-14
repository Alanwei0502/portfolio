import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProjectPreview from './ProjectPreview'
import Project from './Project'

const ProjectPage = () => {
  return (
    <Routes>
      <Route index element={<ProjectPreview />} />
      <Route path=':projectKey' element={<Project />} />
    </Routes>
  )
}

export default ProjectPage