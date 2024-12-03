import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import Products from './Pages/Products'
import Pnf from './Pages/Pnf'

function App() {
  return (
    <BrowserRouter>
    <Menu/>

      <Router>
        <Route path={`/`} element={<Products/>} />
        <Route path={`/products`} element={<Products/>} />
        <Route path={`/posts`} element={<Posts/>} />
        <Route path={`/`} element={<Pnf/>} />
      </Router>
      
      </BrowserRouter>
  )
}