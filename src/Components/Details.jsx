import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';
import { ProductContext } from '../utils/Context';

const Details = () => {
  const {id} = useParams();
  const [Products,setProducts] = useContext(ProductContext);
  const [tempProduct,setTempProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(Products && Products.length > 0){
      const product = Products.find(p => p.id.toString() === id.toString());
      if (product) {
        setTempProduct(product);
      }
    }
  }, [Products,id]);

  const deleteHandler = (id) => {
    const copyProduct = Products.filter(prod => prod.id.toString() !== id.toString());
    setProducts(copyProduct);
    localStorage.setItem('products',JSON.stringify(copyProduct));
    navigate('/');
  }
  

  return tempProduct ? (
    <div className='w-full h-screen'>
      <div className='w-[75%] h-screen flex items-center m-auto gap-48'>
        <div className='h-content flex justify-center align-center gap-36'>
          <img className='w-[40%] h-[60%] object-cover' src={tempProduct.image} alt="" />
          <div className='content flex flex-col gap-5 w-[60%] py-5'>
            <h1 className='text-4xl'>{tempProduct.title}</h1>
            <h3 className='text-zinc-400 font-semibold text-2xl'>Category : {tempProduct.category}</h3>
            <h2 className='text-6xl font-semibold'>$ {tempProduct.price}</h2>
            <p className='text-l w-[100%] h-[20%] text-ellipsis whitespace-wrap overflow-hidden text-zinc-700'>{tempProduct.description}</p>
            <div className="buttons flex gap-10 w-full py-8 flex">
              <Link  to={`/edit/${tempProduct.id}`} className='border border-blue-200 text-blue-500 text-center w-24 py-2'>Edit</Link>
              <button onClick={() => deleteHandler(tempProduct.id)} className='border border-red-200 text-red-500 text-center w-24 py-2'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <Loading />
}

export default Details