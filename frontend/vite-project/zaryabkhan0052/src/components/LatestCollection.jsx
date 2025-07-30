import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopcontext'
import Title from './Title';
import Productitem from './Productitem';
const LatestCollection = () => {

    let data=useContext(shopContext);
    let[products,setproducts]=useState([]);
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState(false);

    
    useEffect(()=>{
      setproducts(data.products.slice(0,10))
      console.log("in lates",products)

    },[])


  return (
    <>
    <div className='mt-30  lg:mt-10 text-center'>
      <Title first="LATEST" second="COLLECTION"></Title>
      <p className='w-3/4 m-auto text-small font-mideium text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam dicta libero quia facere rem exercitationem. Ipsa minima distinctio reprehenderit incidunt iste. Quos, laborum ipsam cum quae debitis error in.</p>
      </div>
      <div className='grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 '>
      {

        products.map((p)=>{

           return <Productitem title={p.name} image={p.image} _id={p._id} price={p.price}  />
        })


      }
      </div>
       </>

  )
}

export default LatestCollection