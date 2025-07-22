import { useCart } from './CartContext.jsx';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQty } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">
          Your cart is empty.<br />
          <Link to="/products" className="text-blue-600 underline">Shop Products</Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
          <table className="w-full mb-6">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Qty</th>
                <th className="py-2">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 flex items-center gap-2">
                    <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded" />
                    <span>{item.title}</span>
                  </td>
                  <td className="py-2">${item.price.toFixed(2)}</td>
                  <td className="py-2">
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={e => updateQty(item.id, Math.max(1, Number(e.target.value)))}
                      className="w-16 px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="py-2">${(item.price * item.qty).toFixed(2)}</td>
                  <td className="py-2">
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">Total: ${total.toFixed(2)}</div>
            <button onClick={clearCart} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">Clear Cart</button>
          </div>
          <div className="mt-6 text-right">
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition">Checkout</button>
          </div>
        </div>
      )}
    </main>
  );
} 