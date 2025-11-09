import React from 'react';
import Spline from '@splinetool/react-spline';
import { FileDown, Mail, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const handleResume = () => {
    // Replace with your actual resume URL
    window.open('https://drive.google.com', '_blank', 'noopener,noreferrer');
  };

  const handleContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden rounded-3xl bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-28 lg:py-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm text-indigo-200 ring-1 ring-white/15 backdrop-blur">
          <Rocket className="h-4 w-4" /> Building apps that feel fast and fun
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">a B.Tech Computer Engineer</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Flutter app developer and DSA enthusiast crafting clean, scalable products. I blend
          beautiful UI with solid engineering to ship real impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleResume}
            className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-slate-900 shadow-sm ring-1 ring-white/20 transition hover:bg-white"
          >
            <FileDown className="h-5 w-5" /> Download Resume
          </button>
          <button
            onClick={handleContact}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 px-4 py-2 text-white shadow-sm ring-1 ring-white/10 transition hover:bg-indigo-500"
          >
            <Mail className="h-5 w-5" /> Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
