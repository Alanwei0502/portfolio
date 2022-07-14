import React from 'react'
import { Typography } from '@mui/material'
import { ArticleDetail } from '../../data/article-list/articleList'
import { ArticleContainer } from './Article.style'

interface Props {
  item: ArticleDetail;
}

const Article = ({ item }: Props) => {
  const date = new Date(item.date).toLocaleDateString();

  return (
    <ArticleContainer elevation={3}>
      <Typography variant="h6" component="div" gutterBottom>{item.title}</Typography>
      <Typography variant="overline" component="div" textAlign='end'>{date}</Typography>
    </ArticleContainer>
  )
}

export default Article