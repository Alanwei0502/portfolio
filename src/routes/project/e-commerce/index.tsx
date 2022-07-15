import React from 'react'
import ContentLayout from '../../../layout/ContentLayout'
import projectList from '../../../data/project-list/projectList'

const ECommerce = () => {
  const { eCommerce } = projectList
  return (
    <ContentLayout title={eCommerce.name}>
      <div>{eCommerce.description}</div>
    </ContentLayout>
  )
}

export default ECommerce