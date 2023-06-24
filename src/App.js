import React from 'react'
// import { Route , Routes } from 'routes'--> this is your mistake 
import Home from './Pages/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Account from './Pages/Account';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Account" element={<Account />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App