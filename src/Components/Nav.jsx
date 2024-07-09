import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [Product] = useContext(ProductContext);
  const categories = new Set();

  Product.data.forEach((prod) => {
    categories.add(prod.category);
  })

  const colours = () => {
    return `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.25)`
  }


  return (
    <nav className='w-[20vw] h-screen bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='bg-red-100 flex items-center text-center w-[50%] p-3 text-red-500 rounded-md' href=""> +  Create New Products</a>
        <hr className='w-[80%] my-5' />
        <h1 className='w-[80%] text-2xl text-red-700 font-semibold py-5'>Categories...</h1>
        <div className='w-[80%]'>
          {[...categories].map((cat,index) => {
            return (
              <Link key={index} className='my-2 hover:scale-105 flex items-center gap-3 text-l font-bold'>
                <span style={{backgroundColor : colours()}} className='block rounded-full w-2 h-2'></span>
                 <h1 className='capitalize'>{cat}</h1> 
              </Link>
            )
          })}
        </div>
      </nav>
  )
}

export default Nav