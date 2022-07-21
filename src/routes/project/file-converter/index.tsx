import React from 'react'
import ContentLayout from '../../../layout/ContentLayout'
import projectList from '../../../data/project-list/projectList'

const FileConverter = () => {
  const { fileConverter } = projectList
  return (
    <ContentLayout>
      <div>{fileConverter.description}</div>
    </ContentLayout>
  )
}

export default FileConverter