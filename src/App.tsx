import React, { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import { useAppSelector } from './store/hooks'
import { selectTheme } from './store/theme/themeSlice'
import { lightMode, darkMode } from './utils/theme'
import Header from './components/header'
import HomePage from './routes/home'
import AboutPage from './routes/about'
import ArticlePage from './routes/article'
import ProjectPage from './routes/project'

function App() {
  const mode = useAppSelector(selectTheme)
  const theme = useMemo(() => createTheme(mode === 'light' ? lightMode : darkMode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='project/*' element={<ProjectPage />} />
        <Route path='article' element={<ArticlePage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
