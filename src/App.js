import React from 'react'
// import { Route , Routes } from 'routes'--> this is your mistake 
import Home from './Pages/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Account from './Pages/Account';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Login" element={<Login />}/>
      <Route
            path='/account'
            element={
             
                <Account />
              
            }
          />
    </Routes>
    </AuthContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App