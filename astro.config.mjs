import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://jiang-lang.org',
  integrations: [
    starlight({
      title: 'Jiang',
      description: 'Documentation for the Jiang programming language.',
      logo: {
        src: './public/logo.svg',
        alt: 'Jiang logo',
      },
      customCss: ['/src/styles/custom.css'],
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
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
          translations: { 'zh-CN': '开始' },
          items: [
            { label: 'Overview', translations: { 'zh-CN': '概览' }, slug: 'index' },
            { label: 'Getting Started', translations: { 'zh-CN': '快速开始' }, slug: 'getting-started' },
            { label: 'Installation', translations: { 'zh-CN': '安装' }, slug: 'install' },
          ],
        },
        {
          label: 'Language',
          translations: { 'zh-CN': '语言' },
          autogenerate: { directory: 'language' },
        },
        {
          label: 'Compiler',
          translations: { 'zh-CN': '编译器' },
          autogenerate: { directory: 'compiler' },
        },
        {
          label: 'Examples',
          translations: { 'zh-CN': '示例' },
          autogenerate: { directory: 'examples' },
        },
      ],
    }),
  ],
});
