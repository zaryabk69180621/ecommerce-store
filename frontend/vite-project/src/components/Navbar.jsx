import {React, useState } from 'react'
import {NavLink,Link} from 'react-router-dom' 
import {assets} from '../assets/assets'
const Navbar = () => {
  let[visible,setVisible]= useState(false);
  return (
    <div  className=' w-full  p-5 flex justify-between h-20 '>
    <div>
        <Link to="/"><img src={assets.logo}></img></Link>
    </div>
    <div className='lg:flex  hidden md:gap-5 lg:gap-10 items-center text-gray-600'>
         <div> 
              
              <NavLink  className="  cursor-pointer"to="/">HOME
                            <hr id='num'  className='hidden w-2/4 m-auto bg-black'/>
              </NavLink> 
              </div>
          <div>     
              <NavLink className='cursor-pointer' to="/Collection">COLLECTION
              <hr  className='bg-gray-700 w-2/4 m-auto hidden'/>
              </NavLink>
              
          </div>   
          <div>  <NavLink className='cursor-pointer' to="/About">ABOUT    
                      <hr  className='w-2/4 bg-black m-auto hidden'/>
                  </NavLink>
          </div>
          <div>
              <NavLink className='cursor-pointer' to="/Contact">CONTACT
                            <hr className='w-2/4 bg-black m-auto hidden' />
              </NavLink>
          </div>  
            </div> 
     <div className='flex justify-end gap-5 sm:items-center items-end'>
        <img src={assets.search_icon} className='w-5 h-5 cursor-pointer'  alt="" />
        <div className='group relative'>
        <img src={assets.profile_icon} className='cursor-pointer w-5 h-5'/>
        <div className='flex   hidden group-hover:block flex-col w-33 bg-slate-100 text-gray-600 justify-between items-center py-5 rounded-lg px-5  justify-between   left-[-120px]  bottom-[-110px] absolute hidden group-hover:block'>
            <p className='hover:text-black cursor-pointer'> MY PROFILE</p>
            <p className='hover:text-black cursor-pointer'> ORDERS</p>
            <p className='hover:text-black cursor-pointer'>LOGOUT</p>
        </div>
        </div>
        <Link  to="/cart" className='relative'>
        <img src={assets.cart_icon}  className="cursor-pointer w-5 h-5"alt="" />
        <div  className='absolute bottom-0 right-[-5px] rounded-full bg-black text-white text-center font-bold text-[8px] w-3 h-3'>10</div>
        </Link>
        <img  onClick={()=>{setVisible(true)}} src={assets.menu_icon} className=' h-5 cursor-pointer lg:hidden sm:self-center self-end  block ' alt="" />
        <div className={`h-full bg-white transition-[width] duration-[2s] ease-in-out  absolute top-0 left-0 bottom-0 ${visible?"w-full": "w-0 hidden"}`}>
          <div className="flex flex-col    text-grey-600">
              <div className="flex gap-3 items-center p-3  cursor-pointer" onClick={()=>{setVisible(false)}}>
                <img src={assets.dropdown_icon} className=" h-5 w-4 rotate-180 " alt="" />
                <p className=""> Back</p>
              </div>
              <NavLink onClick={()=>{setVisible(false)}} className="p-2  border-[0.5px] text-center border-gray-200 hover:bg-black hover:text-white"   to="/">
                HOME
              </NavLink>
              <NavLink onClick={()=>{setVisible(false)}}  className="p-2  border-[0.5px] text-center border-gray-200  hover:bg-black hover:text-white" to="/Contact">
                CONTACT
              </NavLink><NavLink onClick={()=>{setVisible(false)}} className="p-2  border-[0.5px] text-center border-gray-200  hover:bg-black hover:text-white"  to="/Collection">
                COLLECTION
              </NavLink><NavLink onClick={()=>{setVisible(false)}}  className="p-2 t border-[0.5px] text-center border-gray-200  hover:bg-black hover:text-white" to="/About">
                ABOUT
              </NavLink>

          </div>
        </div>
     </div>  
    </div>
  )
}

export default Navbar