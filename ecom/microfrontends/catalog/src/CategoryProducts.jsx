import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE = 'http://localhost:4000/api';

export default function CategoryProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/products`).then(res => res.json()),
      fetch(`${API_BASE}/categories`).then(res => res.json())
    ]).then(([productsData, categoriesData]) => {
      setProducts(productsData.filter(p => String(p.categoryId) === String(id)));
      setCategory(categoriesData.find(c => String(c.id) === String(id)));
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="text-center py-12">Loading products...</div>;
  if (!category) return <div className="text-center py-12 text-red-500">Category not found.</div>;

  return (
    <main className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{category.name} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
            <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center">{product.title}</h3>
            <p className="text-gray-500 text-sm mb-2 text-center line-clamp-2">{product.description}</p>
            <div className="text-blue-600 font-bold text-lg mb-2">${product.price.toFixed(2)}</div>
            <Link to={`/product/${product.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full text-center">View Details</Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/products" className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition">Back to All Products</Link>
      </div>
    </main>
  );
} 