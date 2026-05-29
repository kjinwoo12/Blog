/**
 * 포트폴리오 콘텐츠 — Notion 페이지 내용을 여기에 맞춰 수정하세요.
 * https://tidal-tortellini-5a0.notion.site/0887482f44bc8240becf81bae5d6b7d4
 */

export type ProjectCategory = 'professional' | 'personal' | 'web';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tags: string[];
  summary: string;
  highlights: string[];
  role?: string;
  period?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
  accent: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const site = {
  name: '김진우',
  title: 'Game & Web Developer',
  tagline: '언리얼 · 유니티 · 웹으로 만드는 인터랙티브 경험',
  email: 'your.email@example.com',
  github: 'https://github.com/KimJinWoo',
  linkedin: '',
  notionSource:
    'https://tidal-tortellini-5a0.notion.site/0887482f44bc8240becf81bae5d6b7d4',
};

export const hero = {
  greeting: '안녕하세요,',
  headline: ['게임 클라이언트와', '웹 경험을 설계합니다'],
  description:
    '언리얼 엔진과 유니티에서 게임플레이·시스템을 구현하고, React 기반 웹으로 도구와 포트폴리오를 만듭니다. 기술 블로그처럼 읽히는 문서화와, 플레이어블한 완성도를 함께 추구합니다.',
  cta: { projects: '프로젝트 보기' },
};

export const about = {
  paragraphs: [
    '게임 엔진(Unity, Unreal)에서 캐릭터·전투·UI 시스템을 다루며, 팀과 개인 프로젝트 모두에서 설계부터 폴리싱까지 경험했습니다.',
    '웹(React, TypeScript)으로는 포트폴리오·내부 도구·문서 사이트를 구축하며, 엔진 기술 글(UE Tech Blog, nullbus 스타일)처럼 구조화된 글쓰기를 선호합니다.',
    '아래 프로젝트·글 목록은 Notion 포트폴리오를 기준으로 구성되어 있습니다. 세부 수치·스크린샷·링크는 `src/data/portfolio.ts`에서 업데이트하세요.',
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Game',
    items: ['Unreal Engine 5', 'Unity', 'C++', 'C#', 'Blueprint', 'Gameplay Systems'],
  },
  {
    label: 'Web',
    items: ['React', 'TypeScript', 'Vite', 'GitHub Pages', 'REST APIs'],
  },
  {
    label: 'Tools & Workflow',
    items: ['Git', 'Perforce', 'Jira', 'Technical Writing', 'Profiling'],
  },
];

export const featuredProjectId = 'featured-01';

export const projects: Project[] = [
  {
    id: 'featured-01',
    title: '대표 프로젝트',
    subtitle: 'Notion에서 지정한 하이라이트 작업',
    category: 'professional',
    tags: ['UE5', 'Gameplay'],
    summary:
      'Notion 포트폴리오의 메인 프로젝트 설명을 여기에 옮겨 주세요. 한 줄 훅과 2~3문단 요약이 효과적입니다.',
    highlights: [
      '핵심 기여 1 — 시스템·역할을 구체적으로',
      '핵심 기여 2 — 성능·품질 지표가 있으면 수치 포함',
      '핵심 기여 3 — 팀 규모·기간·엔진 버전',
    ],
    role: 'Gameplay Programmer',
    period: '20XX — 20XX',
    featured: true,
    accent: '#5eead4',
  },
  {
    id: 'proj-02',
    title: '언리얼 프로젝트',
    subtitle: '3D 액션 / 시스템',
    category: 'professional',
    tags: ['UE5', 'C++', 'Animation'],
    summary: '전투·애니메이션·카메라 등 게임플레이 모듈 설명.',
    highlights: ['FSM 기반 캐릭터', '전투 시스템', '커스텀 충돌·이펙트'],
    accent: '#fbbf24',
  },
  {
    id: 'proj-03',
    title: '유니티 프로젝트',
    subtitle: '모바일 / 툴',
    category: 'personal',
    tags: ['Unity', 'C#'],
    summary: '개인 또는 게임잼·프로토타입 작업.',
    highlights: ['게임플레이 루프', 'UI/UX', '빌드·배포'],
    accent: '#a78bfa',
  },
  {
    id: 'proj-04',
    title: '웹 / 도구',
    subtitle: 'React 포트폴리오·유틸',
    category: 'web',
    tags: ['React', 'TypeScript'],
    summary: '이 GitHub Pages 사이트를 포함한 웹 작업.',
    highlights: ['반응형 레이아웃', 'GitHub Actions 배포', '콘텐츠 데이터 분리'],
    links: [{ label: 'Repository', href: 'https://github.com/KimJinWoo/Portfolio' }],
    accent: '#60a5fa',
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
] as const;
