// app/orders/page.tsx
"use client";
import React from "react";
import { useCartStore } from "@/store/useCartStore";

const OrdersPage = () => {
  const { cart, removeFromCart, addToCart, clearCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Your cart is currently empty.
        </div>
      ) : (
        <>
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <table className="w-full table-auto text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Item</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Quantity</th>
                  <th className="p-4 text-left">Subtotal</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4 flex items-center gap-4">
                      <img
                        src={`/images/${item.name
                          .toLowerCase()
                          .replace(/\s/g, "")}.jpg`}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span className="font-medium">{item.name}</span>
                    </td>
                    <td className="p-4">Rs. {item.price}</td>
                    <td className="p-4 flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                          })
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </td>
                    <td className="p-4 font-semibold">
                      Rs. {item.qty * item.price}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total & Checkout Section */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="text-red-600 underline text-sm"
            >
              Clear Cart
            </button>
            <div className="text-xl font-bold">Total: Rs. {total}</div>
          </div>

          <div className="text-right mt-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default OrdersPage;
