import React from 'react'
import Policycomponent from './Policycomponent'
import { assets } from '../assets/assets'
const Ourpolicy = () => {
  return (
    <div className='flex justify-around flex-wrap justify-center my-30 '>
        <Policycomponent title="Easy Exchange Policy" detail="We offer hassle free exchange policy"  image={assets.exchange_icon}/>
        <Policycomponent title="7 Days Return Policy" detail="We provide 7 days free return policy"  image={assets.quality_icon}/>
        <Policycomponent title="Best customer support" detail="we provide 24/7 customer support"  image={assets.support_img}/>




    </div>
  )
}

export default Ourpolicy