import React from 'react'
import { products } from '../assets/assets'
import ProductItem from '../components/Productitem'
const Related = (props) => {
    let prd=products.filter((p)=>{

        return props.category===props.category && props.subCategory==p.subCategory;
    })
    prd=prd.slice(0,5);
    console.log(prd);

  return (
    <div className='block static gap-3 sm:flex'>
        {
              prd.map((p)=>{
               return  <ProductItem _id={p._id} title={p.name} price={p.price} image={p.image}  />
              })

        }

    </div>
  )
}

export default Related