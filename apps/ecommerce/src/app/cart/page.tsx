'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { products } from '@/data/mockData';

export default function CartPage() {
  // Simulating cart items from mock products
  const [cartItems, setCartItems] = useState(
    products.slice(0, 2).map(p => ({ ...p, quantity: 1 }))
  );

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

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
            <AnimatePresence mode="popLayout">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
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
                          onClick={() => removeItem(item.id)}
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
                ))
              ) : (
                <div className="h-96 flex flex-col items-center justify-center glass rounded-[3rem] text-center p-12">
                   <ShoppingBag size={64} className="text-gray-700 mb-6" />
                   <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
                   <Link href="/shop" className="px-8 py-4 bg-[#00f2ff] text-black font-black rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform">
                     <ArrowLeft size={18} /> START SHOPPING
                   </Link>
                </div>
              )}
            </AnimatePresence>
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

                <Link href="/checkout" className="w-full h-16 bg-[#00f2ff] text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-all">
                  CHECKOUT NOW
                  <ArrowRight size={20} />
                </Link>

                <p className="text-center text-[10px] text-gray-500 mt-6 uppercase tracking-widest font-bold">
                  SECURE CHECKOUT POWERED BY NEBULA
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
