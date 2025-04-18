import React from 'react'
import { products } from '../assets/assets'
const Related = (props) => {
    let prd=products.filter((p)=>{

        return props.category===props.category && props.subCategory==p.subCategory;
    })
    prd=prd.slice(0,5);
    console.log(prd);

  return (
    <div>
        {
            

        }

    </div>
  )
}

export default Related