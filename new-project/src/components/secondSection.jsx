import React from 'react'
const products=[
    {
        id:1,
        name:'wood chair',
        price:'$150',
        image:'/chairs-1.jpg'
    },
    {
        id:2,
        name:'dinning table',
        price:'$700',
        image:'/dinning-table-1.jpg'
    },
    {
        id:3,
        name:'comfort sofa',
        price:'$550',
        image:'/sofa.jpg'
    },
    {
        id:4,
        name:'comfort bed',
        price:'$450',
        image:'/beds-1.jpg'
    },
]

export function SecondSection() {
    

    return (
        <>
           <section className='container mx-auto'>
            <h2 className='text-center text-3xl font-bold uppercase mt-8 mb-6'>our feature products</h2>
            <div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products.map((items)=>(
                    <div className='p-3 shadow-lg items-center text-center'>
                     <img className='h-50 w-full rounded-md' src={items.image} alt="" />
                     <h2 className='uppercase text-xl font-bold mt-3 mb-2'>{items.name}</h2>
                     <p className='text-xl text-red-600 mb-3'>{items.price}</p>
                     <button className='bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded-lg text-white capitalize cursor-pointer font-bold'>add to cart</button>
                    </div>
                ))}
            
            </div>
           </section>
        </>
    )
}

