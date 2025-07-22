import { useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ProductList from './ProductList.jsx';
import ProductDetail from './ProductDetail.jsx';
import CategoryProducts from './CategoryProducts.jsx';
import CartPage from './CartPage.jsx';

const API_BASE = 'http://localhost:4000/api';

function Header({ categories }) {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Left */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-blue-700 tracking-tight">MyEcom</span>
        </div>
        {/* Navigation Center */}
        <nav className="flex gap-6 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}>Home</NavLink>
          {categories.slice(0, 3).map(cat => (
            <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive}) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}>{cat.name}</NavLink>
          ))}
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}>About</NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}>Cart</NavLink>
        </nav>
        {/* User Profile Right */}
        <div className="flex items-center">
          <UserCircleIcon className="h-8 w-8 text-gray-500" />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-500 text-center py-6 mt-12 border-t">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} MyEcom. All rights reserved.
      </div>
    </footer>
  );
}

function Home({ categories }) {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero/Slider */}
      <section className="relative w-full flex flex-col items-center justify-center py-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1513708927688-890a1b6e9b8b?auto=format&fit=crop&w=900&q=80" alt="Sale Banner" className="w-full h-64 object-cover" />
        </div>
        <h1 className="mt-8 text-4xl font-extrabold text-gray-800">Welcome to Ecom Brand</h1>
        <p className="mt-2 text-lg text-gray-600">Shop the latest and greatest products, curated for you.</p>
      </section>

      {/* Logo Carousel */}
      <section className="flex flex-wrap items-center justify-center gap-8 py-8">
        <img src={reactLogo} alt="React" className="h-12 w-12" />
        <img src={viteLogo} alt="Vite" className="h-12 w-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" alt="Flutter" className="h-12 w-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-12 w-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="h-12 w-12" />
      </section>

      {/* Feature Cards with Categories */}
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.slice(0, 8).map(cat => (
            <div key={cat.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center">
              <img src={`https://source.unsplash.com/160x160/?${encodeURIComponent(cat.name)},product`} alt={cat.name} className="rounded-full mb-4 w-24 h-24 object-cover" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{cat.name}</h3>
              <p className="text-gray-500 text-sm mb-4">Discover the best in {cat.name}!</p>
              <Link to={`/category/${cat.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Shop Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 mt-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Don't miss our exclusive offers!</h2>
        <p className="mb-4">Sign up now and get access to special deals and discounts.</p>
        <Link to="/products" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded shadow hover:bg-blue-50 transition">Shop All Products</Link>
      </section>
    </main>
  );
}

function StaticPage({ title, children }) {
  return (
    <section className="container mx-auto max-w-2xl bg-white rounded-lg shadow p-8 mt-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="text-gray-600 text-base">{children}</div>
    </section>
  );
}

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/categories`).then(res => res.json()).then(setCategories);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header categories={categories} />
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route path="/about" element={<StaticPage title="About">MyEcom is a modern e-commerce platform offering a curated selection of products across multiple categories. Our mission is to deliver quality and value to our customers with a seamless shopping experience.</StaticPage>} />
        <Route path="/terms" element={<StaticPage title="Terms & Conditions">All sales are final. Please read our terms and conditions before making a purchase. For more information, contact our support team.</StaticPage>} />
        <Route path="/contact" element={<StaticPage title="Contact">For inquiries, support, or feedback, email us at <a href='mailto:support@example.com' className='text-blue-600 underline'>support@example.com</a>.</StaticPage>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:id" element={<CategoryProducts />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
