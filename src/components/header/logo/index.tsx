import React from 'react'
import { useNavigate } from "react-router-dom"
import { CustomLogo } from './index.style';

const Logo = () => {
  const navigate = useNavigate()

  const onClick = (page: string = '') => () => navigate(`/${page}`)

  return (
    <CustomLogo variant="h4" onClick={onClick()}>
      AlanWei
    </CustomLogo>
  )
}

export default Logo