import React from 'react'
import './WholePage.css'
import Exp from './Exp'

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
            link= "https://github.com/KamanHang/CollegeBusTrackingApp"
          
          />
          <Exp
            name = "Po-Shak"
            company = "Itahari International College"
            description = "Po-Shak is an online clothing website where customer can view their desired product and make purchases and admin can easily add and edit products. This was a Coursework assignment where I got to learn about CRUD operations and concept of web development."
            tools= "Tools used: HTML/CSS and Java Servlets"
            link= "https://github.com/KamanHang/E-commerceCW"
          
          />
           <Exp
            name = "Gyalpo Bites"
            company = "Itahari International College"
            description = "Gyalpo Bites is Second Year Project, imaginary online food-delivery web application built for Gyalpo Bites Company. They deliver authentic Nepalese Cuisine. This web application helps Customer to view foods and place an order."
            tools= "Tools used: React JS and Node JS"
            link= "https://github.com/MunaSherpa/GyalpoBites"
          
          />

        </div>
        
    </>
  )
}

export default Project