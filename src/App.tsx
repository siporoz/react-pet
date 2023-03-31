import React, { useState } from "react";
import { Product } from './components/Product'
import { product } from './data/products'

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product product={product[0]} />
    </div>
  )
}

export default App;
