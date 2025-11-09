import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Experience */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-indigo-500" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Experience</h2>
          </div>
          <ul className="space-y-5">
            <li className="rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">Founder & Lead Developer — DTech</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Building and selling tailored software solutions for clients: mobile apps, web platforms, and automations.
              </p>
              <p className="mt-2 text-xs text-slate-500">2023 — Present</p>
            </li>
            <li className="rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">Freelance Flutter Developer</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Delivered cross‑platform apps with clean architecture, CI/CD, and analytics.
              </p>
              <p className="mt-2 text-xs text-slate-500">2021 — 2023</p>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-indigo-500" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Education</h2>
          </div>
          <ul className="space-y-5">
            <li className="rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">B.Tech in Computer Engineering</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Focus: Data Structures & Algorithms, Systems, and Mobile Development.</p>
              <p className="mt-2 text-xs text-slate-500">Expected Graduation: 2025</p>
            </li>
            <li className="rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">Competitive Programming & DSA</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Solved 500+ problems; participated in contests and hackathons.</p>
              <p className="mt-2 text-xs text-slate-500">Ongoing</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
