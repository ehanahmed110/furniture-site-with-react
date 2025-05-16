import React, { useReducer } from 'react'
import { createContext } from "react";

const initials = {
 cart:[]
}
function Reducer(state,action){
  switch(action.type){
   case "ADD_TO_CART":
    const exists = state.cart.find((itm)=>itm.id === action.payload.id)
    if(exists){
       return{
           ...state,
           cart: state.cart.map((item)=>(
            item.id === action.payload.id ? ({...item, quantity: item.quantity+1}):item
           ))
        } 
    }
    else{
        return{
            ...state,
            cart:[...state.cart,{...action.payload, quantity:1}]
        }
    };
    case "REMOVE_FROM_CART":
        return{
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id)
        };
    case "ADD_MORE":
        return{
            ...state,
            cart: state.cart.map((item)=>
            item.id === action.payload.id ? {...item,quantity:item.quantity+1}:item
            )
        };
    case "LESS_FROM":
        return{
            ...state,
            cart: state.cart.map((item)=>
            item.id === action.payload.id ? {...item,quantity:item.quantity-1}:item
            )
        }    
    default:
      return state;
  }
 
}
export const CartContext = createContext();


export function CartProvider({children}) {
    
 const [state,dispatch] = useReducer(Reducer,initials)
    return (
        <>
            <CartContext.Provider value={{state,dispatch}}>
               {children}
            </CartContext.Provider>
        </>
    )
}
