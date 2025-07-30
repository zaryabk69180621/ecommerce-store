import React from 'react'
import Title from '../components/Title'
import { useContext } from 'react'
import { shopContext } from '../context/shopcontext'
import Cartitem from '../components/cartitem'
const Cart = () => {

  let con= useContext(shopContext);
  let allitems=con.products;
  console.log("so:",con.cartItems)
  console.log("dah", Object.keys(con.cartItems)[0]);
  let total=0;
  con.cartItems?Object.keys(con.cartItems).forEach(element => {
    let ind=0;
    allitems.forEach((e)=>{
      if(e._id==element){
      console.log("comparing:",e.price,element);

        ind+=e.price;
       
      }
    })

 let quantity=0;

              console.log("t is ******************************:",con.cartItems[element]);

        let t=Object.keys(con.cartItems[element]);
       
        t.forEach((q)=>{
          quantity+=con.cartItems[element][q];

        })
        ind*=quantity;
    total+=ind;


  }):"";
  return (
    <div className=''>
    <Title styles={{justifyContent:"start",paddingTop:"30px",paddingBottom:"30px",borderBottom:"1px solid grey"}}  first="Your" second="Cart"/>
    <div>
      {
        
        
        Object.keys(con.cartItems).map((element)=>{
            let obj=con.products.filter((e)=>{return e._id==element})[0];
          return (Object.keys(con.cartItems[element]).map((el)=>{
            return <Cartitem _id={obj._id} title={obj.name} image={obj.image[0]} size={el} quantity={con.cartItems[element][el]}  />
          }))
        })
      }
    </div>
      <div>
        <Title first="CART" second="TOTALS" styles={{fontSize:"30px",marginTop:"30px"}}></Title>
        <div className=' w-100 m-auto'>
        <div className='flex justify-between'>
          <div>Sub Total</div><div>{total}</div>
        </div>
 <div className='flex justify-between'>
          <div>Deilvery</div><div>{100}</div>
        </div>
 <div className='flex justify-between'>
          <div>Sub Total</div><div>{total+100}</div>
        </div>
         <div className='flex justify-center p-2 text-white mt-3 bg-black'>
          <div>Checkout</div>
        </div>

        </div>

      </div>

    </div>
  )
}

export default Cart