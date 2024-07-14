import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProduct = () => {
    const [Products,setProducts] = useContext(ProductContext);
    const [product,setProduct] = useState({
      title : "" ,
      image : "",
      description : "",
      category : "",
      price : ""
    });
    const {id} = useParams();

    const changeHandler = (e) => {
      setProduct({...product, [e.target.name] : e.target.value});
    };


    const navigate = useNavigate();

    useEffect(() => {
            setProduct(Products.find((prod) => prod.id.toString() === id.toString()));
    },[]);


    const submitHandler = (e) => {
      e.preventDefault();
 
      if(
        product.title.trim().length < 5||
        product.image.trim().length < 5||
        product.price.length < 1||
        product.category.trim().length < 5||
        product.description.trim().length < 5
      ) {
        alert('Please fill the correct information!');
        return;
      }

      const index = Products.findIndex((p) => p.id.toString() === id.toString());
      const copyData = [...Products];
      copyData[index] = product;

      setProducts([...copyData]);
      localStorage.setItem('products',JSON.stringify([...copyData]));
      toast.success('Edit Successful')
      navigate('/');
    }

  return (
    <form onSubmit={submitHandler} className='w-full h-screen flex flex-col gap-5 items-center justify-center'>
        <h1 className='text-2xl align-left w-1/2 font-semibold text-blue-500'>Edit Products :</h1>
        <input className='bg-zinc-100 w-1/2 text-l rounded-md p-2' placeholder='Enter Image Link' type="url" name='image' onChange={changeHandler} value={product.image} />
        <input className='bg-zinc-100 w-1/2 text-l rounded-md p-2' placeholder='Enter Product Name' type="text" name='title' onChange={changeHandler} value={product.title} />
        <div className='flex justify-between w-1/2'>
        <input className='bg-zinc-100 w-[47%] text-l rounded-md p-2' placeholder='Enter Price' type="number" name='price' onChange={changeHandler} value={product.price} />
        <input className='bg-zinc-100 w-[47%] text-l rounded-md p-2' placeholder='Enter Category' type="text" name='category' onChange={changeHandler} value={product.category} />
        </div>
        <textarea className='bg-zinc-100 w-1/2 text-l rounded-md p-2' placeholder='Enter Product Desciption Here...' name='description' onChange={changeHandler} value={product.description}></textarea>        
        <div className='w-1/2'>
            <button  className='bg-blue-100 flex items-center text-center w-[25%] flex justify-center p-3 text-blue-500 rounded-md' type="submit">Submit</button>
        </div>
    </form>
  )
}

export default EditProduct