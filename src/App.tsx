import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import HomePage from './routes/home'
import AboutMePage from './routes/about'
import ArticlePage from './routes/article'
import ProjectPage from './routes/project'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='project/*' element={<ProjectPage />} />
        <Route path='article' element={<ArticlePage />} />
        <Route path='about' element={<AboutMePage />} />
      </Routes>
    </div>
  )
}

export default App
