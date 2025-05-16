import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { CartContext } from '../pages/CartContext';
export function Navbar() {
    const[open,setopen]=useState(false);
    const {state} = useContext(CartContext);
    return (
        <>
            <nav className=' bg-white p-4 shadow-lg'>
                <div className='container mx-auto flex justify-between '>
                    <h1 className='text-3xl font-bold uppercase'>furniture</h1>
                    <ul className='md:flex hidden font-medium space-x-4 uppercase text-gray-500 pt-1'>
                        
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='/'>home</Link></li>
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='./abt' >about</Link></li>
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='./srv' >services</Link></li>
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='./cnt' >contact</Link></li>
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='./prd' >product</Link></li>
                    </ul>
                    <div className='pt-1 text-2xl  flex space-x-4'>
                       <Link to='./cart'> <FaShoppingCart className='cursor-pointer hover:text-gray-400 pt-1'/>
                       <span className="absolute top-[20px] right-[40px] bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {state.cart.length}
                        </span>
                       </Link>
                     <button onClick={()=>{setopen(!open)}} className='cursor-pointer md:hidden'>{(open)?<FaTimes/>:<FaBars/>}</button> 
                    </div>
                </div>
                {open &&(
                     <ul className='md:hidden font-medium space-y-3 mt-2 uppercase text-gray-500 pt-1'>
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='/'>home</Link>         </li>
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='./abt' >about</Link>   </li>
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='./srv' >services</Link></li>
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='./cnt' >contact</Link> </li>
                        <li className='hover:text-gray-800 cursor-pointer'><Link to='./prd' >product</Link> </li>
                 </ul>
                )}
               
            </nav>
        </>
    )
}
