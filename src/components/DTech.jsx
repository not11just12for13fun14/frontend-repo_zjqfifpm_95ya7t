import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const DTech = () => {
  return (
    <section id="dtech" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-center gap-3">
        <Rocket className="h-6 w-6 text-indigo-500" />
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">About DTech</h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow-sm dark:border-white/10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Software that ships</h3>
            <p className="mt-2 text-sm/relaxed text-indigo-100">
              DTech is a software studio where I design, build, and ship production‑ready solutions for startups and
              businesses. From mobile apps to dashboards and automation pipelines, I focus on outcomes, not buzzwords.
            </p>
            <ul className="mt-4 list-inside list-disc text-indigo-100/90">
              <li>Flutter apps with clean architecture</li>
              <li>Web platforms with modern stacks</li>
              <li>Rapid prototypes to validate ideas</li>
              <li>Performance, security, and maintainability</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/10 p-4">
            <div className="flex items-center gap-2 text-sm text-indigo-100">
              <Sparkles className="h-4 w-4" /> Services
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-white/10 p-3">Mobile Development</div>
              <div className="rounded-lg bg-white/10 p-3">Web Apps & Dashboards</div>
              <div className="rounded-lg bg-white/10 p-3">API Design</div>
              <div className="rounded-lg bg-white/10 p-3">UI/UX Prototyping</div>
            </div>
            <a
              href="#contact"
              className="mt-4 inline-block rounded-md bg-white px-3 py-2 text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DTech;
