import React from 'react'
import { assets } from '../assets/assets'

export const Hero = () => {
  return (
    <div className=' flex flex-col sm:flex-row lg:h-170 h-100 md-130   border w-8/10 mx-auto mt-[20px] border-gray-400'>
        <div className='w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0'>
                <div className=' text-[#414141]'>
                    <div className='flex gap-[2px] justify-center items-center'>
                        <p className='w-8 h-[2px] md:w-11 bg-[#414141]'></p>
                        <p className=' font-medium text-small md:text-base'>OUR BESTSELLERS</p>

                    </div>
                    <div className=' prata-regular text-3xl sm:py-3 md:text-5xl'>
                    LATEST ARRIVALS

                    </div>  
                    
                    <div className='flex justify-center items-center font-medium'> <p>SHOP NOW</p> 
                        <div className=' bg-gray-400 w-10 md:w-12 h-[2px]'></div>
                       </div>
                </div>
        </div>
        <img src={assets.hero_img} className='w-full sm:w-1/2 block'/>
        </div>
  )
}
