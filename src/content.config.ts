import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 글: src/content/posts/*.md(x)
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// 프로젝트: src/content/projects/*.md(x)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // 목록에서 정렬 기준으로 씁니다.
    date: z.coerce.date(),
    // 사용 기술 스택 뱃지
    stack: z.array(z.string()).default([]),
    // 외부 링크 (없으면 상세 페이지만 노출)
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    // 대표 프로젝트는 메인 상단에 노출
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
