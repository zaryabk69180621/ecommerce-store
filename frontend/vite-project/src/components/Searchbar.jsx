import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { shopContext } from '../context/shopcontext'

const Searchbar = ({setSearch}) => {
    let dat=useContext(shopContext)
  return (
    <div className='h-20  rounded-10 w-full gap-2  bg-gray-100 flex justify-center items-center'>
        <div className='w-7/10 gap-5  border border-1 py-2  px-7 border-gray-400 rounded-full flex justify-between rounded-1'>
            <input onChange={(p)=>{dat.setSearchVal(p.target.value)}}  type="text"  className='focus:outline-none focus:border-green  block flex-grow-1'/>
            <img  className="size-5"src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>{setSearch(false);dat.setSearchVal("")}} className="size-5"src={assets.cross_icon} alt="" />

    </div>
  )
}

export default Searchbar