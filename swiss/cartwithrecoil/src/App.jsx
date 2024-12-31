import React from 'react'
import ProductsContianer from './ProductsContianer'
import Cart from './Cart'


export default function App() {

  return (
    <div className='App col-12 d-flex align-items-start '>
      <ProductsContianer />
      <Cart />
    </div>
  )
}
