import React from 'react'
import { Box, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchField = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField
        fullWidth
        variant="standard"
        label="Search article title"
      />
    </Box>
  )
}

export default SearchField