import React, { useContext, useRef } from 'react'
import { CartContext } from './CartContext'
// import { useReactToPrint } from 'react-to-print';




export function CartPage() {
const {state,dispatch} = useContext(CartContext);
//   const printRef = useRef();

// const handlePrint = useReactToPrint({
//   content: () => printRef.current, // ✅ Yeh sahi hai
// });
    return (
        <>
        <div className='container mx-auto md:flex'>
            <div className=' md:w-[80%]'>
                  <h2 className='text-3xl font-bold uppercase mt-8 mb-6'>Your shoping Cart</h2>
            {state.cart.length === 0 ?(
                <p>Your Cart Is Empty</p>
            ):(
             <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {state.cart.map((item)=>(
               <div className='p-3 shadow-lg items-center text-center' key={item.id}>
                <img className='h-50 w-full rounded-md' src={item.image} alt="" />
                <h2 className='uppercase text-xl font-bold mt-3 mb-2'>{item.name}</h2>
                <p className='text-xl text-red-600 mb-3'>Price: ${item.price}</p>
                <p className='mb-4'> Quantity: {item.quantity}</p>
                <div className='flex gap-x-2'>
                <button onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:item})} className='bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded-lg text-white capitalize cursor-pointer font-bold'>Remove</button>
                <button onClick={()=>dispatch({type:"ADD_MORE",payload:item})} className='bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded-lg text-white capitalize cursor-pointer font-bold'>ADD+</button>
                <button onClick={()=>dispatch({type:"LESS_FROM",payload:item})} className='bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded-lg text-white capitalize cursor-pointer font-bold'>LESS-</button>
                </div>
               </div>
            ))}
            </div>
            )}
            </div>
           <div className='md:w-[20%]'>
            <button onClick={() => window.print()} className='text-right uppercase border bg-white text-black px-2 py-1 rounded-lg cursor-pointer shadow'>print</button>
            <div className=' bg-black text-white p-4 shadow'>
               <h2 className="text-xl font-bold mb-4 text-center shadow">Cart Summary</h2>
               {
                state.cart.map((item)=>(
                    <div className='' key={item.id}>
                        <h1>{item.name}</h1>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                         <p>Total Price: ${item.price*item.quantity}</p>
                        <hr className='mt-4 mb-4' />
                    </div>
                ))
               }
            </div>
            </div>
        </div>
        </>
    )
}
