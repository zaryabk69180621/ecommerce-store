import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { shopContext } from '../context/shopcontext'
import { assets } from '../assets/assets'
import Related from '../components/Related'
import Title from '../components/Title'
 const Product = () => {

      let url=useParams();
    let data=useParams()
    let cont=useContext(shopContext);
    let [product,setproduct]=useState(null);
    let [imgno,setimgno]=useState(0)
    let [size,setSize]=useState(null);
    console.log(product)

  useEffect(()=>{
    setproduct(cont.products.filter((p)=>{
      return p._id==data.id
    })[0])
    
    window.scrollTo(0,0)
  },[url])
  useEffect(()=>{product?setSize(product.sizes[0]):""},product)
  { if(product){
    return (<div  className=' h-[2800px] sm:h-[1200px] px-5 pt-5 '>
        <div className='  flex justify sm:justify-center sm:gap-5   flex-wrap '>
        <div className='flex flex-row sm:flex-col justify-self-start mx-0 gap-2 order-2 md:order-1 sm:justify-between basis-30 '>
          {
            product.image.map((im,index)=>{ return  <img src={im} onClick={()=>{setimgno(index)}} className={'size-30'+(imgno==index?" opacity-100":" opacity-30")}></img>})
          }
        </div>
          <img  className="basis-120 h-[300px] order-1 md:order-2 block sm:h-1/1"src={product.image[imgno]} alt="" />
          <div className='basis-140 h-[300px] flex flex-col justify-start gap-[20px] sm:h-auto order-3 md:order-3'>
         <div>
          <h1 className='text-[25px] font-[400] '>
            {
              product.name
            }
          </h1>
          <div>
          <div className='inline-flex items-center'>
              <img src={assets.star_icon} className='size-3'  alt="" />
              <img src={assets.star_icon} className='size-3'  alt="" />
              <img src={assets.star_icon} className='size-3'  alt="" />
              <img src={assets.star_icon} className='size-3'  alt="" />
              <img src={assets.star_icon} className=' size-3 opacity-[0.5]' alt="" />
          </div>
          <span className='whitespace-pre'>   (122)</span>
          </div> </div>
            <p className='font-[600]  text-[25px]' >
              $600
            </p>
            <p className='text-gray-400  text-[18px] font-[500] '>{product.description}</p>
           <div>
            <p className='text-black text-lg'> Select Size</p>
           {``
              /*
                product infor
              */
            }
            <div className='pt-3 gap-3 flex justify-start'>
              {
                product.sizes.map((b)=>{
                  return <button  style={{alignContent:"center"}} onClick={()=>{setSize(b)}} className={` block text-center size-8 bg-gray-200  ${b==size?" border border-orange-400":""}`}>{b}</button>
                })
              }
            </div>
</div>
                        <button onClick={()=>{
                          cont.setCartItems({type:"add",payload:{itemId:product._id,size}})
                        }}  className=' block bg-black text-white text-center w-fit mt-5 py-5 px-7'> Add to Cart</button>
              <hr  className='text-gray-300'/>  
              <p className=' hidden sm:block text-gray-400 pr-1/2'>
              100% Original product.

Cash on delivery is available on this product.

Easy return and exchange policy within 7 days.


              </p>
          </div>
         
        </div>
        <div className='mt-40'>
          <Title first={"Related"}  second={"Products"}/>
        </div>
        <div className='mb-10 '>
          <Related   category={product.category} subCategory={product.subCategory}/>      
    </div>
    </div>)}else{
      return <></>
    }
  }
}
 export default Product