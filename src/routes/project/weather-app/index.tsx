import React from 'react'
import ContentLayout from '../../../layout/ContentLayout'
import projectList from '../../../data/project-list/projectList'

const WeatherApp = () => {
  const { weatherApp } = projectList

  return (
    <ContentLayout title={weatherApp.name}>
      <div>{weatherApp.description}</div>
    </ContentLayout>
  )
}

export default WeatherApp