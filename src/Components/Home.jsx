import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Nav/>
    <div className='h-screen w-[80vw] p-5 flex flex-wrap gap-5 flex-col overflow-x-hidden overflow-y-hidden'>
        <Link to={`/details/1`} className='card hover:scale-105 cursor-pointer h-[40vh] w-[15vw] rounded-2xl shadow flex gap-5 items-center justify-center flex-col'>
          <div className='h-[70%] w-[10vw] bg-cover bg-no-repeat ' style={{backgroundImage: 'url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)'}}></div>
          <h4 className='text-center text-green-500'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
        </Link>
    </div>
    </>
  )
}

export default Home