import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <img src={viteLogo} alt="Brand Logo" className="h-10 w-10" />
          <span className="font-bold text-xl text-gray-800">Ecom User</span>
        </div>
        <nav className="flex gap-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Profile</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Orders</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Settings</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-500 text-center py-6 mt-12 border-t">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Ecom User. All rights reserved.
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">User Dashboard</h1>
        <p className="text-gray-600">Welcome to your Ecom User Panel. View your profile, orders, and more.</p>
        <div className="flex gap-8 mt-8">
          <div className="bg-white rounded-lg shadow p-6 w-64 text-center">
            <img src={reactLogo} alt="React" className="h-12 w-12 mx-auto mb-2" />
            <h2 className="font-semibold text-lg mb-1">Profile</h2>
            <p className="text-gray-500 text-sm">Manage your personal information.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 w-64 text-center">
            <img src={viteLogo} alt="Vite" className="h-12 w-12 mx-auto mb-2" />
            <h2 className="font-semibold text-lg mb-1">Orders</h2>
            <p className="text-gray-500 text-sm">Track your orders and history.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
