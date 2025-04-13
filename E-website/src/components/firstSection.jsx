import React from 'react'

export function FirstSection() {
    

    return (
        <>
            <section className='bg-[url(/bed.jpg)] bg-cover p-2 bg-center h-screen flex justify-center items-center'>
                <div className='bg-black opacity-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center'>
                    <h1 className='text-white text-3xl font-bold uppercase mb-4'>High quality furniture</h1>
                    <p className='text-lg text-white capitalize mb-4'>manage your home with our luxury furniture.we provide <br /> you with our best</p>
                    <button className='bg-purple-600 px-4 py-2 rounded-lg text-white capitalize cursor-pointer font-bold'>add to cart</button>
                </div>
            </section>
        </>
    )
}

