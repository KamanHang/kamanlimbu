import React from 'react'
import './MenuStyle.css'
import About from '../pages/About'
import Project from '../pages/Project'
import Skills from '../pages/Skills'
// import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    
    <div className='nav-menu'>
      <div className='welcome'>
        <h1>Kaman Limbu</h1>
      </div>
      <div className='profile-img'>
        <img className='profile' alt='profilepicture' src='https://github.com/Kamanhang.png' />
      </div>
      <div className='nav-links'>
        {/* <Link to="#first">Home</Link>
        <Link to="#second">Projects</Link>
        <Link to="#third">About</Link> */}
        <a href='#resume'>About</a>
        <a href='#second'>Skills</a>
        <a href='#third'>My Projects</a>
      </div>
    </div>

    <div id='resume'>
      <div id='first'>
        <About />
      </div>
      <div id='second'>
        <Skills />
      </div>
      <div id='third'>
        <Project />
      </div>
    </div>

    </>

  )
}

export default Menu