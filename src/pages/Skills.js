import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {SiPython} from 'react-icons/si'
import {DiReact, DiNodejs, DiJavascript} from 'react-icons/di'
import {FaCss3Alt} from 'react-icons/fa'



const Skills = () => {
  return (
   <>
      <div className='skill-head'>

        <h1 className='head'>Skills</h1>

      </div>

      <div className="skills">

        <AiFillHtml5 className='skills-icons' />
        <FaCss3Alt className='skills-icons' />
        <DiJavascript className='skills-icons' />
        <DiReact className='skills-icons' />
        <DiNodejs className='skills-icons' />
        <SiPython className='skills-icons' />
        
        
        
        
          


      
      </div>


      
   </>
  )
}

export default Skills