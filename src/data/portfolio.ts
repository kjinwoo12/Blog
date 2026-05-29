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
    items: ['Git', 'Git Branching Management', 'Cursor', 'Technical Writing', 'Profiling'],
  },
];

export const featuredProjectId = 'ue5-perspective-minimap';

export const projects: Project[] = [
  {
    id: 'sbs-game-academy',
    title: 'SBS게임아카데미 대전',
    subtitle: '언리얼 · 유니티 · 프로그래밍 강사',
    category: 'professional',
    tags: ['Unreal Engine', 'Unity', 'Teaching'],
    summary:
      '2025년 6월부터 언리얼·유니티·프로그래밍 강사로 근무 중입니다. 논산문화예술전문학교 데일리 클래스와 목원대학교 UE5 강의를 담당합니다.',
    highlights: [
      '언리얼·유니티·프로그래밍 정규 강의',
      '논산문화예술전문학교 데일리 클래스(연 1~4회)',
      '목원대학교 언리얼5 강의',
    ],
    role: 'Instructor',
    period: '2025-06 — 현재',
    accent: '#5eead4',
  },
  {
    id: 'cocktail-partners-ai-tool',
    title: '칵테일 파트너스',
    subtitle: '생성형 AI 컨셉아트 툴 (파트타임)',
    category: 'professional',
    tags: ['React', 'Electron', 'Stable Diffusion', 'OpenAI'],
    summary:
      '캐릭터·영화 시나리오 컨셉아트를 위한 생성형 AI 이미지 툴 프로토타입을 개발했습니다. React와 Electron 기반 SPA로 구현했습니다.',
    highlights: [
      '자연어를 그림 생성용 프롬프트로 변환',
      'Stable Diffusion·DALL·E API로 생성·부분 수정·이미지 확장',
      'React + Electron SPA 프로토타입',
    ],
    role: 'Prototype Developer',
    accent: '#c084fc',
  },
  {
    id: 'elly-creative-fcb',
    title: '주식회사 일리크리에이티브',
    subtitle: 'UE4 모바일 · FC바르셀로나 IP',
    category: 'professional',
    tags: ['UE4', 'C++', 'AR', 'Photon'],
    summary:
      'Unreal Engine 4로 FC바르셀로나 IP 모바일 게임을 개발했습니다. GPS·AR(Coala), Photon Cloud 멀티플레이를 활용한 위치 기반 수집형 게임입니다.',
    highlights: [
      'Coala GPS 3D·AR 기반 포켓몬 Go 스타일 콘텐츠',
      'Photon Cloud 멀티플레이 구현',
      '기기별 머티리얼 이슈 해결·중복 에셋 정리로 팀 생산성 개선',
    ],
    role: 'UE4 Client Programmer',
    period: '2022-08 — 2023-04',
    accent: '#fbbf24',
  },
  {
    id: 'acro-ai-musio',
    title: '주식회사 아카에이아이',
    subtitle: 'AOSP AI 로봇 · Musio',
    category: 'professional',
    tags: ['Android', 'Java', 'AOSP', 'AWS'],
    summary:
      'AOSP 기반 AI 영어 대화 로봇 Musio 프로젝트에 참여했습니다. Git Maintainer로 git-flow 기반 6회 릴리즈·OTA를 진행하고, 콘텐츠·교육·모듈 개발을 담당했습니다.',
    highlights: [
      'AOSP 로봇 Git Maintainer — git-flow, Line-Comment 코드리뷰, 6회 릴리즈',
      'JSON 스크립트 인터프리터·AWS 서버리스로 OTA 없이 콘텐츠 배포',
      'OpenGL 전환으로 렌더링 10fps → 50fps+ 개선, libGDX 게임 10여 종',
      'Angular·Chart.js 영어 교육 사이트(ReSmart) 프론트엔드·구글 플레이 출시',
    ],
    role: 'Software Engineer (산업기능요원)',
    period: '2016-08 — 2020-11',
    links: [{ label: 'Musio', href: 'https://themusio.com/home' }],
    accent: '#60a5fa',
  },
  {
    id: 'ue5-perspective-minimap',
    title: 'UE5 Perspective Minimap',
    subtitle: 'UE5 플러그인',
    category: 'personal',
    featured: true,
    tags: ['UE5', 'C++', 'Plugin'],
    summary:
      'UE5용 원근 미니맵 플러그인. 플레이어 시야와 맵 표현을 연결하는 미니맵 시스템을 모듈로 제공합니다.',
    highlights: [
      '원근 기반 미니맵 렌더링·표시',
      'UE5 프로젝트에 플러그인 형태로 통합',
      '오픈소스로 배포·유지보수 (GitHub)',
    ],
    period: '2024-07 — 2024-11',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/kjinwoo12/UE5_PerspectiveMinimap',
      },
    ],
    accent: '#34d399',
  },
  {
    id: 'ue5-equipment-library',
    title: 'UE5 Equipment Library',
    subtitle: 'Gameplay Ability System',
    category: 'personal',
    tags: ['UE5', 'C++', 'GAS'],
    summary:
      'Gameplay Ability System(GAS) 기반 장비·능력 연동 라이브러리. UE5에서 장비 슬롯과 어빌리티를 일관되게 다루기 위한 개인 연구 프로젝트입니다.',
    highlights: [
      'GAS와 연동된 장비·어빌리티 구조',
      '재사용 가능한 장비 라이브러리 형태',
      'C++ 중심 UE5 게임플레이 코드',
    ],
    period: '2024-02 — 2024-03',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/kjinwoo12/UE5_EquipmentLibrary',
      },
    ],
    accent: '#a78bfa',
  },
  {
    id: 'ue4-network-fps',
    title: 'UE4 Network FPS',
    subtitle: '멀티플레이 FPS 스터디',
    category: 'personal',
    tags: ['UE4', 'C++', 'Networking'],
    summary:
      'Unreal Engine 4로 제작한 네트워크 FPS 학습 프로젝트. 멀티플레이 동기화와 FPS 게임플레이 루프를 실습합니다.',
    highlights: [
      'UE4 멀티플레이·복제 기반 FPS',
      '네트워크 게임플레이 학습·프로토타입',
      '장기간 개선·실험 (develop 브랜치)',
    ],
    period: '2020-12 — 2022-09',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/kjinwoo12/UE4Study-NetworkFPS',
      },
    ],
    accent: '#f472b6',
  },
  {
    id: 'body-script-runner',
    title: 'body-script-runner',
    subtitle: 'DOM 템플릿 유틸',
    category: 'web',
    tags: ['JavaScript', 'DOM'],
    summary:
      'HTML innerText에 Django 템플릿처럼 JavaScript를 실행하는 경량 스크립트 러너. 정적 페이지에서 데이터 바인딩·동적 문구를 실험하기 위해 만들었습니다.',
    highlights: [
      'innerText 기반 템플릿 실행',
      'Django 템플릿 문법에 가까운 사용감',
      '브라우저·Node 없이 순수 JS로 동작',
    ],
    period: '2024-03 — 2024-04',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/kjinwoo12/body-script-runner',
      },
    ],
    accent: '#fb923c',
  },
  {
    id: 'ue4-localization-csv-converter',
    title: 'UE4 Localization CSV Converter',
    subtitle: '로컬라이제이션 도구',
    category: 'web',
    tags: ['HTML', 'Localization', 'UE4'],
    summary:
      '언리얼 로컬라이제이션 작업을 돕는 CSV 변환 웹 도구. 번역·스프레드시트 워크플로를 단순화합니다.',
    highlights: [
      'UE4 로컬라이제이션 CSV 변환',
      '브라우저에서 바로 쓰는 단일 HTML 도구',
      '번역 파이프라인 보조용 유틸',
    ],
    period: '2023-03 — 2024-11',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/kjinwoo12/UE4-Easy-Localization-CSV-Converter',
      },
    ],
    accent: '#38bdf8',
  },
  {
    id: 'duoball',
    title: 'DuoBall',
    subtitle: '모바일 캐주얼',
    category: 'personal',
    tags: ['Java', 'Android'],
    summary:
      '안드로이드 캐주얼 게임입니다. 디자이너 1명과 함께 제작했으며 모바일 콘텐츠 경진대회 출품작입니다.',
    highlights: [
      '2인 팀(코딩·디자인)으로 제작',
      '모바일 콘텐츠 경진대회 출품',
      '안드로이드 캐주얼 게임플레이',
    ],
    accent: '#f9a8d4',
  },
  {
    id: 'nebal-dubal',
    title: '네발?두발!',
    subtitle: 'DirectX9 플랫폼',
    category: 'personal',
    tags: ['C++', 'DirectX'],
    summary:
      'DirectX9으로 제작한 플랫폼 게임입니다. 교내 디지털 콘텐츠 경진대회 출품작으로, 2명의 프로그래머와 2명의 디자이너가 함께했습니다.',
    highlights: [
      '보스 라운드 공격 패턴·플레이어·보스 판정',
      '스프라이트 기반 숫자 출력',
      '플레이어·시민 캐릭터 상호작용',
    ],
    period: '2014',
    accent: '#fcd34d',
  },
  {
    id: 'infinite-mission',
    title: 'Infinite Mission',
    subtitle: 'DirectX9 탑뷰 슈팅',
    category: 'personal',
    tags: ['C++', 'DirectX'],
    summary:
      'DirectX9 탑뷰 슈팅 게임입니다. 디지털 콘텐츠 대회에서 동상을 수상했으며, DirectX 학습 후 처음으로 완성한 작품입니다.',
    highlights: [
      '아웃게임·UI·사운드·유닛 충돌 등 기본 시스템',
      '파일 I/O 기반 상점·점수 등 게임 상태 관리',
      '하단 UI에 캐릭터 정보 표시·런타임 갱신',
    ],
    period: '2014',
    accent: '#86efac',
  },
  {
    id: 'barunmal-keypad',
    title: '바른말키패드',
    subtitle: '삼성 투모로우 솔루션',
    category: 'personal',
    tags: ['Android', 'Java'],
    summary:
      '삼성 투모로우 솔루션 출품 안드로이드 키패드 앱입니다. 비속어 사용 시 통계·피드백을 제공해 바른말 사용을 돕습니다.',
    highlights: [
      '아이디어 부문 우수상·임팩트 부문 최우수상',
      '비속어 감지·통계·사용자 피드백',
      '4인 개발팀(개발자)으로 제작',
    ],
    accent: '#93c5fd',
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
] as const;
