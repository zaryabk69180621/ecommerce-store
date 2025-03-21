import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { shopContext } from '../context/shopcontext'

const Productitem = (props) => {
    let data= useContext(shopContext);

    console.log("h",props)
  return (
    <Link to={`/products/${props._id}`}>
        <div className='h-80 overflow-hidden'>
        <img   src={props.image[0]}  className=" w-full h-full hover:scale-125 transition " alt="" />
        </div>
        <p className='pt-3 pb-1 text-small text-gray-600'> {props.title}</p>
        <p className='font-medium text-sm '>{"$"+props.price}</p>

    </Link>
  )
}

export default Productitem