'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Truck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, name: 'Shipping', icon: Truck },
    { id: 2, name: 'Payment', icon: CreditCard },
    { id: 3, name: 'Confirm', icon: CheckCircle2 },
  ];

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Stepper */}
        <div className="flex items-center justify-between mb-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 z-0" />
          {steps.map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                step >= s.id ? 'bg-[#00f2ff] text-black shadow-[0_0_20px_rgba(0,242,255,0.4)]' : 'bg-[#1a1a1a] text-gray-600'
              }`}>
                <s.icon size={20} />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= s.id ? 'text-white' : 'text-gray-600'}`}>
                {s.name}
              </span>
            </div>
          ))}
        </div>

        <div className="glass rounded-[3rem] p-8 md:p-16 border-white/5 overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" {...variants} className="space-y-8">
                <h2 className="text-3xl font-black text-white uppercase">Shipping Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#00f2ff] transition-colors text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#00f2ff] transition-colors text-white" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Shipping Address</label>
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#00f2ff] transition-colors text-white h-32" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" {...variants} className="space-y-8">
                <h2 className="text-3xl font-black text-white uppercase">Payment Method</h2>
                <div className="grid grid-cols-1 gap-4">
                  {['Credit Card', 'PayPal', 'Stripe'].map((method) => (
                    <div key={method} className="flex items-center justify-between p-6 glass rounded-2xl border-white/5 hover:border-[#00f2ff]/30 cursor-pointer group transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-700 group-hover:border-[#00f2ff] flex items-center justify-center">
                           <div className="w-2 h-2 bg-[#00f2ff] rounded-full scale-0 group-hover:scale-100 transition-transform" />
                        </div>
                        <span className="text-white font-bold">{method}</span>
                      </div>
                      <CreditCard className="text-gray-700 group-hover:text-[#00f2ff]" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" {...variants} className="text-center space-y-8 py-12">
                <div className="w-24 h-24 bg-[#00f2ff]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#00f2ff]/20">
                  <CheckCircle2 size={48} className="text-[#00f2ff]" />
                </div>
                <h2 className="text-4xl font-black text-white uppercase">Order Confirmed!</h2>
                <p className="text-gray-500 max-w-sm mx-auto">
                  Your futuristic tech is being prepared for hyper-speed delivery. You'll receive a confirmation email shortly.
                </p>
                <button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="px-10 py-4 bg-[#00f2ff] text-black font-black rounded-2xl hover:scale-105 transition-transform"
                >
                  TRACK ORDER
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {step < 3 && (
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/5">
              <button 
                onClick={() => setStep(Math.max(1, step - 1))}
                className={`flex items-center gap-2 text-gray-500 hover:text-white font-bold ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
              >
                <ArrowLeft size={18} /> BACK
              </button>
              <button 
                onClick={() => setStep(step + 1)}
                className="px-10 py-4 bg-[#00f2ff] text-black font-black rounded-2xl flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all"
              >
                {step === 2 ? 'COMPLETE PURCHASE' : 'CONTINUE'}
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
