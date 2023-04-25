import React, { useState } from "react"
import { IProduct } from "../modals";
import axios from "axios";
import { ErrorMassage } from "./ErrorMassage";

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
      rate: 42,
      count: 10
    }
}

  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const  submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('')

    if (value.trim().length === 0) {
      setError('Please enter value')
      return
    }

    productData.title = value.trim()
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

    onCreate(response.data)
  }

  return(
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter Product Tilte"
        value={value}
        onChange={event => setValue(event.target.value)}
      />

      { error && <ErrorMassage error={error} /> }

      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">
        Create
      </button>
    </form>
  )
}