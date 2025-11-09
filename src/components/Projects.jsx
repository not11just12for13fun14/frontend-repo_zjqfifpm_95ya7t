import React from 'react';
import { Github, ExternalLink, Smartphone, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Flutter Finance Tracker',
    tags: ['Flutter', 'Firebase', 'Provider'],
    desc: 'Cross‑platform app to track expenses, budgets, and insights with real‑time sync.',
    links: {
      github: 'https://github.com/',
      demo: 'https://example.com'
    }
  },
  {
    title: 'DSA Visualizer',
    tags: ['React', 'Algorithms', 'Viz'],
    desc: 'Interactive visualizations for graphs, sorting, DP and more with step‑through controls.',
    links: {
      github: 'https://github.com/',
      demo: 'https://example.com'
    }
  },
  {
    title: 'DTech Client Portal',
    tags: ['Next.js', 'Tailwind', 'Auth'],
    desc: 'A portal for clients to track project milestones, invoices, and deliverables.',
    links: {
      github: 'https://github.com/',
      demo: 'https://example.com'
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center gap-3">
        <Smartphone className="h-6 w-6 text-indigo-500" />
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Featured Projects</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-slate-900"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-300">
              <Code2 className="h-4 w-4" />
              <span>{p.tags.join(' • ')}</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900"
              >
                <Github className="h-4 w-4" /> Code
              </a>
              <a
                href={p.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-1.5 text-white transition hover:bg-indigo-500"
              >
                <ExternalLink className="h-4 w-4" /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
