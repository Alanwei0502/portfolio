import React from 'react'
import { Container } from '@mui/material'
import SearchField from './SearchField'
import ArticleList from './ArticleList'
import ContentLayout from '../../layout/ContentLayout'

const ArticlePage = () => {
  return (
    <ContentLayout title={'Aritcles'}>
      <Container>
        <SearchField />
        <ArticleList />
      </Container>
    </ContentLayout>
  )
}

export default ArticlePage