const path = require('path');

module.exports = {
  title: 'Harmony Reference',
  tagline: 'The tagline of Harmony Reference',
  url: 'https://harmony.mobilejazz.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mobilejazz', // Usually your GitHub org/user name.
  projectName: 'harmony-reference', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Harmony',
      logo: {
        alt: 'Harmony Reference Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/introduction', label: 'Reference', position: 'left'},
        {
          href: 'https://github.com/mobilejazz/harmony-reference',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/doc1',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'Social',
        //   items: [
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mobile Jazz`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'pages',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mobilejazz/harmony-reference/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
