import React from 'react'
import ContentLayout from '../../../layout/ContentLayout'
import projectList from '../../../data/project-list/projectList'

const ToDoList = () => {
  const { toDoList } = projectList

  return (
    <ContentLayout title={toDoList.name}>
      <div>{toDoList.description}</div>
    </ContentLayout>
  )
}

export default ToDoList