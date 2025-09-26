import React from 'react';

const statusColor = {
  draft: 'bg-[#ffb703]/30 text-[#ffb703]',
  idea: 'bg-white/10 text-white',
  stable: 'bg-arkup-teal/30 text-arkup-teal',
};

function formatStatus(label = '') {
  if (!label) return '';
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export default function ProjectCard({ title, description, status = 'draft', link }) {
  const key = status?.toLowerCase();
  const badgeClass = statusColor[key] ?? 'bg-white/10 text-white';

  return (
    <article className="border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:border-white/20 hover:shadow-black/30">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${badgeClass}`}>
          {formatStatus(status)}
        </span>
      </div>
      <p className="mt-4 text-sm text-muted">{description}</p>
      <div className="mt-6 flex items-center justify-between text-xs text-muted">
        <a className="font-semibold uppercase tracking-widest text-white underline underline-offset-4" href={link}>
          Enter project
        </a>
        <span className="text-muted">Updates coming soon</span>
      </div>
    </article>
  );
}
