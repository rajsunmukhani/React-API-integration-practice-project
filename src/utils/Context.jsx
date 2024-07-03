import React, { createContext, useState } from 'react'

export const ProductContext = createContext();

const Context = (props) => {
    const [Products, setProducts] = useState(null);

  return (
    <ProductContext.Provider value={[Products,setProducts]}>
      { props.children}
    </ProductContext.Provider>
  )
}

export default Context