import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import Productitem from '../components/Productitem'
import { shopContext } from '../context/shopcontext'

const Collection = () => {
  let [visible,setvisible]=useState(false);
  let [products,setproducts]=useState(false);
  let[men,setmen]=useState(false);
  let[Women,setwomen]=useState(false);
  let[kids,setkids]=useState(false);
  let [top,settop]=useState(false);
  let [middle,setmiddle]=useState(false);
  let[bottom,setbottom]=useState(false);
  let dat=useContext(shopContext);

  useEffect(()=>{

    if(!men&&!Women&&!kids&&!top&&!middle&&!bottom){
      setproducts(dat.products);
      return;
    }
     let temp= dat.products;
     if(!top){
      temp.filter((p)=>{return !p.subCategory =="Topwear"})
     }
     if(!middle){
      temp.filter((p)=>{ return !p.subCategory=="Winterwear"})
     }
     if(!bottom){
      temp.filter((p)=>{ return !p.subCategory=="Bottomwear"})
     }
     if(!men)
      temp=temp.filter(p=>{return p.category!="Men"});
     if(!Women){
      temp= temp.filter((p)=>{ return p.category!="Women"})
     }
     if(!kids){
      temp=temp.filter((p)=>{return p.category!="Kids"})
     }


  },[men,Women,kids,top,middle,bottom])
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-start pt-10 gap-1 sm:gap-10 border-t border-gray-200 '>
     
      <div className='min-w-60  flex flex-col gap-5'>
      <p onClick={()=>{setvisible(!visible)}} className='text-lg font-medium  cursor-pointer sm:Text-center text-left p-0 '>FILTERS <img src={assets.dropdown_icon} className=' md:hidden rotate-90 inline size-3 align-[2px]' alt="" /></p>
      <div className={`${visible?"block":"hidden"} sm:block`}>
      <div className='p-3 border border-black'>

        <p className='text-black font-medium text-md '>CATEGORIES</p>
        <div className='text-gray-1000'>
          
          <div className='flex gap-2  font-thin'><input  type="checkbox" onClick={(()=>{setmen(!men)})} value="Men"   name="Men"/><label>Men</label></div>
          <div className='flex gap-2  font-thin'><input  type="checkbox" value="Women" onClick={()=>{setwomen(!Women)}} name="Women"/><label>Women</label></div>
          <div className='flex gap-2  font-thin'><input  type="checkbox"  value="Kids" onClick={()=>{setkids(!kids)}} name="KidsTopwear"/><label>Kids</label></div>
        </div>

      </div>
      <div className='p-3 border border-thin border-black'>
        <p className='text-black font-medium text-md '>TYPE</p>
        <div className='text-gray-1000'>
          
          <div className='flex gap-2  font-thin'><input  type="checkbox" value="Topwear" onClick={()=>{settop(!top)}} name="Topwear"/><label>Topwear</label></div>
          <div className='flex gap-2  font-thin'><input  type="checkbox" value="Bottomwear" onClick={()=>{setbottom(!bottom)}} name="Bottomwear"/><label>Bottomwear</label></div>
          <div className='flex gap-2  font-thin'><input  type="checkbox" value="Wintewear" onClick={()=>{setmiddle(!middle)}} name="Winter"/><label>Winter Wear</label></div>
        </div>

      </div>
      </div>

      </div>
      <div className='w-full '>
        <div className=' flex justify-between sm:text-2xl  mb-4 '>
          <Title first="ALL" second="COLLECTION" />
          <select className='text-[17px] bg-gray-100 h-10'>

<option value=""> SOrt by: Relevance </option>
<option value=""> SOrt by: Low to High </option>
            <option value=""> SOrt by: High to Low </option>
          </select>
        </div>
        <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {
          products&&products.map((p,index)=>{
            return <Productitem key={index} _id={p.id} image={p.image} price={p.price}Title={p.Title} />

          })        }
      </div>
      </div>
      
    </div>
  )
}

export default Collection