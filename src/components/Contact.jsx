import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // In a real setup, this would POST to a backend endpoint
      await new Promise((r) => setTimeout(r, 900));
      setStatus('Thanks! I will get back to you shortly.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-center gap-3">
        <Mail className="h-6 w-6 text-indigo-500" />
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Get in touch</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"
        >
          <div className="grid gap-4">
            <input
              className="w-full rounded-lg border border-slate-300/70 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-400 dark:border-white/10 dark:bg-slate-950 dark:text-white"
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full rounded-lg border border-slate-300/70 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-400 dark:border-white/10 dark:bg-slate-950 dark:text-white"
              placeholder="Email address"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="min-h-[120px] w-full rounded-lg border border-slate-300/70 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-indigo-400 dark:border-white/10 dark:bg-slate-950 dark:text-white"
              placeholder="Project details / message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500"
          >
            <Send className="h-4 w-4" /> Send message
          </button>
          {status && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{status}</p>}
        </form>

        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
          <h3 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">Contact details</h3>
          <p className="mb-4">For collaborations, freelance, or product inquiries at DTech, reach out anytime.</p>
          <div className="space-y-3">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> you@example.com</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 90000 00000</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> India • Remote</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
