'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Plus,
  Minus
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { products } from '@/data/mockData';

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const product = products.find(p => p.id === id) || products[0];
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <main className="min-h-screen pt-24 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square glass rounded-[3rem] overflow-hidden p-8 border-white/5"
            >
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square glass rounded-2xl border-white/5 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 glass text-[#00f2ff] text-[10px] font-bold rounded-full uppercase tracking-widest border-[#00f2ff]/20">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-[#00f2ff]">
                  <Star size={14} className="fill-[#00f2ff]" />
                  <span className="text-sm font-bold">{product.rating}</span>
                  <span className="text-gray-500 font-medium">({product.reviewsCount} Reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-white">${product.price.toFixed(2)}</span>
                {product.discount && (
                  <span className="text-xl text-gray-500 line-through">
                    ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-8 py-8 border-y border-white/5">
              <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="text-lg font-bold w-8 text-center">{quantity}</span>
                <button 
                   onClick={() => setQuantity(quantity + 1)}
                   className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>

              <button className="flex-1 h-14 bg-[#00f2ff] text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all">
                <ShoppingCart size={20} />
                ADD TO CART
              </button>
              
              <button className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-[#ff00ea] transition-colors border-white/10">
                <Heart size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Truck, text: 'Free Delivery' },
                { icon: ShieldCheck, text: '2 Year Warranty' },
                { icon: RotateCcw, text: '30 Day Returns' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-500">
                  <item.icon size={20} className="text-[#00f2ff]" />
                  <span className="text-xs font-bold uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="pt-8">
              <div className="flex gap-8 border-b border-white/5 mb-8">
                {['description', 'specifications', 'reviews'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-white' : 'text-gray-500'}`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-[#00f2ff]" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="text-gray-400 text-sm leading-relaxed">
                {activeTab === 'description' && "Detailed overview of the product features and benefits. Built with high-grade materials and optimized for the best user experience."}
                {activeTab === 'specifications' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 glass rounded-xl border-white/5"><p className="text-gray-500">Material</p><p className="text-white font-bold">Titanium Alloy</p></div>
                    <div className="p-4 glass rounded-xl border-white/5"><p className="text-gray-500">Weight</p><p className="text-white font-bold">250g</p></div>
                  </div>
                )}
                {activeTab === 'reviews' && "No reviews yet. Be the first to review this product!"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
