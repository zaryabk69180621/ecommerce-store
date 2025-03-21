import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='block sm:flex justify-between flex-wrap mt-25'>
      <div className='basis-150'>
      <img src={assets.logo} className='w-60 h-15' alt="" />
      <p className='text-gray-400 text-sm'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      </div>
      <div className='basis-55 m-auto text-center  md:text-left' >
          <p className='text-black text-[25px] font-medium'>COMPANY</p>
            <ul className='text-gray-400 flex flex-col gap-2'>
              <li>    Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
            </ul>
      </div>
      <div className='basis-55 text-center m-auto md:text-left'>
      <p className='text-black text-[25px] font-medium'>COMPANY</p>
        <ul className='text-sm flex flex-col gap-3'>
          <li className='text-gray-400'>+1-000-000-0000</li>
          <li className='text-gray-400'>greatstackdev@gmail.com</li>
          <li className='text-gray-400'>Instagram</li>

        </ul>
      </div> 

    </div>
    <hr className='border border-gray-300 mt-10' />
    <p className='mt-5 text-black text-center'> Copyright 2024@ greatstack.dev - All Right Reserved.</p>
</div>
  )
}

export default Footer