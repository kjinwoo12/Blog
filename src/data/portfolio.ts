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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  href: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const site = {
  name: '김진우',
  title: 'Game & Web Developer',
  tagline: '언리얼 · 유니티 · 웹으로 만드는 인터랙티브 경험',
  github: 'https://github.com/KimJinWoo',
};

export const hero = {
  headline: ['게임 클라이언트와', '웹 경험을 설계합니다'],
  description:
    '언리얼 엔진과 유니티에서 게임플레이·시스템을 구현하고, React 기반 웹으로 도구와 포트폴리오를 만듭니다. 기술 블로그처럼 읽히는 문서화와, 플레이어블한 완성도를 함께 추구합니다.',
  cta: { projects: '프로젝트 보기' },
};

export const about = {
  paragraphs: [
    '게임 엔진(Unity, Unreal)에서 캐릭터·전투·게임플레이·UI 시스템을 다루며, 팀과 개인 프로젝트 모두에서 설계부터 폴리싱까지 경험했습니다.',
    '웹 프론트는 React와 Angular로 포트폴리오·내부 도구·문서 사이트를 구축하거나 SPA 서비스를 개발합니다.',
    'AWS, Firebase와 같은 클라우드를 활용한 백엔드 서비스, REST API 개발 및 라이브 서비스 경험이 있습니다.'
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Game',
    items: ['Unreal Engine 5', 'Unity', 'C++', 'C#', 'Gameplay Ability System', 'Blueprint', 'DirectX'],
  },
  {
    label: 'Web',
    items: ['HTML/CSS3/javascript', 'React', 'TypeScript', 'Angular', 'REST API'],
  },
  {
    label: 'Tools & Workflow',
    items: ['Git', 'Github', 'GitHub Pages', 'Git branching management', 'Technical Writing'],
  },
];

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'GitHub Pages · React',
    category: 'web',
    tags: ['React', 'TypeScript', 'Vite'],
    summary:
      '게임·웹 개발자 포트폴리오 사이트. React Router와 GitHub Actions로 빌드·배포합니다.',
    highlights: [
      'SPA + hash 스크롤 네비게이션',
      '콘텐츠를 `portfolio.ts`로 분리',
      'GitHub Pages 배포',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/KimJinWoo/Portfolio' }],
    featured: true,
    accent: '#60a5fa',
  },
];

export const blogPosts: BlogPost[] = [];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  ...(blogPosts.length > 0 ? [{ id: 'writing' as const, label: 'Writing' }] : []),
] as const;
