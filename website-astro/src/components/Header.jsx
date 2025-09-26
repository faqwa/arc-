import React from 'react';

const navLinks = [
  { href: '/#discover', label: 'Discover' },
  { href: '/framework', label: 'Framework' },
  { href: '/projects', label: 'Projects' },
  { href: '/safety', label: 'Safety' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#091626]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3 text-white">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#0a9396" />
            <path d="M6 12h12M12 6v12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-semibold text-lg tracking-wide">Arc^ Initiative</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-muted transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/join"
            className="rounded-full bg-arkup-teal/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-arkup-teal/20 transition hover:bg-arkup-teal"
          >
            Join
          </a>
        </nav>
        <div className="md:hidden">
          <a
            href="/join"
            className="rounded-full bg-arkup-teal px-3 py-1 text-sm font-semibold text-white"
          >
            Join
          </a>
        </div>
      </div>
    </header>
  );
}
