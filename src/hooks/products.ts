import { useEffect, useState } from "react";
import { IProduct } from "../modals";
import axios from "axios";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts () {
    try {
      setError('');
      setLoading(true);
      const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProducts(res.data);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, error, loading, addProduct }
}