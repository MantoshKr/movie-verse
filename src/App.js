import React from 'react'
// import { Route , Routes } from 'routes'--> this is your mistake 
import Home from './Pages/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App