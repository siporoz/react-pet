import { CreateProduct } from './components/CreateProduct';
import { ErrorMassage } from './components/ErrorMassage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product'
import { useProducts } from './hooks/products';

function App() {
  const { loading, error, products } = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMassage error={error} />}
      { products.map(product => <Product product={product} key={product.id} />) }

      <Modal title="Create New Product">
        <CreateProduct />
      </Modal>
    </div>
  )
}

export default App;
