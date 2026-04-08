
import { ArrowRight } from 'lucide-react';

export function Hero1() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2024/04/h19-rev-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          We Are A Creative Agency
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          We are a team of professionals who are passionate about creating beautiful and functional websites.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors flex items-center gap-2 group">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#" className="flex items-center gap-2 text-lg hover:underline">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
}
