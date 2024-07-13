import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import Create from './Components/Create'
import EditProduct from './Components/EditProduct'

const App = () => {
  return (
    <div className='flex'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/edit/:id' element={<EditProduct/>}/>
      </Routes>

    </div>
  )
}

export default App