import React from 'react'

const Title = (props) => {
  console.log("__________________",props.styles)
  return (
    <div  style={props.styles}className={'flex  items-center mb-3 justify-center gap-2 text-[40px]'}>
        <p className='text-gray-500'>{props.first} <span className='text-black font-medium'>{props.second}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>

    </div>)
}

export default Title