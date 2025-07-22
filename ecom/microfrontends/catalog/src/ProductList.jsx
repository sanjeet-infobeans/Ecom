import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext.jsx';

const API_BASE = 'http://localhost:4000/api';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [added, setAdded] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${API_BASE}/products`).then(res => res.json()).then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  function handleAdd(product) {
    addToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1200);
  }

  if (loading) return <div className="text-center py-12">Loading products...</div>;

  return (
    <main className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">All Products</h2>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No products found.</div>
        ) : (
          filtered.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2 text-center line-clamp-2">{product.description}</p>
              <div className="text-blue-600 font-bold text-lg mb-2">${product.price.toFixed(2)}</div>
              <div className="flex gap-2 w-full">
                <Link to={`/product/${product.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full text-center">View Details</Link>
                <button onClick={() => handleAdd(product)} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full text-center">
                  {added === product.id ? 'Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
} 