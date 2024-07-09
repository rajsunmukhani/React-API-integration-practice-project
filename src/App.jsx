import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'

const App = () => {
  return (
    <div className='flex'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>

    </div>
  )
}

export default App