'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Heart, 
  Settings, 
  LogOut, 
  User, 
  CreditCard,
  ChevronRight,
  TrendingUp,
  Clock
} from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function UserDashboard() {
  const stats = [
    { label: 'Total Orders', value: '12', icon: Package, color: '#00f2ff' },
    { label: 'Wishlist', value: '45', icon: Heart, color: '#ff00ea' },
    { label: 'Spent', value: '$2.4k', icon: TrendingUp, color: '#7000ff' }
  ];

  const recentOrders = [
    { id: '#ORD-7721', date: 'Oct 12, 2026', status: 'Delivered', amount: '$129.99' },
    { id: '#ORD-7718', date: 'Oct 08, 2026', status: 'Processing', amount: '$79.50' },
    { id: '#ORD-7712', date: 'Sep 28, 2026', status: 'Shipped', amount: '$249.00' }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-4">
            <div className="glass rounded-[2rem] p-8 text-center border-white/5 mb-8">
              <div className="w-24 h-24 bg-gradient-to-tr from-[#00f2ff] to-[#7000ff] rounded-3xl mx-auto mb-4 flex items-center justify-center text-4xl font-black text-white">
                JD
              </div>
              <h2 className="text-xl font-bold text-white">John Doe</h2>
              <p className="text-gray-500 text-sm">john.doe@nebula.com</p>
            </div>

            <nav className="space-y-2">
              {[
                { icon: User, label: 'Profile', active: true },
                { icon: Package, label: 'My Orders' },
                { icon: Heart, label: 'Wishlist' },
                { icon: CreditCard, label: 'Payment Methods' },
                { icon: Settings, label: 'Settings' },
                { icon: LogOut, label: 'Logout', color: '#ff4444' }
              ].map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${item.active ? 'bg-[#00f2ff] text-black font-black' : 'text-gray-500 hover:bg-white/5 hover:text-white'}`}
                >
                  <item.icon size={20} color={item.color} />
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-[2rem] p-8 border-white/5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <stat.icon size={80} color={stat.color} />
                  </div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                  <h3 className="text-4xl font-black text-white">{stat.value}</h3>
                </motion.div>
              ))}
            </div>

            {/* Recent Orders */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-white uppercase tracking-widest">Recent Orders</h3>
                <button className="text-[#00f2ff] text-sm font-bold flex items-center gap-2">
                  VIEW ALL <ChevronRight size={16} />
                </button>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#00f2ff]">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-white font-bold">{order.id}</p>
                        <p className="text-gray-500 text-xs">{order.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        order.status === 'Delivered' ? 'bg-green-500/10 text-green-500' : 
                        order.status === 'Processing' ? 'bg-[#00f2ff]/10 text-[#00f2ff]' : 
                        'bg-[#7000ff]/10 text-[#7000ff]'
                      }`}>
                        {order.status}
                      </span>
                      <p className="text-xl font-black text-white">{order.amount}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Featured Recommendations */}
            <div className="p-10 glass rounded-[3rem] border-[#00f2ff]/10 bg-gradient-to-br from-[#00f2ff]/5 to-transparent">
              <h4 className="text-white font-black mb-4">MEMBER EXCLUSIVE</h4>
              <p className="text-gray-400 mb-6">You have a special 20% discount on all new tech drops this month. Use code: <span className="text-[#00f2ff] font-bold">NEBULA20</span></p>
              <button className="px-6 py-3 bg-[#00f2ff] text-black font-black rounded-xl text-sm">
                CLAIM NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
