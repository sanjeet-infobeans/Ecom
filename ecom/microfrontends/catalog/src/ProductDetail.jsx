import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from './CartContext.jsx';

const API_BASE = 'http://localhost:4000/api';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${API_BASE}/products`).then(res => res.json()).then(data => {
      const found = data.find(p => String(p.id) === String(id));
      setProduct(found);
      setLoading(false);
    });
  }, [id]);

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  if (loading) return <div className="text-center py-12">Loading product...</div>;
  if (!product) return <div className="text-center py-12 text-red-500">Product not found.</div>;

  return (
    <main className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8 flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.title} className="w-64 h-64 object-cover rounded mb-4 mx-auto" />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <div className="text-blue-600 font-bold text-2xl mb-2">${product.price.toFixed(2)}</div>
            <div className="mb-2 text-green-600 font-semibold">{product.offer}</div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mb-4">
              <span className="font-semibold text-gray-700">Review:</span> <span className="italic text-gray-500">{product.review}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={handleAdd} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              {added ? 'Added!' : 'Add to Cart'}
            </button>
            <Link to="/products" className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition">Back to Products</Link>
          </div>
        </div>
      </div>
    </main>
  );
} 