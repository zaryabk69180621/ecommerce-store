import React from 'react'

function Method({name,image,title,...props}) {
  console.log(image)
  return (
    <div className='flex p-10 border border-gray-300 w-20 justify-between' >
<input type="radio" className="block" />
        {image?<img className=' h-25 w-50' src={image} alt="idk" />
        :<h1>{title}</h1>}</div>
  )
}

export default Method