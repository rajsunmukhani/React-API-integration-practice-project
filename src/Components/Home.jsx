import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Loading from './Loading';
import { ProductContext } from '../utils/Context';

const Home = () => {

  const [Product] = useContext(ProductContext);

  return Product ? (
    <>
    <Nav/>
    <div className='h-[100vh] w-[80vw] p-5 flex flex-wrap justify-center gap-5 overflow-y-auto'>
      {Product.data.map((prod) => {
        return (
          <Link key={prod.id} to={`/details/${prod.id}`} className='card hover:scale-105 cursor-pointer h-[40vh] w-[15vw] rounded-2xl shadow flex gap-5 items-center justify-center flex-col'>
          <div className='h-[70%] w-[10vw] bg-contain bg-no-repeat' style={{backgroundImage : `url(${prod.image})`}}></div>
          <h4 className='text-center text-green-500'>{prod.title}</h4>
        </Link>
        )
      })}
    </div>
    </>
  ) : <Loading />
}

export default Home