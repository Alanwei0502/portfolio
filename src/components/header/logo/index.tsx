import React from 'react'
import { useNavigate } from "react-router-dom"
import { Typography } from '@mui/material'

const Logo = () => {
  const navigate = useNavigate();

  const onClick = (page: string = '') => () => {
    navigate(`/${page}`);
  }

  return (
    <>
      {/* RWD 900px 以上 */}
      <Typography
        variant="h4"
        noWrap
        component="a"
        onClick={onClick()}
        sx={{
          mr: 5,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        AlanWei
      </Typography>

      {/* RWD 900px 以下 */}
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={onClick()}
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexGrow: 50,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        AlanWei
      </Typography>
    </>
  )
}

export default Logo