# rla8127.github.io

Astro로 만든 개인 블로그 / 포트폴리오. `main` 브랜치에 push하면 GitHub Actions가 빌드해 GitHub Pages에 배포합니다.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 파일 생성
npm run preview  # 빌드 결과 확인
```

## 글 추가하기

`src/content/posts/` 에 `.md` 파일을 만듭니다. 파일 이름이 URL이 됩니다.

```markdown
---
title: 제목
description: 목록에 보일 설명 (선택)
pubDate: 2026-09-15
tags: ['태그']
draft: false
---

본문
```

## 프로젝트 추가하기

`src/content/projects/` 에 `.md` 파일을 만듭니다.

```markdown
---
title: 프로젝트 이름
summary: 한 줄 소개
date: 2026-09-15
stack: ['Python', 'Redis']
repo: https://github.com/rla8127/example
demo: https://example.com
featured: true
draft: false
---

상세 설명
```

`featured: true` 인 프로젝트가 홈 상단에 노출됩니다.

## 구조

```
src/
├── content/
│   ├── posts/        글 (.md)
│   └── projects/     프로젝트 (.md)
├── pages/            라우팅 (파일 = URL)
├── layouts/          공통 레이아웃
├── components/
├── styles/global.css 전역 스타일 (색상 변수는 여기 :root)
├── consts.ts         사이트 이름 / 네비 / 소셜 링크
└── content.config.ts frontmatter 스키마
```

사이트 제목·소개·링크는 `src/consts.ts` 에서 한 번에 고칩니다.

## 참고: Node 버전

로컬 Node가 18이라 Astro 5를 사용합니다 (Astro 7은 Node 22+ 필요).
CI는 Node 22로 빌드하므로 배포 결과에는 영향이 없습니다.

Node 18에서는 `astro check` (타입 검사)가 동작하지 않습니다.
의존성 중 하나가 Node 20+ 에서만 되는 정규식 문법을 써서 그렇습니다.
빌드와 개발 서버는 정상이므로 당장 문제는 없습니다.

Node를 22 이상으로 올리면 최신으로 업그레이드할 수 있습니다.

```bash
npm install astro@latest @astrojs/mdx@latest @astrojs/sitemap@latest @astrojs/rss@latest
npm install -D @astrojs/check typescript   # 타입 검사도 그때 함께
```
