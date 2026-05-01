import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://jiang-lang.org',
  integrations: [
    starlight({
      title: 'Jiang',
      description: 'Documentation for the Jiang programming language.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jjcfun/jiang',
        },
      ],
      sidebar: [
        {
          label: 'Start',
          items: [
            { label: 'Overview', slug: 'index' },
            { label: 'Getting Started', slug: 'getting-started' },
            { label: 'Installation', slug: 'install' },
          ],
        },
        {
          label: 'Language',
          autogenerate: { directory: 'language' },
        },
        {
          label: 'Compiler',
          autogenerate: { directory: 'compiler' },
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
    }),
  ],
});
