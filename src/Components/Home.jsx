import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loading from './Loading';
import { ProductContext } from '../utils/Context';
import axios from '../utils/axios';

const Home = () => {

  const [Product] = useContext(ProductContext);
  const [filteredProducts,setFilteredProducts] = useState(null);

  const colours = () => {
    return `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},5)`
  }

  const {search} = useLocation();
  const navigate = useNavigate();
  const category = search ? decodeURI(search.split('=')[1]) : null; 

  const getFilteredProducts = async() =>{
    const filteredProducts = await axios.get(`/products/category/${category}`);
    setFilteredProducts(filteredProducts);
  }
  
  useEffect(() => {
    if(category) getFilteredProducts();
    else setFilteredProducts(null);
  },[category]);

  const clickHandler = () => {
    navigate('/');
  }


  return Product ? (
    <>
    <Nav/>
    <div className='h-[100vh] w-[80vw] p-5 py-24 flex flex-wrap justify-center gap-5 overflow-y-auto'>
      {(filteredProducts ? filteredProducts.data : Product.data).map((prod) => {
        return (
          <Link key={prod.id} to={`/details/${prod.id}`} className='card hover:scale-105 cursor-pointer h-[40vh] w-[15vw] rounded-2xl shadow flex gap-5 items-center justify-center flex-col'>
          <div className='h-[70%] w-[10vw] bg-contain bg-no-repeat' style={{backgroundImage : `url(${prod.image})`}}></div>
          <h4 style={{color : colours()}} className='text-center'>{prod.title}</h4>
        </Link>
        )
      })}
      {category !== null && (
        <button onClick={clickHandler}  className='absolute left-[22%] top-[5%] flex items-center gap-2'>
          <i className="text-2xl ri-home-fill"></i>
          <h3 className='text-1xl'>Home</h3>
        </button>
      )}
    </div>
    </>
  ) : <Loading />
}

export default Home