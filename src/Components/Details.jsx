import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (

    <div className='w-full h-screen'>
      <div className='w-[75%] h-screen flex items-center m-auto gap-48'>
        <div className='h-content flex justify-center gap-36'>
          <img className='w-[30%] h-[60%] object-cover' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
          <div className='content flex flex-col gap-5 w-[40%] py-5'>
            <h1 className='text-4xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <h3 className='text-zinc-400 font-semibold text-2xl'>Category : Men's Clothing</h3>
            <h2 className='text-6xl font-semibold'>$ 109.95</h2>
            <p className='text-xl text-zinc-700'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <div className="buttons flex gap-10 w-full py-8 flex">
              <Link className='border border-blue-200 text-blue-500 text-center w-24 py-2'>Edit</Link>
              <Link className='border border-red-200 text-red-500 text-center w-24 py-2'>Delete</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default Details