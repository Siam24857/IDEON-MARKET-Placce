'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, Grid, List, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/mockData';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen pt-24 pb-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase">
              The <span className="text-gradient">Marketplace</span>
            </h1>
            <p className="text-gray-500">Showing {filteredProducts.length} premium results</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 outline-none focus:border-[#00f2ff] transition-all text-white"
              />
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-[#00f2ff] text-black' : 'text-gray-500 hover:text-white'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-[#00f2ff] text-black' : 'text-gray-500 hover:text-white'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-10">
            <div>
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Filter size={18} /> CATEGORIES
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`text-left px-4 py-2 rounded-xl transition-all ${selectedCategory === 'All' ? 'bg-[#00f2ff]/10 text-[#00f2ff] font-bold' : 'text-gray-500 hover:text-white'}`}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`text-left px-4 py-2 rounded-xl transition-all ${selectedCategory === cat.name ? 'bg-[#00f2ff]/10 text-[#00f2ff] font-bold' : 'text-gray-500 hover:text-white'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 glass rounded-3xl border-white/5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <SlidersHorizontal size={18} /> PRICE RANGE
              </h3>
              <input type="range" className="w-full accent-[#00f2ff] mb-4" />
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-96 flex flex-col items-center justify-center text-center glass rounded-3xl"
                >
                  <Search size={48} className="text-gray-700 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search query.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
