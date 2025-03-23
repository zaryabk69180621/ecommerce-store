import  { createContext, useReducer, useState }  from "react" ;
import {products as p} from "../assets/assets";
const shopContext= createContext();


 let ShopContextProvider=(props)=>{
    let [searchVal,setSearchVal]=useState(null);


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
        
    return <shopContext.Provider value={{products,setproducts,searchVal,setSearchVal}}>
    {
        props.children
    }
    </shopContext.Provider>



}



export {shopContext,ShopContextProvider}


