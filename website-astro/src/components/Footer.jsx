import React from 'react';

const footerLinks = [
  { label: 'Discover', href: '/#discover' },
  { label: 'Framework', href: '/framework' },
  { label: 'Projects', href: '/projects' },
  { label: 'Safety', href: '/safety' },
  { label: 'Join', href: '/join' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111b]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-muted md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <div className="text-lg font-semibold text-white">Arc^ Initiative</div>
          <p className="max-w-sm text-sm text-muted">
            Restorative plasma research for ecological futures — open, humane, and radically transparent.
          </p>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Arc^ Initiative. Shared under community-minded licenses.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-right">
          <nav className="flex flex-wrap justify-end gap-4 text-xs uppercase tracking-widest">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <div>
            <span className="text-xs uppercase tracking-widest text-muted">Contact</span>
            <div>
              <a href="mailto:writingsbyali@gmail.com" className="font-medium text-white">
                writingsbyali@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
