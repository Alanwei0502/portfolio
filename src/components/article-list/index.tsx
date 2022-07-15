import React from 'react'
import { ArticleListContainer } from './index.style'
import ArticleCard from '../../components/article-card'
import articleList from '../../data/article-list/articleList'


const ArticleList = () => {
  return (
    <ArticleListContainer>
      {articleList.map((item) => (
        <ArticleCard item={item} key={item.id} />
      ))}
    </ArticleListContainer>
  )
}

export default ArticleList