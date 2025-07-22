import { UserCircleIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Left */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-blue-700 tracking-tight">MyEcom</span>
        </div>
        {/* Navigation Center */}
        <nav className="flex gap-6 items-center">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Users</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Cart</a>
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

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to the Ecom Admin Panel. Manage users, products, and more.</p>
        <div className="flex gap-8 mt-8">
          <div className="bg-white rounded-lg shadow p-6 w-64 text-center">
            <h2 className="font-semibold text-lg mb-1">Users</h2>
            <p className="text-gray-500 text-sm">Manage all registered users.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 w-64 text-center">
            <h2 className="font-semibold text-lg mb-1">Products</h2>
            <p className="text-gray-500 text-sm">View and edit product listings.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
