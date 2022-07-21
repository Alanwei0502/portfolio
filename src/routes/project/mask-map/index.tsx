import React from 'react'
import ContentLayout from '../../../layout/ContentLayout'
import projectList from '../../../data/project-list/projectList'

const MaskMap = () => {
  const { maskMap } = projectList
  return (
    <ContentLayout>
      <div>{maskMap.description}</div>
    </ContentLayout>
  )
}

export default MaskMap