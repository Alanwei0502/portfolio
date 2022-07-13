import React from 'react'
import { useParams } from 'react-router-dom'
import projectList from '../../../data/project-list/projectList'

const ProjectShow = () => {
  const { projectId } = useParams()

  return (
    <>
      {projectId
        ? projectList[projectId].component
        : null
      }
    </>
  )
}

export default ProjectShow