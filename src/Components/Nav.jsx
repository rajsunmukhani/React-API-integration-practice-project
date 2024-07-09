import React from 'react'

const Nav = () => {
  return (
    <nav className='w-[20vw] h-screen bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='bg-red-100 flex items-center text-center w-[50%] p-3 text-red-500 rounded-md' href=""> +  Create New Products</a>
        <hr className='w-[80%] my-5' />
        <h1 className='w-[80%] text-2xl text-red-700 font-semibold py-5'>Categories...</h1>
        <ul className='w-[80%]'>
          <li className='my-2 flex items-center gap-3 text-l font-bold'>
            <span className='block rounded-full w-2 h-2 bg-red-500'></span>
             Category 1 
          </li>
          <li className='my-2 flex items-center gap-3 text-l font-bold'>
            <span className='block rounded-full w-2 h-2 bg-blue-500'></span>
             Category 2
          </li>
          <li className='my-2 flex items-center gap-3 text-l font-bold'>
            <span className='block rounded-full w-2 h-2 bg-green-500'></span>
             Category 3 
          </li>
        </ul>
      </nav>
  )
}

export default Nav