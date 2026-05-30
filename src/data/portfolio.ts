export type ProjectCategory = 'professional' | 'personal' | 'web';

export interface ProjectImage {
  /** `public/` 기준 경로 (예: resources/projects/foo.webp) */
  src: string;
  alt: string;
}

export interface ProjectDetailSection {
  title: string;
  paragraphs: string[];
}

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
  images?: ProjectImage[];
  /** YouTube 등 iframe embed URL (예: https://www.youtube.com/embed/VIDEO_ID) */
  videoEmbedUrl?: string;
  /** 상세 페이지 접이식 본문 */
  detailSections?: ProjectDetailSection[];
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
  github: 'https://github.com/KimJinWoo',
};

export const hero = {
  headline: ['게임 클라이언트와', '웹 경험을 설계합니다'],
  description:
    '언리얼 엔진과 유니티에서 게임플레이·시스템을 구현하고, React 기반 웹으로 도구와 포트폴리오를 만듭니다. 기술 블로그처럼 읽히는 문서화와, 플레이어블한 완성도를 함께 추구합니다.',
  cta: { projects: '프로젝트 보기' },
};

// 세부 수치·스크린샷·링크: Notion 동기화 후 projects[]·about 문단 갱신.
export const about = {
  image: {
    src: 'resources/site/about_01.webp',
    alt: '김진우 프로필 사진',
  },
  paragraphs: [
    '개발 팀에서 클라이언트 개발과 릴리즈·협업을 담당해 왔으며, 모바일과 멀티플레이, 플랫폼 확장까지 서비스 단위로 경험했습니다. 현재는 게임 개발 실무와 프로그래밍 교육을 병행하고 있습니다.',
    '개인 작업에서는 게임플레이 시스템과 네트워크, 워크플로 도구를 스스로 설계·검증하며 게임 개발과 웹을 함께 다루고 있습니다. 아이디어를 빠르게 옮기고 다듬는 것부터 정리·공유까지, 한 작업을 끝까지 마무리하는 방식을 선호합니다.',
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
      '2025년 6월부터 언리얼·유니티·프로그래밍 강사로 근무 중입니다.',
    highlights: [
      '언리얼·유니티·프로그래밍 정규 강의',
      '논산문화예술전문학교 데일리 클래스(연 1~4회)',
      '목원대학교 언리얼5 강의',
    ],
    role: 'Instructor',
    period: '2025-06 — 현재',
    images: [
      {
        src: 'resources/projects/Nonsan_01.webp',
        alt: '논산문화예술전문학교 데일리 클래스 — 강의실 강의 장면',
      },
      {
        src: 'resources/projects/Nonsan_02.webp',
        alt: '논산문화예술전문학교 데일리 클래스 — 실습실 수업 장면',
      },
    ],
    accent: '#5eead4',
  },
  {
    id: 'cocktail-partners-ai-tool',
    title: '칵테일 파트너스',
    subtitle: '생성형 AI 컨셉아트 툴 (파트타임)',
    category: 'professional',
    tags: ['React', 'Electron', 'Node.js', 'Stable Diffusion', 'OpenAI'],
    summary:
      'React와 Electron 기반 SPA로 캐릭터·영화 시나리오 컨셉아트를 위한 생성형 AI 이미지 툴 프로토타입을 개발했습니다.',
    highlights: [
      '자연어를 그림 생성에 적합한 프롬프트로 변환',
      'Stable Diffusion·DALL·E API로 이미지 생성·부분 수정·확장',
      'React + Electron SPA 프로토타입',
    ],
    role: 'Prototype Developer',
    period: '2024-02 — 2024-07',
    images: [
      {
        src: 'resources/projects/CocktailPartners_01.webp',
        alt: '칵테일 파트너스 — 생성형 AI 컨셉아트 툴 화면',
      },
    ],
    videoEmbedUrl: 'https://www.youtube.com/embed/w-fQTaQGqjs',
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
    tags: ['Android', 'Java', 'AOSP', 'AWS', 'OpenGL', 'Angular'],
    summary:
      'AOSP 기반 AI 영어 대화 로봇 Musio와 OID 센서 보조 도구 Sophy 프로젝트에 참여했습니다. 2018년부터 산업기능요원으로 Git Maintainer·콘텐츠·교육·모듈 개발을 담당했습니다.',
    highlights: [
      'AOSP 로봇 Git Maintainer — git-flow, Line-Comment 코드리뷰, 6회 릴리즈·OTA',
      'README·모듈 문서 정비로 신규 개발자 온보딩 2주 → 3~4일',
      'JSON 스크립트 인터프리터·AWS 서버리스(S3, Lambda, DynamoDB, API Gateway)로 OTA 없이 콘텐츠 배포',
      'Flask 영어 첨삭 사이트 유지보수·첨삭 담당자용 DynamoDB 관리 UI',
      'OpenGL 전환으로 렌더링 10fps → 50fps+ 개선, libGDX 게임 10여 종 개발·관리',
      'FFmpeg 래퍼·MediaPlayer 이중 버퍼로 루프스테이션 오디오 딜레이 해결',
      'Angular·Chart.js·Speech API 영어 교육 사이트(ReSmart) 프론트엔드·구글 플레이 출시',
    ],
    role: 'Software Engineer (산업기능요원)',
    period: '2016-08 — 2020-11',
    links: [{ label: 'Musio', href: 'https://themusio.com/home' }],
    images: [
      {
        src: 'resources/projects/AkaAi_01.webp',
        alt: 'Musio AI 영어 대화 로봇',
      },
      {
        src: 'resources/projects/AkaAi_02.webp',
        alt: 'Sophy OID 센서 — ABC 학습 카드 콘텐츠',
      },
      {
        src: 'resources/projects/AkaAi_ResmartApp_01.webp',
        alt: 'ReSmart 앱 — 인지 분석 Memory·Meditation 화면',
      },
      {
        src: 'resources/projects/AkaAi_ResmartApp_02.webp',
        alt: 'ReSmart 앱 — 일일 걸음·활동 대시보드',
      },
      {
        src: 'resources/projects/AkaAi_ResmartApp_03.webp',
        alt: 'ReSmart 앱 — Activity 학습 통계·랭킹',
      },
      {
        src: 'resources/projects/AkaAi_ResmartApp_04.webp',
        alt: 'ReSmart 앱 — Live chat AI 대화',
      },
    ],
    detailSections: [
      {
        title: 'Git 관리',
        paragraphs: [
          'GitLab Enterprise로 회사 주력 제품인 AOSP 기반 AI 로봇 git 프로젝트를 Maintainer로 관리했습니다. Git-flow를 적용해 총 6번의 릴리즈를 진행했고, Merge Request마다 Line Comment로 코드 리뷰를 진행했습니다. 모듈별 문서 작성·feature 브랜치 테스트 후 통합·주기적 OTA 업데이트를 담당했습니다.',
          'Git 관리 이전 팀원 교체로 인수인계가 미흡해 문서와 git 프로젝트 관리에 문제가 있었습니다. README.md에 기획 문서·API 정보·관리 문서 링크를 정리하고, 부족한 정보는 관련 담당자를 찾아 보충했습니다. 담당자가 부재일 때는 코드를 직접 분석·테스트하며 문서를 작성했고, 신규 개발자의 프로젝트 적응 기간이 평균 2주에서 3~4일로 줄었습니다.',
        ],
      },
      {
        title: '영어 첨삭 사이트 유지보수',
        paragraphs: [
          'Flask로 운영 중인 영어 에세이 첨삭 사이트를 유지보수했습니다. 문제 발생 시 운영 담당자와 내용을 공유한 뒤 UI 변경이나 DB 관리 툴 개발 등으로 대응했습니다.',
          '유료 서비스 특성상 민감했던 잘못된 파일 업로드 문제는, DynamoDB·S3를 직접 수정하는 대신 첨삭 담당자가 잔여 첨삭 횟수와 요청 파일을 직접 처리할 수 있는 UI를 새로 구성해 해결했습니다.',
        ],
      },
      {
        title: '콘텐츠 개발용 인터프리터 개발 및 환경 구축',
        paragraphs: [
          'Dot Code가 인쇄된 책과 OID 센서를 사용하는 콘텐츠 개발에 참여했습니다. 초기에는 콘텐츠 추가마다 AOSP 앱을 빌드·탑재하고 OS 전체 OTA를 진행해야 해, OS 빌드(약 1시간)와 테스트(하루) 때문에 실시간 확인이 어려웠습니다.',
          'OTA 없이 콘텐츠를 지속 추가할 수 있는 환경을 위해 전용 인터프리터 개발을 CTO에게 제안했고, 스크립트 문법을 정의한 뒤 인터프리터를 구현했습니다. DB의 스크립트·리소스 정보를 Lambda로 요청하고 S3에서 다운로드해 실행하도록 했으며, JSON 스크립트를 문법에 맞게 실행하는 인스턴스가 OID 센서와 로봇 동작·연산을 담당합니다.',
        ],
      },
      {
        title: '콘텐츠 개발 및 유지보수',
        paragraphs: [
          'libGDX와 OpenGL을 이용한 10여 개의 게임을 개발·관리했습니다. libGDX는 웹·윈도우·안드로이드·iOS 등으로 빌드할 수 있어, 테스트 기기가 부족할 때 웹 빌드로 팀원과 공유하며 테스트할 수 있었습니다.',
        ],
      },
      {
        title: '기능 모듈 개발 및 개선',
        paragraphs: [
          '하드웨어 부품 변경으로 스펙이 낮아지면서 렌더링 속도 저하와 사운드 출력 딜레이가 발생했습니다. 애니메이션 재생 구간을 성능이 좋은 OpenGL로 교체해 평균 렌더링 속도를 10fps에서 50fps 이상으로 올렸고, libGDX 게임·GIF 재생·안드로이드 기본 뷰 애니메이션에도 적용했습니다.',
          '루프스테이션의 MediaPlayer 반복 재생 딜레이는 오디오 리소스마다 두 개의 MediaPlayer를 번갈아 재생해 제거했습니다. FFmpeg를 편하게 쓸 수 있는 사운드 변환 모듈을 만들어, 루프스테이션 연주 사운드 파일 인코딩에 활용했습니다.',
        ],
      },
      {
        title: 'AI 기술 활용 영어 교육 사이트 개발',
        paragraphs: [
          '영어 교육 사이트 프로토타입을 개발했고, 긍정적인 반응으로 실제 운영 가능한 사이트로 확장했습니다. 저학년용 객관식·Speech API 문제와 고학년용 AI 대화·대화 기반 영어 수준 평가 기능을 포함합니다. 프론트엔드 전반, 대화 인터페이스, 평가 결과 시각화(Chart.js)를 담당했고 ReSmart로 출시했습니다.',
          '다양한 문제 유형을 하나의 HTML에서 관리하기 어려워, 컴포넌트 기반 Angular를 선택했습니다. 새 페이지 요청 시에도 클라이언트에서 컴포넌트만 교체해 보여주어 불필요한 로딩 시간을 줄였습니다.',
        ],
      },
      {
        title: '구글 플레이 앱 출시 관리',
        paragraphs: [
          '로봇과 연동하는 ReSmart 앱을 개발하고 구글 플레이 스토어에 출시했습니다. 로봇 사용 통계와 앱 연동 기능을 제공하며, 업데이트 내역 작성·테스트 계정 관리·APK 업로드를 담당했습니다.',
        ],
      },
    ],
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
    images: [
      {
        src: 'resources/projects/PerspectiveMinimap_01.webp',
        alt: 'UE5 Perspective Minimap — 원근 미니맵 위 경로·웨이포인트 표시',
      },
    ],
    accent: '#34d399',
  },
  {
    id: 'ue5-wilders-rush',
    title: 'UE5 와일더스 러쉬',
    subtitle: 'Lyra · 멀티플레이 액션',
    category: 'personal',
    tags: ['UE5', 'Lyra', 'C++', 'Multiplayer'],
    summary:
      'UE5 Lyra Framework 기반 멀티플레이 액션 프로젝트입니다.',
    highlights: [
      '한국콘텐츠진흥원 IR demo-day 최우수상',
      'KOCCA demo day 도전트랙 3위',
      'Lyra 기반 무브먼트·ALS 애니메이션·게임룰·진행도 서브시스템',
      '언리얼 네비게이션 순위 시스템·미니맵 플러그인 개발·개선',
      '멀티플레이 안정성 개선·개발 PM 병행',
    ],
    role: 'Client Programmer · PM',
    links: [
      {
        label: '관련 기사',
        href: 'https://www.sisajournal-e.com/news/articleView.html?idxno=407476',
      },
    ],
    images: [
      {
        src: 'resources/projects/UE5WildersRush.webp',
        alt: 'UE5 와일더스 러쉬 — 게임플레이 스크린샷',
      },
    ],
    videoEmbedUrl: 'https://www.youtube.com/embed/-Mwr_0sPYxU',
    accent: '#f97316',
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
    videoEmbedUrl: 'https://www.youtube.com/embed/Fn1bre6CRhk',
    accent: '#f9a8d4',
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
    videoEmbedUrl: 'https://www.youtube.com/embed/ouChTtqhafc',
    images: [
      {
        src: 'resources/projects/InfiniteMission_01.webp',
        alt: 'Infinite Mission — 메인 메뉴 화면',
      },
    ],
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
    images: [
      {
        src: 'resources/projects/BitByte.webp',
        alt: '바른말키패드 — 앱 화면',
      },
    ],
    accent: '#93c5fd',
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
] as const;
