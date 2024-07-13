import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const Context = (props) => {
    const [Products, setProducts] = useState( JSON.parse(localStorage.getItem('products')) || []);

    
  return (
    <ProductContext.Provider value={[Products,setProducts]}>
      { props.children}
    </ProductContext.Provider>
  )
}

export default Context