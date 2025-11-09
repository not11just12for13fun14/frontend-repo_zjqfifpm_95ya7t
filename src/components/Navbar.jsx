import React from 'react';
import { Rocket, Mail } from 'lucide-react';

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="flex items-center gap-2 font-semibold tracking-tight">
          <Rocket className="w-5 h-5 text-emerald-400" />
          <span className="text-white">Your Name</span>
        </button>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <button onClick={() => scrollTo('home')} className="text-white/70 hover:text-white">Home</button>
          <button onClick={() => scrollTo('projects')} className="text-white/70 hover:text-white">Projects</button>
          <button onClick={() => scrollTo('contact')} className="text-white/70 hover:text-white">Contact</button>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-4 py-2 hover:bg-emerald-500/20">
            <Mail className="w-4 h-4" /> Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
