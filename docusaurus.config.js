// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hebergtonserv Knowledge',
  tagline: 'Hebergtonserv Knowledge',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hebergtonserv.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hebergtonserv', // Usually your GitHub org/user name.
  projectName: 'HebergtonServ', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Yavzkesta',
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
      // Replace with your project's social card
      image: 'img/logo.webp',
      navbar: {
        title: 'HebergTonServ Doc',
        logo: {
          alt: 'HebergTonServ Logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://hebergtonserv.com',
            label: 'Siteweb',
            position: 'right',
          },

          {
            type: 'localeDropdown',
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
                label: 'documentation',
                to: '/',
              },
            ],
          },
          {
            title: 'HebergTonServ',
            items: [
              {
                label: 'Siteweb',
                href: 'https://hebergtonserv.com',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/hebergtonserv',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hebergtonserv',
              },
            ],
          },
          {
            title: 'Magasin',
            items: [
              {
                label: 'Fivem',
                href: 'https://hebergtonserv.com/fivem',
              },
              {
                label: 'Minecraft',
                href: 'https://hebergtonserv.com/offre/minecraft',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HebergTonserv.com`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
    }),
};

export default config;
