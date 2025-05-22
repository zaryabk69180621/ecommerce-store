import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    
    <div>
      <Title first="About" second="Us"/>
      <div className='flex gap-5 pt-5'>
        <img src={assets.about_img} className='block h-150' alt="" />
        <div className=' text-lg flex flex-col gap-10 justify-center'>
          <p>
          Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.

          </p>
          <p>

Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.

          </p>
          <h1 className='font-xl font-bold'>Our Mission</h1>
          <p>
          Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </div>
        
  )
}

export default About