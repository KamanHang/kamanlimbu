import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Menu from './component/Menu'

const App = () => {
  return (
   <>
    
      <Menu />
      <Routes>

        <Route index path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />

      </Routes>
   </>
  )
};

export default App