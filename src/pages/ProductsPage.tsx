import { useContext } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMassage } from '../components/ErrorMassage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product'
import { useProducts } from '../hooks/products';
import { IProduct } from '../modals';
import { ModalContext } from '../context/modal.context';

function ProductsPage() {
  const { loading, error, products, addProduct } = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMassage error={error} />}
      { products.map(product => <Product product={product} key={product.id} />) }

      {modal && <Modal onClose={() => close()} title="Create New Product">
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button
        className='absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2x px-4 py-2'
        onClick={() => open()}
        >+
      </button>
    </div>
  )
}

export default ProductsPage;
