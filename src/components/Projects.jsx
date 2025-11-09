import React from 'react';
import { Code2, Github, ExternalLink, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Flutter Finance App',
    desc: 'A modern personal finance app with secure auth, charts, and budget tracking.',
    tags: ['Flutter', 'Firebase', 'Charts'],
    code: '#',
    demo: '#',
  },
  {
    title: 'DSA Visualizer',
    desc: 'An interactive web tool to visualize classic data structures and algorithms.',
    tags: ['React', 'Algorithms', 'Visualization'],
    code: '#',
    demo: '#',
  },
  {
    title: 'Client Delivery Platform (DTech)',
    desc: 'Order, project, and deliverable management system tailored for client work.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    code: '#',
    demo: '#',
  },
];

function Projects() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Smartphone className="w-5 h-5 text-emerald-300" />
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              </div>
              <Code2 className="w-5 h-5 text-white/30" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs text-emerald-300/90 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <a href={p.code} className="inline-flex items-center gap-1 hover:text-white/90 text-white/70">
                <Github className="w-4 h-4" /> Code
              </a>
              <a href={p.demo} className="inline-flex items-center gap-1 hover:text-white/90 text-white/70">
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
