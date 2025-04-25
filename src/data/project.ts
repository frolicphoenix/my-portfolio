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
  tags: ProjectTag[];
  description: string;
  tools: ProjectTool[];
  category: ProjectCategory;
  media: string;
  detailedDescription: string;
  technologies: string;
  features: string[];
  github: string | null;
  liveDemo: string | null;
}

export const gameTools: { id: ProjectTool; label: string }[] = [
  { id: 'unreal-engine', label: 'Unreal Engine' },
  { id: 'fortnite', label: 'UEFN' },
  { id: 'level-design', label: 'Level Design' },
  { id: 'blueprints', label: 'Blueprints' },
  { id: 'multiplayer', label: 'Multiplayer' },
  { id: 'unity', label: 'Unity' }
];

export const webTools: { id: ProjectTool; label: string }[] = [
  { id: 'react', label: 'React' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'tailwind', label: 'Tailwind CSS' },
  { id: 'csharp', label: 'C#' },
  { id: 'aspnet', label: 'ASP.NET' },
  { id: 'go', label: 'Go' },
  { id: 'python', label: 'Python' },
  { id: 'api', label: 'APIs' }
];

const projects: Project[] = [
  {
    id: 'arcane-odyssey',
    title: 'Arcane Odyssey',
    thumb: '/assets/img/game/aRCANEoDYSSEY/arcaneodyssey.webp',
    tags: [
      { label: 'Game Design' },
      { label: 'Level Design' },
      { label: 'UEFN' }
    ],
    description: 'A gacha adventure multiplayer Fortnite Island with team-based gameplay.',
    tools: ['fortnite', 'level-design', 'multiplayer'],
    category: 'game',
    media: '/assets/img/game/aRCANEoDYSSEY/arcaneodyssey.webp',
    detailedDescription: 'A gacha-based, team-versus-team adventure set on a mystical Fortnite island. Players compete to explore, collect, and survive through three thrilling levels.',
    technologies: 'Unreal Editor for Fortnite (UEFN), Level Design, Game Design',
    features: [
      'Multiple biomes to explore - Greenland, Desert and Iceland',
      'Various ways to maneuver, gather items and trade to progress',
      'Solve puzzles, avoid traps, fight monsters and escape the maze',
      'Expandable to play in Co-op mode'
    ],
    github: null,
    liveDemo: 'https://www.unrealengine.com/en-US/blog/check-out-the-sizzle-reel-from-the-most-recent-women-creators-program'
  },
  {
    id: 'wagtd',
    title: "We're All Going To Die!",
    thumb: '/assets/img/game/wagtd/wagtd.webp',
    tags: [
      { label: 'Level Design' },
      { label: 'Unreal Engine' },
      { label: 'Blueprints' }
    ],
    description: 'A top-down cooperative twin-stick shooter with waves of enemies.',
    tools: ['unreal-engine', 'level-design', 'blueprints', 'multiplayer'],
    category: 'game',
    media: '/assets/img/game/wagtd/wagtd.webp',
    detailedDescription: 'A top-down co-op twin-stick shooter where players battle waves of diverse enemies, from bomb-rushing robots to towering lizard foes.',
    technologies: 'Unreal Engine, Blueprints, Level Design',
    features: [
      'Multiple unique levels with different gameplay mechanics',
      'Bosses with unique abilities adding challenge',
      'Unlock and upgrade perks to stay alive',
      'Co-op gameplay for team survival'
    ],
    github: null,
    liveDemo: 'https://store.steampowered.com/app/1457140/Were_All_Going_To_Die/'
  },
  {
    id: 'nyxr-bot',
    title: 'NYXR Bot',
    thumb: '/assets/img/web/nyxrbot/nyxr-bot.png',
    tags: [
      { label: 'React', isWebTag: true },
      { label: 'Tailwind CSS', isWebTag: true },
      { label: 'JavaScript', isWebTag: true }
    ],
    description: 'An interactive terminal-style interface simulating a command-line portfolio.',
    tools: ['react', 'javascript', 'tailwind'],
    category: 'web',
    media: '/assets/img/web/nyxrbot/nyxr-bot.mp4',
    detailedDescription: 'An interactive terminal-style interface built with React and Tailwind CSS that simulates a command-line portfolio experience.',
    technologies: 'React, Tailwind CSS, JavaScript ES6+, React Hooks',
    features: [
      'Command-line interface simulation',
      'Interactive commands and responses',
      'Responsive design for all devices',
      'Custom terminal animations'
    ],
    github: 'https://github.com/frolicphoenix/nyxr-bot',
    liveDemo: 'https://bot.pranjallokhande.com/'
  },
  {
    id: 'virtual-zoo',
    title: 'Virtual Zoo',
    thumb: '/assets/img/web/virtualzoo/vzoo.png',
    tags: [
      { label: 'Go', isWebTag: true },
      { label: 'Python', isWebTag: true },
      { label: 'YAML', isWebTag: true }
    ],
    description: 'A minimal Infrastructure as Code (IaC) experiment simulating pets as virtual machines.',
    tools: ['go', 'python'],
    category: 'web',
    media: '/assets/img/web/virtualzoo/vzoo.mp4',
    detailedDescription: 'A minimal Infrastructure as Code (IaC) experiment where pets are deployed, aged, and cared for like virtual machines in a cloud environment.',
    technologies: 'Go, Python, YAML, HTTP (REST), Mutex',
    features: [
      'Infrastructure as Code (IaC) model',
      'Pet lifecycle management (deploy, age, care)',
      'RESTful API interface',
      'Concurrent processing with proper synchronization'
    ],
    github: 'https://github.com/frolicphoenix/virtualzoo',
    liveDemo: null
  },
  {
    id: 'astronomy-books',
    title: 'Astronomy in Books',
    thumb: '/assets/img/web/astronomyinbooks/aib.png',
    tags: [
      { label: 'JavaScript', isWebTag: true },
      { label: 'Google Books API', isWebTag: true },
      { label: 'NASA API', isWebTag: true }
    ],
    description: 'A platform to discover books related to astronomical events using NASA data.',
    tools: ['javascript', 'api'],
    category: 'web',
    media: '/assets/img/web/astronomyinbooks/aib.mp4',
    detailedDescription: 'A web application that offers a way to discover books related to astronomical events by tapping into NASA\'s astronomical data and Google Books\' vast library.',
    technologies: 'PUG, Google Books API, NASA API',
    features: [
      'Integration with NASA API for astronomical events',
      'Book discovery through Google Books API',
      'Event-based book recommendations',
      'Responsive design for all devices'
    ],
    github: 'https://github.com/frolicphoenix/astronomy-in-books',
    liveDemo: 'https://astronomy-in-books.vercel.app/'
  },
  {
    id: 'pokemon-tracker',
    title: 'Pokémon Unite Build Tracker',
    thumb: '/assets/img/web/pokemonunitebuild/walkthrupoke.png',
    tags: [
      { label: 'C#', isWebTag: true },
      { label: 'ASP.NET MVC', isWebTag: true }
    ],
    description: 'An ASP.NET Core Web App for tracking Pokémon builds and stats.',
    tools: ['csharp', 'aspnet'],
    category: 'web',
    media: '/assets/img/web/pokemonunitebuild/walkthrupoke.mp4',
    detailedDescription: 'An ASP.NET Core Web App that helps users to check the stats of their pokémon by attaching held items and a battle item and save the builds.',
    technologies: 'C#, ASP.NET MVC, Entity Framework, LINQ',
    features: [
      'Track and save custom Pokémon builds',
      'Real-time stat calculation',
      'Item combination tracking',
      'User-friendly interface for build management'
    ],
    github: 'https://github.com/frolicphoenix/PokemonUniteBuildTracker_PassionProject',
    liveDemo: null
  }
];

export default projects;