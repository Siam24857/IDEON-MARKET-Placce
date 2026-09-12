'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2,
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      });

      // CTA buttons animation
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.8,
      });

      // Floating elements
      gsap.to('.float-element', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00f2ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#7000ff]/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Animated Particles/Shapes */}
      <div className="float-element absolute top-[15%] right-[10%] w-32 h-32 glass rounded-2xl rotate-12 flex items-center justify-center border-white/10 hidden lg:flex">
        <div className="w-16 h-16 bg-gradient-to-br from-[#00f2ff] to-transparent rounded-full opacity-50" />
      </div>
      <div className="float-element absolute bottom-[20%] left-[15%] w-24 h-24 glass rounded-full -rotate-12 flex items-center justify-center border-white/10 hidden lg:flex">
         <ShoppingBag className="text-[#ff00ea]" size={32} />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 border-white/10"
        >
          <span className="w-2 h-2 bg-[#00f2ff] rounded-full animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
            New Tech Drop 2026
          </span>
        </motion.div>

        <h1 
          ref={titleRef}
          className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1]"
        >
          EXPERIENCE THE <br />
          <span className="text-gradient">FUTURE OF TECH</span>
        </h1>

        <p 
          ref={subtitleRef}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover a curated collection of state-of-the-art gadgets, fashion, and electronics. 
          Designed for those who live on the edge of innovation.
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-[#00f2ff] text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all flex items-center gap-2 group">
            Shop Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 glass text-white font-bold rounded-xl border-white/10 hover:bg-white/5 transition-all">
            View Lookbook
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#00f2ff] to-transparent" />
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
