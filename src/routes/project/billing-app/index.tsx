import React from 'react'
import ContentLayout from '../../../layout/ContentLayout'
import projectList from '../../../data/project-list/projectList'


const BillingApp = () => {
  const { billingApp } = projectList
  return (
    <ContentLayout title={billingApp.name}>
      <div>{billingApp.description}</div>
    </ContentLayout>
  )
}

export default BillingApp