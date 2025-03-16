import React from 'react'
import { useParams } from 'react-router-dom'
 const Product = () => {
    let data=useParams()
  return (
    <div>Product{data.productId}</div>
  )
}
 export default Product