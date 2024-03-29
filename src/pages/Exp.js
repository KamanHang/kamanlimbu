import React from 'react'
import './Exp.css'
import { FaGithubAlt} from 'react-icons/fa'

const Exp = ({name, company, description, tools, link}) => {
  return (
    <>
        
        
        <div className='card'>

            <h2 className='project-name'>{name}</h2>
            <h3 className='company-name'>{company}</h3>
            <p className='project-desc'>{description}</p>
            <p className='project-tools'>{tools}</p>
            <a className='project-link' href={link} ><FaGithubAlt  /></a>

        </div>


        
    </>
  )
}

export default Exp