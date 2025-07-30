import React, { useContext, useRef } from 'react'
import { shopContext } from '../context/shopcontext'
const cartitem = (props) => {
let con=useContext(shopContext);

let s=props.quantity;
let ref=useRef();

  return (
    <div className='pb-5 border-b flex justify-between items-center'>
        <div className="flex justify-center gap-3">
            <img  className="size-25"src={props.image} alt="" />
            <div>

            <h1>{props.title}</h1>
             <div className='flex gap-2'>
              <p>{props.price}</p>
              <div className='py-3 px-5 rounded-full mt-2 bg-gray-400'>{props.size}</div>
             </div> 
            </div>
        </div>
        <input ref={ref} type="number" value={s}  onChange={(e)=>{
          console.log("val",e.target.value);
          console.log("statesssssssss",props.quantity);
          if(e.target.value>props.quantity){
          console.log("addition");
          (con.setCartItems({type:"add",payload:{itemId:props._id,size:props.size}})) }
          else 
          con.setCartItems({type:"reduce",payload:{_id:props._id,size:props.size}})}}
         className='block'/>
        <button className='block bg-gray-400  rounded-2xl p-4' onClick={()=>{con.setCartItems({type:"remove",payload:{_id:props._id,size:props.size}})}}>delete</button>
    </div>
  )
}

export default cartitem