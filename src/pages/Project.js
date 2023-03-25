import React from 'react'
import './WholePage.css'
import Exp from './Exp'
import { FaGithubAlt} from 'react-icons/fa'

const Project = () => {
  return (
    <>
        <div className='skill-head'>

             <h1 className='exp-head'>Projects</h1>

        </div>
        <div className='experience'>

          <Exp
            name = "College Bus Tracking App"
            company = "Itahari International College"
            description = "College Bus Tracking App is a mobile application developed using Flutter and Node JS which focuses on solving issues faced by bus student of IIC by creating a platform where student can ergonomically view their respective college bus location so that they can be punctual for their daily classes."
            tools= "Tools used: Flutter and Node JS"
            link= {<FaGithubAlt  />}
          
          />

        </div>
        
    </>
  )
}

export default Project