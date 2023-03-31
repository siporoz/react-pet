import React from 'react';
import { IProduct } from '../modals'

interface ProductProps {
  product: IProduct
}

export function Product(props: ProductProps) {
  return (
    <div className="border py-2 px-4 rounded flex flex-col mb2">Product! { props.product.title }</div>
  )
}