import ProductDetails from './components/ProductDetails';

import products from './data/products.json';

import './App.css';

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Product Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductDetails product={products[0]} />
        <ProductDetails product={products[1]} />
        <ProductDetails product={products[2]} showImage={false} />
      </div>
    </div>
  );
}

export default App;
