import React from 'react'

const App = () => {
  return (
    <div className='flex'>
      <nav className='w-[20vw] h-screen bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='bg-red-100 flex items-center justify-center w-[50%] p-5 text-red-500 rounded-md' href=""> + Create New Products</a>
        <hr className='w-[80%] my-5' />
        <h1 className='w-[80%] text-3xl text-red-700 font-semibold py-5'>Categories...</h1>
        <ul className='w-[80%]'>
          <li className='my-2 flex items-center gap-3 text-xl font-bold'>
            <span className='block rounded-full w-2 h-2 bg-red-500'></span>
             Category 1 
          </li>
          <li className='my-2 flex items-center gap-3 text-xl font-bold'>
            <span className='block rounded-full w-2 h-2 bg-blue-500'></span>
             Category 2
          </li>
          <li className='my-2 flex items-center gap-3 text-xl font-bold'>
            <span className='block rounded-full w-2 h-2 bg-green-500'></span>
             Category 3 
          </li>
        </ul>
      </nav>

      <div className='h-screen w-[80vw] p-5 flex flex-wrap gap-5 flex-col overflow-x-hidden overflow-y-hidden'>
        <div className='card hover:scale-105 cursor-pointer h-[40vh] w-[15vw] rounded-2xl shadow flex gap-5 items-center justify-center flex-col'>
          <div className='h-[70%] w-[10vw] bg-cover bg-no-repeat ' style={{backgroundImage: 'url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)'}}></div>
          <h4 className='text-center text-green-500'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
        </div>
      </div>
    </div>
  )
}

export default App