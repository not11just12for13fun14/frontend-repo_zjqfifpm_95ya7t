import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="grid gap-4">
            <input className="bg-neutral-900/60 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" required />
            <input type="email" className="bg-neutral-900/60 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your email" required />
            <textarea rows="5" className="bg-neutral-900/60 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your message" required />
            <button type="submit" className="inline-flex items-center gap-2 justify-center rounded-md bg-emerald-500 text-neutral-950 px-4 py-2 font-medium hover:bg-emerald-400">
              <Send className="w-4 h-4" /> Send
            </button>
            {status && <p className="text-sm text-white/70">{status}</p>}
          </div>
        </form>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-300" /> +91 00000 00000</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-300" /> your@email.com</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-300" /> India</div>
          </div>
          <p className="mt-4 text-sm text-white/60">Open to internships, freelance work, and collaborations.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
