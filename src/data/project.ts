export type ProjectTool =
  | 'unreal-engine'
  | 'fortnite'
  | 'level-design'
  | 'blueprints'
  | 'multiplayer'
  | 'react'
  | 'javascript'
  | 'tailwind'
  | 'csharp'
  | 'aspnet'
  | 'go'
  | 'python'
  | 'api'
  | 'unity';

export type ProjectCategory = 'game' | 'web';

export interface ProjectTag {
  label: string;
  isWebTag?: boolean;
}

export interface Project {
  id: string;
  title: string;
  thumb: string;
  thumbAlt: string;
  category: ProjectCategory;
  tags: ProjectTag[];
  description: string;
  tools: ProjectTool[];
  media: string;
  mediaType: 'image' | 'video';
  mediaAlt: string;
  detailedDescription: string;
  technologies: string;
  features: string[];
  responsibilities: string[] | null;
  github: string | null;
  steam: string | null;
  liveDemo: string | null;
  designDoc: string | null;
  medium: string | null;
  youtube: string | null;
  bgimg: string | null;
  genre: string | null;
  platform: string | null;
  teamsize: string | null;
  duration: string | null;
  released: string | null;
}

export const gameTools: { id: ProjectTool; label: string }[] = [
  { id: 'unreal-engine', label: 'Unreal Engine' },
  { id: 'fortnite', label: 'UEFN' },
  { id: 'blueprints', label: 'Blueprints' },
  { id: 'multiplayer', label: 'Multiplayer' },
  { id: 'unity', label: 'Unity' }
];

export const webTools: { id: ProjectTool; label: string }[] = [
  { id: 'react', label: 'React' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'tailwind', label: 'Tailwind CSS' },
  { id: 'csharp', label: 'C#' },
  { id: 'aspnet', label: 'ASP.NET MVC' },
  { id: 'go', label: 'Go' },
  { id: 'python', label: 'Python' },
  { id: 'api', label: 'APIs' }
];

const projects: Project[] = [
  {
    id: 'arcane-odyssey',
    title: 'Arcane Odyssey',
    thumb: 'https://www.dropbox.com/scl/fi/iirjc7cy8l5lo3rafdtk6/ao.mp4?rlkey=amtguws2frifn51pngsrrk0c2&st=vzm2hjiz&raw=1',
    thumbAlt: 'Arcane Odyssey preview video',
    category: 'game',
    tags: [
      { label: 'Game Design' },
      { label: 'Level Design' },
      { label: 'UEFN' },
      { label: 'Verse' }
    ],
    description: 'A gacha adventure multiplayer Fortnite Island where teams collect items and keys to escape.',
    tools: ['fortnite', 'level-design', 'multiplayer'],
    media: '/assets/img/game/aRCANEoDYSSEY/arcaneodyssey.webp',
    mediaType: 'image',
    mediaAlt: 'Screenshot of Arcane Odyssey game environment',
    detailedDescription: 'Arcane Odyssey is a gacha-based, team-versus-team adventure set on a mystical Fortnite island...',
    technologies: 'UEFN, Level Design, Game Design',
    features: [
      'Multiple biomes: Greenland, Desert, Iceland',
      'Puzzle-solving and exploration mechanics',
      'Interactive traps, monsters, and trading',
      'Expandable co-op gameplay mode'
    ],
    responsibilities: [
      'Navigation systems and gameplay features',
      'Immersive level design and story iteration',
      'Balancing design and technical execution'
    ],
    github: null,
    steam: null,
    liveDemo: 'https://www.unrealengine.com/blog/check-out-the-sizzle-reel-from-the-most-recent-women-creators-program',
    designDoc: null,
    medium: null,
    youtube: null,
    bgimg: 'https://www.dropbox.com/scl/fi/cdi4dkheckowcso9taq9o/arcaneodyssey.webp?rlkey=qjfo9ktcjzkv2qowu0etl5gag&st=27cn2qv7&raw=1',
    genre: 'Adventure, Multiplayer',
    platform: 'PC',
    teamsize: '4',
    duration: '2 months',
    released: null
  },
  {
    id: 'wagtd',
    title: "We're All Going To Die!",
    thumb: 'https://www.dropbox.com/scl/fi/42ya3asxdutrz5uqg736y/wagtd-v.mp4?rlkey=8lawh05nswwthg9zos9b53wfk&st=cmqmdb15&raw=1',
    thumbAlt: 'WAGTD gameplay trailer',
    category: 'game',
    tags: [
      { label: 'Level Design' },
      { label: 'Unreal Engine' },
      { label: 'Blueprints' }
    ],
    description: 'A top-down co-op twin-stick shooter facing waves of varied enemies.',
    tools: ['unreal-engine', 'level-design', 'blueprints', 'multiplayer'],
    media: '/assets/img/game/wagtd/wagtd.webp',
    mediaType: 'image',
    mediaAlt: 'Screenshot of WAGTD game scene',
    detailedDescription: 'We’re All Going To Die is a co-op twin-stick shooter with diverse enemy waves and upgradeable perks...',
    technologies: 'Unreal Engine, Blueprints, Level Design',
    features: [
      'Unique levels with distinct mechanics',
      'Challenging boss battles',
      'Upgradeable player perks',
      'Team-based co-op survival'
    ],
    responsibilities: [
      'Prototyping level blockouts',
      'Designing level-specific gameplay systems',
      'Environment prop placement for immersion'
    ],
    github: null,
    steam: 'https://store.steampowered.com/app/1457140/Were_All_Going_To_Die/',
    liveDemo: null,
    designDoc: null,
    medium: null,
    youtube: 'https://www.youtube.com/embed/V3H1z7Z91Ps?si=GzumgrL1NcsGZyXE',
    bgimg: 'https://www.dropbox.com/scl/fi/t5h6dsiozwjjychl3nyyg/wagtd.webp?rlkey=raplh8xikbe0908sroa3n77ud&raw=1',
    genre: 'Shooter, Co-op',
    platform: 'PC',
    teamsize: '15-20',
    duration: '11 months',
    released: null
  },
  // ... similarly update the remaining projects with thumbAlt, mediaType, mediaAlt ...
];

export default projects;
