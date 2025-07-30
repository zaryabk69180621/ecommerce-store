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
  let[sortby,setsortby]=useState("relevance");
  let[search,setsearch]=useState(false);
  let upstate=()=>{
console.log("***************upsate called*****");
    if(!men&&!Women&&!kids&&!top&&!middle&&!bottom){
      setproducts(dat.products);
      return;
    }
     let temp= dat.products.slice();
     let subdep=[];
     let dep=[];
     if(top){
      subdep.push("Topwear");
      temp.filter((p)=>{return !p.subCategory =="Topwear"})
     }
     if(middle){
      subdep.push("Winterwear");
     }
     if(bottom){
      subdep.push("Bottomwear")
     }
     if(men)
      dep.push("Men")
     if(Women){
      dep.push("Women")
     }
     if(kids){
      dep.push("Kids")
     }
     console.log("soppppp",subdep,"dep",dep)

     if(subdep.length==0){
      setproducts((state)=>{return dat.products.slice().filter((p)=>{
        return dep.includes(p.category);

      })})
      return ;
     }
     if(dep.length==0){
      setproducts((state)=>{return dat.products.slice().filter((p)=>{

        return subdep.includes(p.subCategory);
      })})
      return;
     }

     setproducts(()=>{return dat.products.slice().filter((p)=>{


        return subdep.includes(p.subCategory)&&dep.includes(p.category);

     })})}
  useEffect(

upstate

  ,[men,Women,kids,top,middle,bottom])
  useEffect((state)=>{
    if(dat.searchVal==""){
      setproducts(dat.products.slice());upstate()
    }
    else if(dat.searchVal!=null){
    setproducts((state)=>{    
      let temp=state.slice(); let j=temp.filter((p)=>p.name.toLowerCase().includes(dat.searchVal.toLowerCase()))
      console.log("*********allback called:",dat.searchVal,"j",j);

      return j;
    });
     
  }
  },[dat.searchVal])
  useEffect(()=>{
    if(sortby=="relevance"){
      console.log("rel");
      setproducts(dat.products);
     
      return ;
    }
    setproducts((state)=>{

      let x;
      if(sortby=="lowToHigh"){
        console.log("lth")
      x=state.slice().sort((a,b)=>{
          return a.price-b.price;
        })}
        
        if(sortby=="highToLow"){
          console.log("htl")

          x=state.slice().sort((a,b)=>{
              return b.price-a.price;
            })}

        return x;
 
      })

    
  },[sortby])
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
          <select onChange={(p)=>{setsortby(p.target.value)}} className='text-[17px] bg-gray-100 h-10'>

<option value="relevance"> SOrt by: Relevance </option>
<option value="lowToHigh"> SOrt by: Low to High </option>
            <option value="highToLow"> SOrt by: High to Low </option>
          </select>
        </div>
        <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {
          products&&products.map((p,index)=>{
            return <Productitem key={index} _id={p._id} image={p.image} price={p.price} title={p.name} />

          })        }
      </div>
      </div>
      
    </div>
  )
}

export default Collection