import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProjectPreview from './project-preview'
import ProjectShow from './project-show'

const ProjectPage = () => {
  return (
    <Routes>
      <Route index element={<ProjectPreview />} />
      <Route path=':projectId' element={<ProjectShow />} />
    </Routes>
  )
}

export default ProjectPage