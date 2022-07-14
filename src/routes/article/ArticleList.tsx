import React from 'react'
import { ArticleListContainer } from './ArticleList.style'
import Article from './Article'
import articleList from '../../data/article-list/articleList'


const ArticleList = () => {
  return (
    <ArticleListContainer>
      {articleList.map((item) => (
        <Article item={item} key={item.id} />
      ))}
    </ArticleListContainer>
  )
}

export default ArticleList