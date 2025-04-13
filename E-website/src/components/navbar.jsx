import React from 'react'
import {FaShoppingCart,FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';

export function Navbar() {
    const[open,setOpen]=useState(false)
    return (
        <>
           <nav className='bg-white shadow-lg p-3'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-3xl uppercase font-bold' > E-commerce</h1>
                <ul className='md:flex hidden uppercase space-x-6 font-medium text-gray-500'>
                    <li className='hover:text-gray-700'><a href="#">home</a></li>
                    <li className='hover:text-gray-700'><a href="#">about</a></li>
                    <li className='hover:text-gray-700'><a href="#">contact</a></li>
                    <li className='hover:text-gray-700'><a href="#">services</a></li>
                </ul>
                 <div className='flex items-center space-x-4 text-2xl'>
                    <FaShoppingCart className=' hover:text-blue-500 cursor-pointer'/>
                    <button onClick={()=>{setOpen(!open)}} className=' md:hidden cursor-pointer'>{(open)?<FaTimes/>:<FaBars/>}</button>
                 </div>
            </div>
            <div>
                {open &&(
                      <ul className='md:hidden uppercase space-y-4 font-medium text-gray-500 p-1 mt-2'>
                      <li className='hover:text-gray-700'><a href="#">home</a></li>
                      <li className='hover:text-gray-700'><a href="#">about</a></li>
                      <li className='hover:text-gray-700'><a href="#">contact</a></li>
                      <li className='hover:text-gray-700'><a href="#">services</a></li>
                  </ul>
                )}
          
            </div>
          </nav>   
        </>
    )
}
