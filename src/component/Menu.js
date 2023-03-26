import React from 'react'
import './MenuStyle.css'
import About from '../pages/About'
import Project from '../pages/Project'
import Skills from '../pages/Skills'
import Certificates from '../pages/Certificates'
import { GiHamburgerMenu } from 'react-icons/gi';
// import Experience from '../pages/Experience'
// import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    
    <div className='nav-menu'>
      <div className='welcome'>
        <h1>Kaman Limbu</h1>
        <GiHamburgerMenu className='hamburger' />
      </div>
      <div className='profile-img'>
        <img className='profile' alt='profilepicture' src='https://github.com/Kamanhang.png' />
      </div>
      <div className='nav-links'>
        {/* <Link to="#first">Home</Link>
        <Link to="#second">Projects</Link>
        <Link to="#third">About</Link> */}
        

        <a href='#resume'>About</a>
        <a href='#second'>My Projects</a>
        <a href='#third'>Certificates</a>
        <a href='#fourth'>Skills</a>
      </div>
    </div>

    <div id='resume'>
      <div id='first'>
        <About />
      </div>
      <div id='second'>
        <Project />
      </div>
      <div id='third'>
        <Certificates />
      </div>
      <div id='fourth'>
        <Skills />
      </div>
      
    </div>

    </>

  )
}

export default Menu