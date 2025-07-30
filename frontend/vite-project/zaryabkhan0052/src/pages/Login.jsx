import React, { useEffect, useState } from 'react'


const Login = () => {
let [data,setdata]=useState(false);
let [dump,setdump]=useState(false)
useEffect(()=>{

console.log("dump yopdated")

},[dump])
useEffect(()=>{

  console.log("data yopdated")
  
  },[data])

  return (
    <div>

      <div className='btn' onClick={()=>{setdump(!dump)}}>
       dump 
      </div>
      <div className='btn' onClick={()=>{setdata(!data)}}>
       data 
      </div>
    </div>
  )
}

export default Login