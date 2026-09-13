'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { products } from '@/data/mockData';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const { items, remove, updateQuantity } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cartItems = items
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  async function startCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        setError(data.message ?? 'Could not start checkout.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-12 uppercase">
          Your <span className="text-gradient">Cart</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cartItems.length > 0 ? (
              <AnimatePresence mode="popLayout">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="glass rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border-white/5"
                  >
                    <div className="w-32 h-32 bg-white/5 rounded-2xl p-4 overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{item.category}</p>
                      <div className="flex items-center justify-center md:justify-start gap-4">
                        <div className="flex items-center gap-4 bg-white/5 p-1 rounded-xl border border-white/10">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-2 text-gray-500 hover:text-white transition-colors">
                            <Minus size={16} />
                          </button>
                          <span className="font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-2 text-gray-500 hover:text-white transition-colors">
                            <Plus size={16} />
                          </button>
                        </div>
                        <button 
                          onClick={() => remove(item.id)}
                          className="p-3 text-gray-700 hover:text-[#ff00ea] transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="text-center md:text-right">
                      <p className="text-2xl font-black text-white">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-gray-500 text-xs">${item.price.toFixed(2)} each</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <div className="h-96 flex flex-col items-center justify-center glass rounded-[3rem] text-center p-12">
                 <ShoppingBag size={64} className="text-gray-700 mb-6" />
                 <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
                 <Link href="/shop" className="px-8 py-4 bg-[#00f2ff] text-black font-black rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform">
                   <ArrowLeft size={18} /> START SHOPPING
                 </Link>
              </div>
            )}
          </div>

          {/* Summary */}
          {cartItems.length > 0 && (
            <div className="w-full lg:w-96">
              <div className="glass rounded-[3rem] p-10 border-white/5 sticky top-24">
                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span className="text-white font-bold">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="h-[1px] bg-white/5 my-4" />
                  <div className="flex justify-between text-xl font-black text-white">
                    <span>Total</span>
                    <span className="text-[#00f2ff]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={startCheckout}
                  disabled={loading}
                  className="w-full h-16 bg-[#00f2ff] text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : <ShoppingBag size={20} />}
                  {loading ? 'REDIRECTING TO STRIPE...' : 'CHECKOUT NOW'}
                  {!loading && <ArrowRight size={20} />}
                </button>

                {error && (
                  <p className="text-center text-xs text-[#ff00ea] mt-4 font-bold">{error}</p>
                )}

                <p className="text-center text-[10px] text-gray-500 mt-6 uppercase tracking-widest font-bold">
                  SECURE CHECKOUT POWERED BY STRIPE
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}