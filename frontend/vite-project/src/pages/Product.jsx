import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../context/shopcontext'
 const Product = () => {
    let data=useParams()
    let cont=useContext(shopContext);
    let [product,setproduct]=useState(null);
    let [imgno,setimgno]=useState(0)
  useEffect(()=>{
    setproduct(cont.products.filter((p)=>{
      return p._id==data.id
    })[0])

console.log(product)
  },[])
  { if(product){
    return (<div className=' p-5 '>
        <div className='flex justify sm:justify-center gap-2  flex-wrap '>
        <div className='flex flex-row sm:flex-col justify-self-start mx-0 gap-2 order-2 md:order-1 sm:justify-between basis-30 '>
          {
            product.image.map((im,index)=>{ return  <img src={im} onClick={()=>{setimgno(index)}} className={'size-30'+(imgno==index?" opacity-100":" opacity-30")}></img>})
          }
        </div>
          <img  className="basis-120  order-1 md:order-2 block h-130"src={product.image[imgno]} alt="" />
          <div className='basis-140  order-3 md:order-3 h-130 bg-black'>

          </div>
        </div>

    
    </div>)}else{
      return <></>
    }
  }
}
 export default Product