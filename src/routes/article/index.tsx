import React from 'react'
import SearchField from '../../components/article-search'
import ArticleList from '../../components/article-list'
import ContentLayout from '../../layout/ContentLayout'

const ArticlePage = () => {
  return (
    <ContentLayout title='Aritcles'>
      <>
        <SearchField />
        <ArticleList />
      </>
    </ContentLayout>
  )
}

export default ArticlePage