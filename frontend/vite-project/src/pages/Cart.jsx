import React from 'react'
import Title from '../components/Title'
import { useContext } from 'react'
import { shopContext } from '../context/shopcontext'
const Cart = () => {

  let con= useContext(shopContext);
  console.log(con.cartItems)
  return (
    <div className=''>
    <Title styles={{justifyContent:"start",paddingTop:"30px",paddingBottom:"30px",borderBottom:"1px solid grey"}}  first="Your" second="Cart"/>
    </div>
  )
}

export default Cart