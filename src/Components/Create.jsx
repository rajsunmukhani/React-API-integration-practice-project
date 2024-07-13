import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [Product,setProduct] = useContext(ProductContext);
    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [description, setdescription] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
      e.preventDefault();

      const newProduct = {
        id : nanoid(),
        title,
        image,
        price,
        category,
        description
      }

      if(title.length < 5||
        image.length < 5||
        price.length < 1||
        category.length < 5||
        description.length < 5
      ) {
        alert('Please fill the correct information!');
        return;
      }

      setProduct([...Product,newProduct]);
      localStorage.setItem('products',JSON.stringify([...Product,newProduct]));
      navigate('/');
    }



  return (
    <form onSubmit={submitHandler} className='w-full h-screen flex flex-col gap-5 items-center justify-center'>
        <h1 className='text-2xl align-left w-1/2 font-semibold text-blue-500'>Add New Products :</h1>
        <input className='bg-zinc-100 w-1/2 text-l rounded-md p-2' placeholder='Enter Image Link' type="url" onChange={(e) => setimage(e.target.value)} value={image} />
        <input className='bg-zinc-100 w-1/2 text-l rounded-md p-2' placeholder='Enter Product Name' type="text" onChange={(e) => settitle(e.target.value)} value={title} />
        <div className='flex justify-between w-1/2'>
        <input className='bg-zinc-100 w-[47%] text-l rounded-md p-2' placeholder='Enter Price' type="number" onChange={(e) => setprice(e.target.value)} value={price} />
        <input className='bg-zinc-100 w-[47%] text-l rounded-md p-2' placeholder='Enter Category' type="text" onChange={(e) => setcategory(e.target.value)} value={category} />
        </div>
        <textarea className='bg-zinc-100 w-1/2 text-l rounded-md p-2' placeholder='Enter Product Desciption Here...' onChange={(e) => setdescription(e.target.value)} value={description}></textarea>        
        <div className='w-1/2'>
            <button  className='bg-blue-100 flex items-center text-center w-[25%] flex justify-center p-3 text-blue-500 rounded-md' type="submit">Submit</button>
        </div>
    </form>
  )
}

export default Create