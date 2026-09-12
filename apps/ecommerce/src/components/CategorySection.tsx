'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/mockData';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export default function CategorySection() {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            EXPLORE <span className="text-[#7000ff]">CATEGORIES</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Browse through our futuristic departments to find exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = (Icons as any)[category.icon] as LucideIcon;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="glass aspect-square rounded-3xl p-8 flex flex-col items-center justify-center gap-6 border-white/5 group-hover:border-[#00f2ff]/30 transition-all overflow-hidden relative">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#00f2ff] group-hover:text-black transition-all duration-500">
                    {Icon && <Icon size={32} />}
                  </div>
                  
                  <div className="text-center z-10">
                    <h3 className="font-bold text-white tracking-wide uppercase text-sm mb-1">
                      {category.name}
                    </h3>
                    <span className="text-[10px] text-gray-500 font-bold group-hover:text-[#00f2ff] transition-colors">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
