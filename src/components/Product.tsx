import React from 'react';
import { IProduct } from '../modals'
import { useState } from 'react';

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

  const btnClasses = ['py-2 px-4 border', btnClassName]

  return (
    <div
      className="border py-2 px-4 rounded flex flex-col items-center mb-2"
    >
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{ product.title }</p>
      <button
        onClick={() => setDetails(prev => !prev)}
        className={btnClasses.join(' ')}>
        { details ? 'Hide' : 'Show' }
      </button>
      {details && <div>
        <p>{ product.description }</p>
        <p>Rate: <span style={{ fontWeight: 'bold' }} >{product.rating.rate}</span></p>
      </div>}
      {/* <span className="font-bold">{ product.price }</span> */}
    </div>
  )
}