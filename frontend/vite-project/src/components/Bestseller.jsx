import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopContext } from '../context/shopcontext'
import Productitem from './Productitem';
const Bestseller = () => {
  let data=useContext(shopContext);
  const[products,setproducts]=useState([]);
  useEffect(()=>{

  
  
  let temp=data.products.filter((p)=>{return p.bestseller})
  setproducts(temp.slice(0,5))


  },[])


  return (
    <div  className='mt-15'>

        <Title first="BEST" second="SELLER"></Title>
        <p className=' w-8/10 text-gray-500 m-auto text-center'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo asperiores voluptatum, ratione animi necessitatibus atque rem eos enim, vero ipsa et aut accusantium suscipit eligendi cupiditate repellat dicta alias?</p>        
        <div className=' mt-10 grid  gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
          {products.map((p,index)=>{
            return <Productitem image={p.image} _id={p._id} title={p.name} price={p.price}></Productitem>

          })}
        </div>

    </div>
  )
}

export default Bestseller