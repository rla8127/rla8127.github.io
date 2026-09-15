---
title: 블로그를 시작하며
description: Astro와 GitHub Pages로 블로그를 만들었습니다.
pubDate: 2026-09-15
tags: ['astro', 'blog']
draft: false
---

첫 글입니다. 이 파일은 `src/content/posts/hello-world.md` 에 있습니다.

## 글 쓰는 법

`src/content/posts/` 에 `.md` 파일을 만들고 맨 위에 frontmatter를 넣으면 끝입니다.
파일 이름이 그대로 URL이 됩니다 — 이 글은 `/posts/hello-world/` 입니다.

```markdown
---
title: 제목
description: 목록에 보일 한 줄 설명
pubDate: 2026-09-15
tags: ['태그']
draft: false
---
```

`draft: true` 로 두면 로컬에서는 보이지만 배포된 사이트에는 나가지 않습니다.

## 코드 블록

문법 강조는 별도 설정 없이 동작합니다.

```python
async def handle_expired(key: str) -> None:
    parsed = parse_deadline_key(key)
    if parsed is None:
        return
    await release_occupancy(*parsed)
```

앞으로 작업하면서 배운 것들을 여기 정리할 예정입니다.
