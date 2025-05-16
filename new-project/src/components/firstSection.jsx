import React, { useContext } from 'react'

export function FirstSection() {


    return (
        <>
              <>
            <section className='bg-[url(/beds.jpg)] bg-cover p-2 bg-center h-screen flex justify-center items-center'>
                <div className='bg-white opacity-70 p-8 rounded-lg shadow-lg flex flex-col items-center text-center'>
                    <h1 className='text-black text-3xl font-bold uppercase mb-4'>get our luxurious furniture</h1>
                    <p className='text-lg text-black capitalize mb-4'>manage your home with our luxury furniture.we provide <br /> you with our best</p>
                    <button className='bg-purple-900 px-4 py-2 rounded-lg text-white capitalize cursor-pointer font-bold hover:bg-purple-700'>add to cart</button>
                </div>
            </section>
        </>
        </>
    )
}
