import React, { useState } from 'react'

const Create = () => {

    const [image, setimage] = useState(null);
    const [title, settitle] = useState(null);
    const [price, setprice] = useState(null);
    const [category, setcategory] = useState(null);
    const [description, setdescription] = useState(null);

  return (
    <form className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-2xl mb-2 align-left w-1/2 font-semibold text-blue-500'>Add New Products :</h1>
        <input className='bg-zinc-100 w-1/2 text-l rounded-md p-2 mb-2' placeholder='Enter Image Link' type="url" onChange={(e) => setimage(e.target.value)} value={image} />
        <input className='bg-zinc-100 w-1/2 text-l rounded-md p-2 mb-2' placeholder='Enter Product Name' type="text" onChange={(e) => settitle(e.target.value)} value={title} />
        <div className='flex justify-between w-1/2'>
        <input className='bg-zinc-100 w-[47%] text-l rounded-md p-2 mb-2' placeholder='Enter Price' type="number" onChange={(e) => setprice(e.target.value)} value={price} />
        <input className='bg-zinc-100 w-[47%] text-l rounded-md p-2 mb-2' placeholder='Enter Category' type="text" onChange={(e) => setcategory(e.target.value)} value={category} />
        </div>
        <textarea className='bg-zinc-100 w-1/2 text-l rounded-md p-2 mb-2' placeholder='Enter Product Desciption Here...' onChange={(e) => setdescription(e.target.value)} value={description}></textarea>        
        <div className='w-1/2'>
            <button  className='bg-blue-100 flex items-center text-center w-[25%] flex justify-center p-3 text-blue-500 rounded-md' type="submit">Submit</button>
        </div>
    </form>
  )
}

export default Create