import React, { Children } from 'react'
import { useEffect } from 'react'
import { shopContext } from './context/shopcontext';
import { useContext } from 'react';
function setter({children}) {
      let con= useContext(shopContext);

useEffect(()=>{
    let data= localStorage.getItem("cart"); let t=JSON.parse(data) ;con.setCartItems(t);

console.log("data is ********",data)
},[])

  return (
<>{
    children
}</>  
)
}

export default setter