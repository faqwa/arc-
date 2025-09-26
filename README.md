# Arc^ Web Properties

This repository groups two complementary sites for the Arc^ Initiative:

- rkup-site: a Docusaurus documentation hub (docs, protocols, blog).
- website-astro: the marketing/overview site built with Astro + Tailwind.

## Local development

### Docusaurus docs (rkup-site/website)
`ash
cd arkup-site/website
npm install
npm run start
`
The dev server will reload when you edit docs, blog posts, or React components.

### Astro marketing site (website-astro)
`ash
cd website-astro
npm install
npm run dev
`
Astro provides instant feedback as you edit .astro pages, data files, or components.

## Deployment targets

- rkup-site/website ships static HTML into uild/. It can be published with GitHub Pages via the included workflow or by running 
pm run deploy with appropriate credentials.
- website-astro outputs static assets to dist/. A GitHub Actions workflow can push that folder to Pages (see instructions in website-astro/README.md).

Pick one or both sites to deploy on GitHub Pages depending on your needs (public docs vs. marketing homepage).
