'use client'
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.id.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Cart</h1>
      </div>

      <div className="space-y-6">
        {cart.length === 0 ? (
          <div className="text-gray-500">Your cart is empty.</div>
        ) : (
          cart.map((element, index) => (
            <div key={`${element.id.id}-${index}`}>
              <div className="bg-white p-4 rounded shadow flex items-center">
                <img
                  src={element.id.img}
                  alt={element.id.name}
                  className="w-24 h-24 object-cover rounded mr-6"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{element.id.name}</h2>
                  <p className="text-green-700 font-bold">${element.id.price}</p>
                  <p className="text-gray-500">
                    Subtotal: ${(element.id.price * element.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center">
                  <Button
                    className="px-3 py-1 bg-orange-800 rounded-l hover:bg-gray-300 text-white"
                    onClick={() => updateQuantity(element.id.id, -1)}
                    disabled={element.quantity === 1}
                  >−</Button>
                  <input
                    type="number"
                    value={element.quantity}
                    readOnly
                    className="w-12 text-center border-t border-b"
                  />
                  <Button
                    className="px-3 py-1 bg-blue-900 rounded-r hover:bg-gray-300 text-white"
                    onClick={() => updateQuantity(element.id.id, 1)}
                  >+</Button>
                  <Button
                    className="ml-4 bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded"
                    onClick={() => removeFromCart(element.id.id)}
                  >🗑️</Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded shadow flex justify-between items-center">
          <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
          <Button className="px-6 py-2 rounded bg-emerald-700 hover:bg-emerald-800 text-white font-bold">
            Go To Pay Page
          </Button>
        </div>
      )}
    </div>
  );
}
