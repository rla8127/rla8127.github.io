// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // <username>.github.io 형태라 base는 비워둡니다.
  // (프로젝트 페이지였다면 base: '/repo-name' 이 필요합니다.)
  site: 'https://rla8127.github.io',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
