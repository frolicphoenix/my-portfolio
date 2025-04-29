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
  { id: 'aspnet', label: 'ASP.NET' },
  { id: 'go', label: 'Go' },
  { id: 'python', label: 'Python' },
  { id: 'api', label: 'APIs' }
];

const projects: Project[] = [
  {
    id: 'arcane-odyssey',
    title: 'Arcane Odyssey',
    thumb: 'https://www.dropbox.com/scl/fi/iirjc7cy8l5lo3rafdtk6/ao.mp4?rlkey=amtguws2frifn51pngsrrk0c2&st=vzm2hjiz&raw=1',
    tags: [
      { label: 'Game Design' },
      { label: 'Level Design' },
      { label: 'UEFN' },
      { label: 'Verse' }
    ],
    description: 'A gacha adventure multiplayer Fortnite Island where the players compete in teams to collect items and keys to open a portal and escape the magical island.',
    tools: ['fortnite', 'level-design', 'multiplayer'],
    category: 'game',
    media: '/assets/img/game/aRCANEoDYSSEY/arcaneodyssey.webp',
    detailedDescription: 'Arcane Odyssey is a gacha-based, team-versus-team adventure set on a mystical Fortnite island. In this 2v2 escape challenge, players compete to explore, collect, and survive through three thrilling levels. Starting on a lush forest island, teams gather materials, solve riddles, and teleport to magical biomes to earn Golden Keys. With keys in hand, they descend into a treacherous underground labyrinth filled with monsters, traps, and mind-bending puzzles. Only by collecting artifacts and regrouping at the exit can they move forward.',
    technologies: 'Unreal Editor for Fortnite (UEFN), Level Design, Game Design',
    features: [
      'Multiple biomes to explore - Greenland, Desert and Iceland',
      'Various ways to maneuver, gather items and trade to progress',
      'Solve puzzles, avoid traps, fight monsters and escape the maze',
      'Expandable to play in Co-op mode'
    ],
    responsibilities: [
      'Implementing navigation systems and gameplay features',
      'Designing an immersive adventure experience with exploration-focused mechanics',
      'Balancing creative design and technical execution, and collaborating with the team to iterate on story-driven levels'
    ],
    github: null,
    steam: null,
    liveDemo: 'https://www.unrealengine.com/en-US/blog/check-out-the-sizzle-reel-from-the-most-recent-women-creators-program#:~:text=4176%2D9656%2D1350-,Arcane%20Odyssey,-Harvest%20the%20wonders',
    designDoc: null,
    medium: null,
    youtube: null,
    bgimg: 'https://www.dropbox.com/scl/fi/cdi4dkheckowcso9taq9o/arcaneodyssey.webp?rlkey=qjfo9ktcjzkv2qowu0etl5gag&st=27cn2qv7&raw=1',
    genre: 'Fortnite, Multiplayer, Adventure',
    platform: 'PC',
    duration: '2 months',
    teamsize: '4',
    released: null
  },
  {
    id: 'wagtd',
    title: "We're All Going To Die!",
    thumb: 'https://www.dropbox.com/scl/fi/42ya3asxdutrz5uqg736y/wagtd-v.mp4?rlkey=8lawh05nswwthg9zos9b53wfk&st=cmqmdb15&raw=1',
    tags: [
      { label: 'Level Design' },
      { label: 'Unreal Engine' },
      { label: 'Blueprints' }
    ],
    description: 'A top down cooperative twin stick shooter in which the players face off against waves of enemies.',
    tools: ['unreal-engine', 'level-design', 'blueprints', 'multiplayer'],
    category: 'game',
    media: '/assets/img/game/wagtd/wagtd.webp',
    detailedDescription: 'We’re All Going To Die is a top-down co-op twin-stick shooter where players battle waves of diverse enemies, from bomb-rushing robots to towering lizard foes. Bosses with unique abilities add to the challenge, featuring both ranged and melee attacks. Players can unlock and upgrade perks to stay alive as the waves grow increasingly intense.',
    technologies: 'Unreal Engine, Blueprints, Level Design',
    features: [
      'Multiple unique levels with different gameplay mechanics',
      'Bosses with unique abilities adding challenge',
      'Unlock and upgrade perks to stay alive',
      'Co-op gameplay for team survival'
    ],
    responsibilities: [
      'Creating Level Blockouts for rapid prototyping and storytelling POIs',
      'Design & implement unique and different systems for each level',
      'Populating the levels with environment props for a better gameplay experience and visual feel'
    ],
    github: null,
    liveDemo: null,
    steam: 'https://store.steampowered.com/app/1457140/Were_All_Going_To_Die/',
    designDoc: null,
    medium: null,
    youtube: 'https://www.youtube.com/embed/V3H1z7Z91Ps?si=GzumgrL1NcsGZyXE',
    bgimg: 'https://www.dropbox.com/scl/fi/t5h6dsiozwjjychl3nyyg/wagtd.webp?rlkey=raplh8xikbe0908sroa3n77ud&raw=1',
    genre: 'Top-down Multiplayer Shooter',
    platform: 'PC',
    duration: '11 months',
    teamsize: '15 - 20',
    released: null
  },
  {
    id: 'nyxr-bot',
    title: 'NYXR Bot',
    thumb: 'https://www.dropbox.com/scl/fi/9rydl28tg3zr28wdnt6nv/nyxr-bot.mp4?rlkey=wzt4u1mk9bbk7acfznxdk39xj&st=fjngntoh&raw=1',
    tags: [
      { label: 'React', isWebTag: true },
      { label: 'Tailwind CSS', isWebTag: true },
      { label: 'JavaScript', isWebTag: true }
    ],
    description: 'An interactive terminal-style interface simulating a command-line portfolio.',
    tools: ['react', 'javascript', 'tailwind'],
    category: 'web',
    media: 'https://www.dropbox.com/scl/fi/rmlkl95lmzfwjk9zea65d/nyxr-bot.webm?rlkey=xxrpxa5z30lutcyijklr9mlfg&st=w4dz7arc&raw=1',
    detailedDescription: 'NYXR Bot is an interactive terminal-style interface built with React and Tailwind CSS that simulates a command-line portfolio.',
    technologies: 'React, Tailwind CSS, JavaScript ES6+, React Hooks',
    features: [
      'Command-line interface simulation',
      'Interactive commands and responses',
      'Responsive design for all devices',
      'Custom terminal animations'
    ],
    responsibilities: null,
    github: 'https://github.com/frolicphoenix/nyxr-bot',
    steam: null,
    liveDemo: 'https://bot.pranjallokhande.com/',
    designDoc: null,
    medium: null,
    youtube: null,
    bgimg: null,
    genre: null,
    platform: null,
    duration: null,
    teamsize: null,
    released: null
  },
  {
    id: 'virtual-zoo',
    title: 'Virtual Zoo',
    thumb: 'https://www.dropbox.com/scl/fi/sozpwxykpepl3806vx9ac/vzoo.mp4?rlkey=108ob8rlotqxzod1legswvhe8&st=xxar4x1g&raw=1',
    tags: [
      { label: 'Go', isWebTag: true },
      { label: 'Python', isWebTag: true },
      { label: 'YAML', isWebTag: true }
    ],
    description: 'A minimal Infrastructure as Code (IaC) experiment where pets are deployed, aged, and cared for like virtual machines in a cloud.',
    tools: ['go', 'python'],
    category: 'web',
    media: '/assets/img/web/virtualzoo/vzoo.mp4',
    detailedDescription: 'Virtual Zoo is a minimal Infrastructure as Code (IaC) experiment where pets are deployed, aged, and cared for like virtual machines in a cloud.',
    technologies: 'Go, Python, YAML, HTTP (REST), Mutex',
    features: [
      'Infrastructure as Code (IaC) model',
      'Pet lifecycle management (deploy, age, care)',
      'RESTful API interface',
      'Concurrent processing with proper synchronization'
    ],
    responsibilities: null,
    github: 'https://github.com/frolicphoenix/virtualzoo',
    steam: null,
    liveDemo: null,
    designDoc: null,
    medium: null,
    youtube: null,
    bgimg: null,
    genre: null,
    platform: null,
    duration: null,
    teamsize: null,
    released: null
  },
  {
    id: 'astronomy-books',
    title: 'Astronomy in Books',
    thumb: 'https://www.dropbox.com/scl/fi/3jwv4q4rmf972hmagaimp/aib.mp4?rlkey=zd82071rib4ns5qjjfouwjkoo&st=1gkv8y57&raw=1',
    tags: [
      { label: 'JavaScript', isWebTag: true },
      { label: 'Google Books API', isWebTag: true },
      { label: 'NASA API', isWebTag: true }
    ],
    description: "A platform to discover books related to astronomical events by tapping into NASA's astronomical data and Google Books' vast library.",
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
    responsibilities: null,
    github: 'https://github.com/frolicphoenix/astronomy-in-books',
    steam: null,
    liveDemo: 'https://astronomy-in-books.vercel.app/',
    designDoc: null,
    medium: null,
    youtube: null,
    bgimg: null,
    genre: null,
    platform: null,
    duration: null,
    teamsize: null,
    released: null
  },
  {
    id: 'pokemon-tracker',
    title: 'Pokémon Unite Build Tracker',
    thumb: 'https://www.dropbox.com/scl/fi/lfdbtzg243ou6jti1jbm5/walkthrupoke.mp4?rlkey=gmkgvgvtct6usp7jp9cz0j521&st=vvrin2f3&raw=1',
    tags: [
      { label: 'C#', isWebTag: true },
      { label: 'ASP.NET MVC', isWebTag: true }
    ],
    description: 'An ASP.NET Core Web App that helps users to check the stats of their pokémon by attaching held items and a battle item and save the builds.',
    tools: ['csharp', 'aspnet'],
    category: 'web',
    media: '/assets/img/web/pokemonunitebuild/walkthrupoke.mp4',
    detailedDescription: 'Pokémon Unite Build Tracker is a web application created using ASP.NET Core MVC to help players optimize their gameplay in Pokémon Unite, a 5v5 MOBA where players control Pokémon with unique abilities and equip three held items pre-game to enhance their stats. The app allows users to create, view, and manage builds for various Pokémon, offering a personalized alternative to external resources like UniteDB. Designed as a mockup, it combines gaming strategy with web development to provide a streamlined solution for tracking and experimenting with item combinations.',
    technologies: 'C#, ASP.NET MVC, Entity Framework, LINQ',
    features: [
      'Track and save custom Pokémon builds',
      'Real-time stat calculation',
      'Item combination tracking',
      'User-friendly interface for build management'
    ],
    responsibilities: null,
    github: 'https://github.com/frolicphoenix/PokemonUniteBuildTracker_PassionProject',
    steam: null,
    liveDemo: null,
    designDoc: 'https://docs.google.com/document/d/e/2PACX-1vSJkgj9lxDNcYDl8PptKUE8WQK-4d3pG1OIHi1Vtru21Sc5mjUfLIukphLYuzSGPd5QLS1u_h-48JB4/pub',
    medium: null,
    youtube: 'https://www.youtube.com/embed/48aqOM84CMU?si=fe-8fyQcnYkym5H0',
    bgimg: null,
    genre: null,
    platform: null,
    duration: null,
    teamsize: null,
    released: null
  }
];

export default projects;