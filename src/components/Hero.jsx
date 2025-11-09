import React from 'react';
import Spline from '@splinetool/react-spline';
import { FileDown, Mail, Rocket } from 'lucide-react';

const Hero = () => {
  const handleResume = () => {
    const url = 'https://example.com/resume.pdf';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6QKz2mWRo7K2W9kq/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950" />

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/70">
            <Rocket className="w-3.5 h-3.5 text-emerald-300" />
            B.Tech Computer Engineering · Flutter Developer · DSA Enthusiast
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight">
            Building sleek apps and scalable products.
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            I craft mobile experiences with Flutter, solve complex problems with strong DSA foundations, and lead DTech — a studio helping startups ship fast.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={handleResume} className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-neutral-950 px-5 py-2.5 font-medium hover:bg-emerald-400">
              <FileDown className="w-4 h-4" /> Resume
            </button>
            <button onClick={handleContact} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-medium hover:bg-white/10">
              <Mail className="w-4 h-4" /> Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
