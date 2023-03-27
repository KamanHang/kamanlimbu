import React from 'react'
import "./WholePage.css"
// import {FcHome} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import {FaHome, FaGithubAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

const About = () => {
  return (
    <>

    <div className='my-name'>
      {/* <h1 className='learning-quote'><i>"Learning Never Exhausts the Mind." Leonardo da Vinci (1452-1519)</i></h1> */}
      <h1 className='name'>Hello Everyone!</h1>
      {/* <h1 className='name-one'>Kaman Limbu</h1>s */}
      <div className='profile-img-home'>
        <img className='profile-home' alt='profilepicture' src='https://github.com/Kamanhang.png' />
      </div>
      
      <div className='details-min'>
        <div className='icon-img'>
          <FaHome className='icons' />
        </div>
        <div className='info'>
          Itahari
        </div> 
        <div className='icon-img'>
          <MdEmail className='icons' />
        </div>
        <div className='info'>
          Kamanhangshrong@gmail.com
        </div>
      </div>
      
    </div>

    

    <div className='quotes'>
      <p>
       A fresh Web and Mobile Application Developer with an inquisitive mind thriving to create a change with knowledge and experience gained. <br></br><br></br>
       I, welcome everyone on my personal blog, where I showcase the outcomes of my enthusiasm.
       </p>
    </div>

    

    <div className="social-media">

      <div className='social'>

        <AiFillLinkedin className='social-icons' />

        <Link to="https://github.com/KamanHang"><FaGithubAlt className='social-icons' /></Link>

        <Link to="https://www.instagram.com/kamannlimbuu/"><AiFillInstagram className='social-icons' /></Link>

        <Link to="https://www.facebook.com/kaman.hangshrong"> <AiFillFacebook className='social-icons' /> </Link>
      </div>

      <div className='details'>
        <div className='icon-img'>
          <FaHome className='icons' />
        </div>
        <div className='info'>
          Itahari · Province 1 · Nepal
        </div> 
        <div className='icon-img'>
          <MdEmail className='icons' />
        </div>
        <div className='info'>
          Kamanhangshrong@gmail.com
        </div>
      </div>

    </div>

      

    
    
     
    </>
  )
}

export default About
