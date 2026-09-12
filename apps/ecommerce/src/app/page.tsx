import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      
      {/* Brands Marquee */}
      <section className="py-20 border-y border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="mx-12 text-4xl font-black text-white/20 uppercase tracking-[0.5em] italic">
              NEBULA • TECH • FUTURE • DESIGN • 
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border-white/10">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#7000ff]/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#00f2ff]/20 rounded-full blur-[80px]" />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 relative z-10">
            JOIN THE <span className="text-gradient">NEBULA</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg relative z-10">
            Get early access to drops and exclusive futuristic content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00f2ff] transition-colors text-white"
            />
            <button className="bg-[#00f2ff] text-black font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform active:scale-95">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 NEBULA TECHNOLOGY MARKETPLACE. ALL RIGHTS RESERVED.</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </main>
  );
}
