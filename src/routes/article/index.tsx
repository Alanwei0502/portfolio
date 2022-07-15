import React from 'react'
import { Container } from '@mui/material'
import SearchField from '../../components/article-search'
import ArticleList from '../../components/article-list'
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