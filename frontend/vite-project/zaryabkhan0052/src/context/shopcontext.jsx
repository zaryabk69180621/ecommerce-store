import  { createContext, useEffect, useReducer, useState }  from "react" ;
import {products as p} from "../assets/assets";
const shopContext= createContext();


 let ShopContextProvider=(props)=>{
    let [searchVal,setSearchVal]=useState(null);

    let[cartItems,setCartItems]=useReducer((stat,action)=>{
        let state=stat;
        if(action.type=="add"){

            let {itemId, size}=action.payload;
            console.log("bith",itemId,size)
            console.log("state",stat)
            if(state[itemId]){

                if(state[itemId][size]){
                    let temp={...stat};
                         state[itemId][size]+=1;
                         return temp;

                }
                else{
                     state[itemId][size]=1;
                return state;
                    }
            }else{

                let temp=state;
                temp[itemId]={};
                temp[itemId][size]=1
                return temp
            }

        }
        if(action.type=="reduce"){


            let temp={...stat};
            let{_id,size}=action.payload;
            if(temp[_id][size]==1){
                action.type="remove";
            }else{
                temp[_id][size]-=1;
           return temp;
            }
        }
        if(action.type=="remove"){
           let temp={...stat};
            let{_id,size}=action.payload;
            
                if(Object.keys(temp[_id]).length>1){
                    console.log("eher",temp[_id][size]);
                    delete temp[_id][size];
                }
                else{
                    delete temp[_id];
                }
            
            return temp

            


    }
    },{});


    let [products,setproducts]= useReducer((state,action)=>{

        if(action.type=="add_product"){
            return [...state,action.payload]
        
        
        }
        else if(action.type=="remove_product"){
            return state.filter((a)=>a.id!=action.payload._id)
        }
        else{
        
            return [...state]
        }
        
        },[...p]);
        useEffect(()=>{


            console.log(cartItems);
        },[cartItems])
    return (<shopContext.Provider value={{products,setproducts,searchVal,setSearchVal,cartItems,setCartItems}}>
    {
        props.children
    }
    </shopContext.Provider>);



}



export {shopContext,ShopContextProvider}


