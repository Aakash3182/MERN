import React from 'react'
import { browserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Update from './Pages/Update'
import Details from './Pages/Details'
import Pnf from './Pages/Pnf'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <browserRouter>
    <Menu/>
    <ToastContainer autoClose={3000}/>
    <Routes>
      <Route path={`/`} element={<Home/>} />
      <Route path={`/create`} element={<Create/>} />
      <Route path={`/edit/:id`} element={<Update/>} />
      <Route path={`/details/:id`} element={<Details/>} />
      <Route path={`/*`} element={<Pnf/>} />
    </Routes>
    </browserRouter>
  )
}

export default App