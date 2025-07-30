import React, { useRef, useState } from 'react'
import Title  from '../components/Title'
import { useContext } from 'react'
import { shopContext } from '../context/shopcontext'
import Method from '../components/Method'
import { assets } from '../assets/assets'
const PlaceOrder = () => {
let methods=[{name:"Stripe", image:assets.stripe_logo},{name:"Razor Pay",image:assets.razorpay_logo},{
  title:"Cash on delivery",name:"COD"
}]
let ref0=useRef();
let ref1= useRef();
let ref2=useRef();
let refarray=[];
let fname=useState(null)
let email= useState(null)
let street=useState(null)
let city= useState(null)
let state= useState(null)
let zip= useState(null)
let country= useState(null);
let phone =useState(null);
refarray.push(ref0,ref1,ref2);
  let con=useContext(shopContext);
  console.log(fname[0])
  return (
    <div className=' block md:flex justify-between'>
      <div className=' basis-1/3'>
        <Title  first="Delivery" styles={{justifyContent:"start",paddingTop:"82px"}} second="Information" />
        <form action="" style={{}}>
          <div className='grid s grid-cols-2 gap-2'>
            <input onChange={(e)=>{fname[1](e.target.value)}}  placeholder='First Name'  className='border p-1 rounded-md block border-gray-300' type="text" />
            <input  onChange={(e)=>{lname[1](e.target.value)}} placeholder='Last Name' className='border p-1 rounded-md block border-gray-300' type="text" />
          <input onChange={(e)=>{email[1](e.target.value)}}  placeholder='Email Address' className='   col-span-2 border p-1 rounded-md block border-gray-300' type="text" />
                    <input onChange={(e)=>{}}  placeholder='Street' className='   col-span-2 border p-1 rounded-md block border-gray-300' type="text" />
          <input onChange={(e)=>{city[1](e.target.value)}}  placeholder='City' className='    border p-1 rounded-md block border-gray-300' type="text" />
          <input onChange={(e)=>{[1](e.target.value)}}  placeholder='State' className='   border p-1 rounded-md block border-gray-300' type="text" />
          <input onChange={(e)=>{[1](e.target.value)}}  placeholder='Zip Code' className='    border p-1 rounded-md block border-gray-300' type="text" />
          <input onChange={(e)=>{[1](e.target.value)}}  placeholder='Country' className='    border p-1 rounded-md block border-gray-300' type="text" />
          <input onChange={(e)=>{[1](e.target.value)}}  placeholder='Phone' className=' col-span-2   border p-1 rounded-md block border-gray-300' type="text" />

          </div>

        </form>
      </div>
      <div className='basis-1/3'>
        <Title styles={{paddingTop:"82px"}} first="CART" second="TOTALS" />
        <div className=' border-b-1 flex justify-between border-gray-300'>
          <p>Subtotal</p>
          <p>{con.total}</p>
        </div>
         <div className=' border-b-1 flex justify-between border-gray-300'>
          <p>Delivery</p>
          <p>{100}</p>
        </div>
         <div className=' border-b-1 flex justify-between border-gray-300'>
          <p>Net</p>
          <p>{con.total+100}</p>
        </div>
        <Title first="PAYMENT" second="METHOD" styles={{fontSize:"15px",justifyContent:"start",paddingTop:"40px"}}></Title>
        <form className='flex gap-3 '>
          {methods.map((item,index)=>{
           return ( <div onClick={()=>{console.log("hi**************")
            refarray[index].current.checked=true
           }} className='flex gap-3 items-center w-fit border  border-gray-300 rounded p-1 '>
              <input ref={refarray[index]} type="radio" name="whatever" />
             { item.title?<h1>{item.title}</h1>
          :<img src={item.image} className=''></img>}</div>)
          })
          }
        </form>
      </div>
    </div>
  )
}

export default PlaceOrder