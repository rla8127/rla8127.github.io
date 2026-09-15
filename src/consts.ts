// 사이트 전역 설정 — 이름/소개/링크는 여기만 고치면 전체에 반영됩니다.
export const SITE = {
  title: '김동현',
  description: '백엔드 개발자 김동현의 프로젝트와 기록',
  author: '김동현',
  url: 'https://rla8127.github.io',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
  { href: '/about', label: 'About' },
] as const;

// 푸터/About에 노출할 링크. 값이 빈 문자열이면 렌더링되지 않습니다.
export const SOCIAL = {
  github: 'https://github.com/rla8127',
  email: '',
  linkedin: '',
} as const;
