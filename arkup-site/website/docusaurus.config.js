// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARKUP — Open Remediation Framework',
  tagline: 'Docs-first scaffold for remediation research',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://xbyali.page',
  baseUrl: '/',

  organizationName: 'arkup',
  projectName: 'arkup-site',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ARKUP',
        logo: {
          alt: 'ARKUP logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'projects/index',
            label: 'Projects',
            position: 'left',
          },
          {
            href: 'https://github.com/arkup/arkup-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Framework Overview',
                to: '/docs/',
              },
              {
                label: 'Projects',
                to: '/docs/projects/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord (coming soon)',
                href: 'https://example.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/arkup/arkup-site',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ARKUP. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
