import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <section id="home" className="relative min-h-[85vh] flex items-center">
          <Hero />
        </section>
        <section id="projects" className="py-20 container mx-auto px-4">
          <Projects />
        </section>
        <section id="contact" className="py-20 bg-neutral-900/40">
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-sm text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Your Name</span>
          <a href="#home" className="hover:text-white transition">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
