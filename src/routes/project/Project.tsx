import React from 'react'
import { useParams } from 'react-router-dom'
import projectList from '../../data/project-list/projectList'

const Project = () => {
  const { projectKey } = useParams();

  return (
    <>
      {projectKey
        ? projectList[projectKey].component
        : null
      }
    </>
  )
}

export default Project