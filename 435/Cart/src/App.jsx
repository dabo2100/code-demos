import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ShopPage from './pages/ShopPage'
import ProductDetails from './pages/ProductDetails'
import useCart from './hooks/useCart'
import CartPage from './pages/CartPage'
export default function App() {
  return (
    <div className='App col-12'>
      <BrowserRouter>
        <header>
          <Link to="cart" className='btn btn-primary'>Cart {useCart().countCart()}</Link>
        </header>
        <Routes>
          <Route path='/'>
            <Route index element={<ShopPage />} />
            <Route path='product/:id' element={<ProductDetails />} />
            <Route path='category/:id' element={<h1>Category Page</h1>} />
            <Route path='cart' element={<CartPage />} />
            <Route path='login' element={<h1>Login Page</h1>} />
            <Route path='register' element={<h1>Register Page</h1>} />
            <Route path='profile' element={<h1>Profile Page</h1>} />
            <Route path='checkout' element={<h1>Checkout Page</h1>} />
            <Route path='*' element={<h1>404 Page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
