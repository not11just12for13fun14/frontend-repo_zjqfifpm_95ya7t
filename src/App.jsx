import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import DTech from './components/DTech';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-6" />
      </main>
      <div className="px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <ExperienceEducation />
        <DTech />
        <Contact />
      </div>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name · Built with love, Flutter energy, and clean code
      </footer>
    </div>
  );
}

export default App;
