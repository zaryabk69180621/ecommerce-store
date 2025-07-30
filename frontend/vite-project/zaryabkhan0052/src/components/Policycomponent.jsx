import React from 'react'

const Policycomponent = (props) => {
  return (
    <div className='w-100 text-center flex flex-col gap-5  group'>
        <img className='m-auto group-hover:rotate-y-50 transition' src={props.image} alt="" />
         <p className='text-black font-medium'>{props.title}</p>   
         <p className='text-gray-400'>{props.detail}</p>   


    </div>
  )
}

export default Policycomponent