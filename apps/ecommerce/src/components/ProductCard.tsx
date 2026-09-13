'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShoppingCart, Heart, Star, Check } from 'lucide-react';
import { Product } from '@/data/mockData';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart();
  const [added, setAdded] = React.useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  function handleAddToCart() {
    add(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className="relative group glass rounded-3xl p-4 border-white/5 hover:border-[#00f2ff]/30 transition-colors"
    >
      {/* Badges */}
      <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
        {product.isFlashSale && (
          <span className="px-3 py-1 bg-[#ff00ea] text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
            Flash Sale
          </span>
        )}
        {product.discount && (
          <span className="px-3 py-1 bg-[#00f2ff] text-black text-[10px] font-bold rounded-full uppercase tracking-widest">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Image Container */}
      <div 
        style={{ transform: 'translateZ(50px)' }}
        className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-[#111]"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button
            onClick={handleAddToCart}
            className={`w-12 h-12 glass rounded-full flex items-center justify-center transition-all ${added ? 'bg-[#00f2ff] text-black' : 'hover:bg-[#00f2ff] hover:text-black'}`}
          >
            {added ? <Check size={20} /> : <ShoppingCart size={20} />}
          </button>
          <button className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-[#ff00ea] text-white transition-all">
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div style={{ transform: 'translateZ(30px)' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-[#00f2ff] text-[#00f2ff]" />
            <span className="text-xs font-bold">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-[#00f2ff] transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-black text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.discount && (
               <span className="text-xs text-gray-500 line-through">
                 ${(product.price / (1 - product.discount / 100)).toFixed(2)}
               </span>
            )}
          </div>
          <button className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold hover:bg-white/10 transition-all border border-white/5">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
