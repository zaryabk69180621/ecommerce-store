import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Sub from '../components/sub'
const Contact = () => {
  return (
    <div >
        <Title first="Contact" second="Us"></Title>
        <div className='sm:flex mb-30 pt-10 gap-5 justify-center'>
          <img src={assets.contact_img} className='block h-110 w-100' alt="" />
          <div className='h-full w-100 p-5 flex flex-col justify-center gap-10'>
            <p className="text-lg text-black">Our Store</p>
            <p className='text-gray-500  text-md'>54709 Willms Station
Suite 350, Washington, USA</p>
            <p className='text-gray-500 text-md'>
              <p>Tel: (415) 555-0132
</p>
              <p>Email: admin@forever.com</p>
            </p>
                        <p className="text-lg text-black">Learn more about our teams and job openings.</p>
                        <button className='border text-black hover:text-white w-fit  duration-300 hover:bg-black py-5 px-5'>Explore Jobs</button>

          </div>
        </div>
        <Sub></Sub>
    </div>
  )
}

export default Contact