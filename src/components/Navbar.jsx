import React from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'dtech', label: 'DTech' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const onClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
          <span className="font-semibold text-white">Your Name</span>
        </div>
        <nav className="hidden gap-6 text-sm text-slate-200 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onClick(item.id)}
              className="rounded-md px-2 py-1 transition hover:text-white hover:underline"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <a href="#contact" className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100">
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
