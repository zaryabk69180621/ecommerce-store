import React from 'react'

const cartitem = (props) => {
  return (
    <div className='pb-5 border-b flez justify-between'>
        <div className="flex justify-center gap-3">
            <img src={props.image} alt="" />
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default cartitem