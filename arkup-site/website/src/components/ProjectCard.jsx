import React from 'react';

export default function ProjectCard({ title, description, link }) {
  return (
    <div style={{
      border: '1px solid #e6e6e6',
      padding: 16,
      borderRadius: 8,
      marginBottom: 12,
      maxWidth: 480
    }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p>{description}</p>
      <a href={link}>Open</a>
    </div>
  );
}
