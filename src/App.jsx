import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Admin from './Admin'
import RegistrationScreen from './User'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Header'


function App() {
  

  return (
    <>
    {/* <Admin/> */}
    {/* <RegistrationScreen/> */}
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<RegistrationScreen/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
