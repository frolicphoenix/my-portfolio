export type ProjectTool = 
  | 'unreal-engine' 
  | 'fortnite' 
  |  'game-design'
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
  | 'unity'
  | 'gamejam';

export type ProjectCategory = 'game' | 'web';

export interface ProjectTag {
  label: string;
  isWebTag?: boolean;
}

export interface Project {
  id: string;
  title: string;
  role: string | null;
  company: string | null;
  companylink: string | null;
  thumb: string | null;
  thumbimg?: string | null;
  tags: ProjectTag[];
  description: string;
  tools: ProjectTool[];
  category: ProjectCategory;
  detailedDescription: string;
  technologies: string;
  features: string[] | null;
  responsibilities: string[] | null;
  github: string | null;
  steam: string | null;
  itchio: string | null;
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
  gallery?: string[];
}

export const gameTools: { id: ProjectTool; label: string }[] = [
  { id: 'unreal-engine', label: 'Unreal Engine' },
  { id: 'fortnite', label: 'UEFN' },
  { id: 'blueprints', label: 'Blueprints' },
  { id: 'multiplayer', label: 'Multiplayer' },
  { id: 'unity', label: 'Unity' },
  { id: 'gamejam', label: 'Game Jam' },
  { id: 'csharp', label: 'C#' },
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
  // Game Projects
  {
    id: 'theweightofthreads',
    title: "The Weight of Threads",
    role: 'Game Developer',
    company: "thatgamecompany X COREBLAZER GAME JAM 2025",
    companylink: "https://itch.io/jam/tgcxcoreblazer/rate/3629300",
    thumb: 'https://www.dropbox.com/scl/fi/lziv57rb9ut7t0a7y7gx5/newtwoft.mp4?rlkey=1d76n5cl6xjb147kwonmulu1q&st=feju5n6c&raw=1',
    thumbimg: null,
    tags: [
      { label: 'Unreal Engine' },
      { label: 'Blueprints' },
      { label: 'Game Dev' }

    ],
    description: 'A narrative stitching game about generosity, memory, and quiet connection.',
    tools: ['csharp', 'unity', 'level-design', 'gamejam'],
    category: 'game',
    detailedDescription: "The Weight of Threads explores generosity as quiet, voluntary care. Players use limited threads to mend a broken world, not for rewards, but to leave warmth behind for others. Through stitched objects and shared messages, the game invites reflection on what we give, what we choose to heal, and how small acts connect us across time. Built entirely in Blueprints, the game features an original stitching mechanic, a dynamic notebook system, and a coat sacrifice decision point that anchors its emotional arc. Created in 19 days for Thatgamecompany's Generosity Game Jam.",
    technologies: 'Unity, C#, Level Design',
    features: null,
    responsibilities: null,
    github: null,
    itchio: 'https://frolicphoenix.itch.io/the-weight-of-threads',
    liveDemo: null,
    steam: null,
    designDoc: null,
    medium: null,
    youtube: 'https://www.youtube.com/embed/eELHv2KoZA4?si=hs25FiBHIDf0JeJy',
    bgimg: 'https://www.dropbox.com/scl/fi/pmxqqtk9s5tu9c08fu28m/The-Weight-of-Threads.png?rlkey=2w5e9fjymal8oi06zwzz3vgsn&st=5glj641l&raw=1',
    genre: 'Adventure, Exploration',
    platform: 'PC',
    duration: '3 Weeks',
    teamsize: null,
    released: null,
    gallery: [
      'https://www.dropbox.com/scl/fi/g6mpj7vi5071a04dfmp2u/HighresScreenshot00040.png?rlkey=qri604w4ph7xeo023dawvteym&st=c7agmrbl&raw=1',
      'https://www.dropbox.com/scl/fi/4j4238chg0ioh6cl4e6jr/1.png?rlkey=05qqrngidlec9t0p5bltxpqmp&st=l6ad6d2g&raw=1',
      'https://www.dropbox.com/scl/fi/jorchr1fbirmju3ye5q18/2.png?rlkey=7chgxhmgikm7q2k3719ghuv4a&st=f7mf10v0&raw=1',
      'https://www.dropbox.com/scl/fi/344sgvmkjhnvwjeaurgos/3.png?rlkey=nybo6u3odjz3x7yw4iff610th&st=tbaxev2v&raw=1',
      'https://www.dropbox.com/scl/fi/uf75ib82ri9enft7ru8uh/4.png?rlkey=d9tjmxafypxpqhk9ksb5em56n&st=ykyy1wtp&raw=1',
      'https://www.dropbox.com/scl/fi/5au0q403udnwo237ipaum/HighresScreenshot00032.png?rlkey=uekytteiv5qqi4yusegjo8dg5&st=yo9fmhsg&raw=1',
      'https://www.dropbox.com/scl/fi/0owwvd0kwaov5qgnzt0aj/HighresScreenshot00033.png?rlkey=v3hq1ppnyyd82cz4uyljudk9i&st=ixok54x1&raw=1',
      'https://www.dropbox.com/scl/fi/wwzme5yxtxsaphr4oe6uk/HighresScreenshot00036.png?rlkey=6cu5v3djuoswxe1ipb50r2c3s&st=0axiv0he&raw=1',
      'https://www.dropbox.com/scl/fi/2jgsb84t4bi1q34z642jw/HighresScreenshot00045.png?rlkey=f8qgjtb52oy05i7ytdddgmkbs&st=ba3d5xgh&raw=1'
    ]
  },
  {
    id: 'arcane-odyssey',
    title: 'Arcane Odyssey',
    role: 'Game Designer, Level Designer',
    company: 'Epic Games (Women Creators Program III)',
    companylink: 'https://www.unrealengine.com/en-US/blog/check-out-the-sizzle-reel-from-the-most-recent-women-creators-program',
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
    itchio: null,
    steam: null,
    liveDemo: 'https://www.unrealengine.com/en-US/blog/check-out-the-sizzle-reel-from-the-most-recent-women-creators-program#:~:text=4176%2D9656%2D1350-,Arcane%20Odyssey,-Harvest%20the%20wonders',
    designDoc: 'https://docs.google.com/document/d/e/2PACX-1vR9H19uC3tahwxk4OJwn0iRh6vLvxftHguHkf_F4wELDm-lDoeaRiwvU0JEZFF2oJrNYuyiSvoNYQoV/pub?embedded=true',
    medium: null,
    youtube: 'https://www.youtube.com/embed/h7zlhKitnL0?si=D5daz2Yd8QP4Qd7s',
    bgimg: 'https://www.dropbox.com/scl/fi/cdi4dkheckowcso9taq9o/arcaneodyssey.webp?rlkey=qjfo9ktcjzkv2qowu0etl5gag&st=27cn2qv7&raw=1',
    genre: 'Fortnite, Multiplayer, Adventure',
    platform: 'PC',
    duration: '2 months',
    teamsize: '4',
    released: null,
    gallery: [
      'https://www.dropbox.com/scl/fi/qgaakw8ox3vrgpicd4izt/1.webp?rlkey=9a4akpkidpyczyn5nalela0ep&st=siof4gbf&raw=1',
      'https://www.dropbox.com/scl/fi/xnp9r2ewrxth9047y65gr/2.webp?rlkey=41xitxyu8wvlz94dwyz82hktb&st=a44u2hf3&raw=1',
      'https://www.dropbox.com/scl/fi/upukzd5vp6v5djg2owyy7/3.webp?rlkey=fpxbub90pa31hov21ztd2visu&st=o14xfcnf&raw=1',
      'https://www.dropbox.com/scl/fi/i7hotibc1pd77gcxfvw3l/7.webp?rlkey=louu5louxqddo1fi6xrlpj8p8&st=3ad37stc&raw=1',
      'https://www.dropbox.com/scl/fi/gh1urx09uchbnhp7alfdi/8.webp?rlkey=3b2kfcr7skl05nb8dn3ohjw9u&st=gfnyn12k&raw=1'
    ],
  },
  {
    id: 'wagtd',
    title: "We're All Going To Die!",
    role: 'Level Designer',
    company: 'Black Banshee Studios',
    companylink: 'https://www.blackbansheestudios.com/',
    thumb: 'https://www.dropbox.com/scl/fi/42ya3asxdutrz5uqg736y/wagtd-v.mp4?rlkey=8lawh05nswwthg9zos9b53wfk&st=cmqmdb15&raw=1',
    tags: [
      { label: 'Level Design' },
      { label: 'Unreal Engine' },
      { label: 'Blueprints' }
    ],
    description: 'A top down cooperative twin stick shooter in which the players face off against waves of enemies.',
    tools: ['unreal-engine', 'level-design', 'blueprints', 'multiplayer'],
    category: 'game',
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
    itchio: null,
    liveDemo: null,
    steam: 'https://store.steampowered.com/app/1457140/Were_All_Going_To_Die/',
    designDoc: 'https://docs.google.com/document/d/e/2PACX-1vQPlUXcI2bXHPML-0HesycpROu0K42qK-TREPSAVFoGuvk8PVZXc_80B0Kj2vM9ZD12ahWAagVTPxFQ/pub?embedded=true',
    medium: null,
    youtube: 'https://www.youtube.com/embed/V3H1z7Z91Ps?si=GzumgrL1NcsGZyXE',
    bgimg: 'https://www.dropbox.com/scl/fi/t5h6dsiozwjjychl3nyyg/wagtd.webp?rlkey=raplh8xikbe0908sroa3n77ud&raw=1',
    genre: 'Top-down Multiplayer Shooter',
    platform: 'PC',
    duration: '11 months',
    teamsize: '15 - 20',
    released: 'February 2021',
    gallery: [
      'https://www.dropbox.com/scl/fi/jx83nfp3e4ckvii585pmy/city3.webp?rlkey=iqh2awhzibi9hcvtx0ye2388j&st=3yxagr04&raw=1',
      'https://www.dropbox.com/scl/fi/a0dnmjtclp686wbi30ifm/city4.webp?rlkey=8al4qvm9j64ly26kr60df7tz8&st=l7yzy7nu&raw=1',
      'https://www.dropbox.com/scl/fi/7278sxzvhvgwkgib8950y/sb1.webp?rlkey=4nizbzwqdre4v5iw6bmfft55x&st=9pmdie41&raw=1',
      'https://www.dropbox.com/scl/fi/0gvsia61f4f1cn4651k3o/sb2.webp?rlkey=ppnb76ht9uxaivueb8sqsw2r8&st=n7uotsul&raw=1',
      'https://www.dropbox.com/scl/fi/g2elj22kmm9us2z2ym3fc/sb3.webp?rlkey=ppdqphakat00f2uvncrshgi2v&st=v305nxfn&raw=1',
      'https://www.dropbox.com/scl/fi/oiqvj0j1lauryc164dqai/ss3.gif?rlkey=ri8duevyxbux5kh27dlrmp2iu&st=cotvh5wu&raw=1',
      'https://www.dropbox.com/scl/fi/gtav9e3uhh1lgovfcaocx/ss4.gif?rlkey=b6hcyjhzqny8trmhs2l9bmg9w&st=k4kbudk8&raw=1',
      'https://www.dropbox.com/scl/fi/m45o2tj5r9o0o304d99dp/ss5.gif?rlkey=02l1du95k2vubzpc63wbme316&st=v4v3wnj3&raw=1',
      'https://www.dropbox.com/scl/fi/0hkjnqduo3msemj0mgtm3/ss6.gif?rlkey=bs9b3n8qldcsooj98pjqcpe1i&st=n5rll6iq&raw=1'
    ],
  },
  // {
  //   id: 'prelude',
  //   title: "Prelude",
  //   role: 'Game Designer, Level Designer',
  //   company: "Brackey's Game Jam 2024",
  //   companylink: "https://itch.io/jam/brackeys-12/rate/2961551",
  //   thumb: null,
  //   thumbimg: 'https://www.dropbox.com/scl/fi/upggtqbykhcudjkiwa7bd/bLlGF4.webp?rlkey=d3wcbbjw92mrwuhd8ucbwciou&st=4bb1ufy7&raw=1',
  //   tags: [
  //     { label: 'Unity' },
  //     { label: 'C#' },
  //     { label: 'Game Design' },
  //     { label: 'Level Design' },
  //     { label: 'Game Jam' },

  //   ],
  //   description: 'Players explore a peaceful dreamscape in  a 3D adventure, but beware—the storm is coming.',
  //   tools: ['csharp', 'unity', 'level-design', 'gamejam'],
  //   category: 'game',
  //   detailedDescription: 'A story-driven exploration game that is on the verge of melting away. The game focuses on mental health and the delicate nature of human emotions. Players embark on a surreal journey through the subconscious mind of a troubled protagonist, unraveling their deepest fears, memories, and emotions.',
  //   technologies: 'Unity, C#, Level Design',
  //   features: null,
  //   responsibilities: null,
  //   github: null,
  //   itchio: 'https://frolicphoenix.itch.io/prelude',
  //   liveDemo: null,
  //   steam: null,
  //   designDoc: null,
  //   medium: null,
  //   youtube: 'https://www.youtube.com/embed/AdCqD0Pu9bg?si=YWBNxJs-KKcs3dgO',
  //   bgimg: 'https://www.dropbox.com/scl/fi/upggtqbykhcudjkiwa7bd/bLlGF4.webp?rlkey=d3wcbbjw92mrwuhd8ucbwciou&st=4bb1ufy7&raw=1',
  //   genre: 'Adventure, Exploration',
  //   platform: 'PC',
  //   duration: '1 Week',
  //   teamsize: null,
  //   released: null,
  //   gallery: [
  //     'https://www.dropbox.com/scl/fi/5c8jn9hj9q1hkmmyvxjkz/uHbwPJ.png?rlkey=wz8go9enptqroqwckvionws3y&st=7gwbg8g0&raw=1',
  //     'https://www.dropbox.com/scl/fi/uwnktaig4xbnky73v15cw/VMD27X.png?rlkey=r0qig8mqc45i8sziu04vmlze3&st=h3a8cft5&raw=1'
  //   ]
  // },
  {
    id: 'memories',
    title: "Project Memories",
    role: 'Game Owner, Level Designer',
    company: "TheXPlace Game Jam 2023",
    companylink: "https://app2.thexplace.ai/events/01H0G0PM35GY5MM37HFF2KVPPC/games/01H2XDN1KK3NAZ6F1AWVTDHST0?vipcode=Q_Summer23",
    thumb: 'https://www.dropbox.com/scl/fi/ufulbvwwb38piy646fzkk/pm.mp4?rlkey=iedldczwg4wuez0f1y84eyp6a&st=oamb36hy&raw=1',
    thumbimg: null,
    tags: [
      { label: 'Unreal Engine' },
      { label: 'Level Design' },
      { label: 'Game Jam' },
    ],
    description: "The game focuses on mental health and the delicate nature of human emotions.",
    tools: ['unreal-engine', 'game-design', 'level-design', 'gamejam'],
    category: 'game',
    detailedDescription: "A story-driven exploration game that is on the verge of melting away. The game focuses on mental health and the delicate nature of human emotions. Players embark on a surreal journey through the subconscious mind of a troubled protagonist, unraveling their deepest fears, memories, and emotions.",
    technologies: 'Unreal Engine, Blueprints, Level Design',
    features: null,
    responsibilities: null,
    github: null,
    itchio: 'https://craitter.itch.io/memories',
    liveDemo: null,
    steam: null,
    designDoc: null,
    medium: null,
    youtube: 'https://www.youtube.com/embed/b8af_7vgpZs?si=Ui6cImbnjoD4JKVz',
    bgimg: 'https://www.dropbox.com/scl/fi/xyozrwe9ilbulmdbdcvo5/gencraft-pm.webp?rlkey=qkvioszizrfm4t0edfm1qderu&st=9u1lv86i&raw=1',
    genre: 'Adventure, Exploration',
    platform: 'PC',
    duration: '1 Week',
    teamsize: "9",
    released: null,
    gallery: [
      'https://www.dropbox.com/scl/fi/ssphjp3omkool4ent2gnn/ss1.webp?rlkey=yyy9sqlyq24g7sh2ke71kqgdu&st=b08qaczw&raw=1',
      'https://www.dropbox.com/scl/fi/qnnnczzwmi05ncl8d2ghy/ss2.webp?rlkey=mi582jho2bnre1safecsatp61&st=6wnnriuo&raw=1',
      'https://www.dropbox.com/scl/fi/azq1m9eqq4ig81x2s4vei/ss3.webp?rlkey=om698y9coefvws34aozrlgqq1&st=nyaea3bu&raw=1',
      'https://www.dropbox.com/scl/fi/vich1a1xzqv5yyt9fczpn/ss4.webp?rlkey=yrxd92jhg3jng829lfnw2gtca&st=usxbr4cl&raw=1',
      'https://www.dropbox.com/scl/fi/7ea2txux9m6fa6ej1yxr9/ss5.webp?rlkey=497fqb68j1db8f0nr0meezllu&st=2rscz77f&raw=1'
    ]
  },
  {
    id: 'hope',
    title: "Hope",
    role: 'Game Designer, Level Designer, Game Artist',
    company: "Brackey's Game Jam 2022",
    companylink: "https://itch.io/jam/brackeys-7/rate/1420938",
    thumb: null,
    thumbimg: 'https://www.dropbox.com/scl/fi/jwuw7avgoygozysoiovqa/hope.png?rlkey=axi34cvyvr89ddc6vry3go2gp&st=m5lqbt10&raw=1',
    tags: [
      { label: 'Unity' },
      { label: 'C#' },
      { label: 'Game Art' },
      { label: 'Level Design' },
      { label: 'Game Jam' },

    ],
    description: "Players find and use the doors as an escape from reality and move between the phases of the character's life. Finding their way back to reality.",
    tools: ['unity', 'csharp', 'game-design', 'level-design', 'gamejam'],
    category: 'game',
    detailedDescription: "In a dream that feels unsettlingly real, you must navigate through the vivid ups and downs of your life, confronting past traumas and fears. By finding and using symbolic doors to transition between different life phases, you seek to escape despair and rediscover hope, ultimately returning to reality.",
    technologies: 'Unity, C#, Level Design',
    features: null,
    responsibilities: null,
    github: null,
    itchio: 'https://axeltornado.itch.io/hope',
    liveDemo: null,
    steam: null,
    designDoc: null,
    medium: null,
    youtube: null,
    bgimg: 'https://www.dropbox.com/scl/fi/vmkf3ttvhqeakkqxs2y16/ss1.png?rlkey=87m0gns4vv7hiqnbg479cm7yu&st=aeyeqc34&raw=1',
    genre: 'Exploration',
    platform: 'PC',
    duration: '1 Week',
    teamsize: null,
    released: null,
    gallery: [
      'https://www.dropbox.com/scl/fi/vmkf3ttvhqeakkqxs2y16/ss1.png?rlkey=87m0gns4vv7hiqnbg479cm7yu&st=aeyeqc34&raw=1',
      'https://www.dropbox.com/scl/fi/aab2fjjmwi0dzsada2zfr/ss2.png?rlkey=dido0f6cogcv3bdj6xaikqika&st=pee0ubhs&raw=1',
      'https://www.dropbox.com/scl/fi/prg15dsbgu2o04jldddin/ss3.png?rlkey=7wp1ltb0jsozct63zjayr018y&st=jcimy4dv&raw=1'
    ]
  },
  {
    id: 'das',
    title: "Dreams and Sunflowers",
    role: 'Game Owner, Game Designer',
    company: "Zygobot Studios",
    companylink: null,
    thumb: null,
    thumbimg: 'https://www.dropbox.com/scl/fi/be3rsdeie0u7h5smy25as/das.webp?rlkey=p1jbwqtktq4va2rj2qm2hqohw&st=12dwtcnw&raw=1',
    tags: [
      { label: 'Unity' },
      { label: 'C#' },
      { label: 'Game Designer' },
      { label: 'Archived' },
    ],
    description: "Dreams and Sunflowers is a contemplative first-person narrative puzzle game where players step into the role of Amelia Gray, a wandering object restorer with a mysterious connection to the items she repairs.",
    tools: ['unity', 'csharp', 'game-design', 'level-design', 'gamejam'],
    category: 'game',
    detailedDescription: "Dreams and Sunflowers is a contemplative first-person narrative puzzle game where players step into the role of Amelia Gray, a wandering object restorer with a mysterious connection to the items she repairs. Set in the quaint coastal town of Aria in the year 2081, Amelia has established a temporary workshop where she mends cherished possessions for the local residents, uncovering emotional stories hidden within each broken object.",
    technologies: 'Unity, C#',
    features: null,
    responsibilities: null,
    github: null,
    itchio: null,
    liveDemo: null,
    steam: null,
    designDoc: 'https://docs.google.com/document/d/e/2PACX-1vTp73A7cG0kAcwy631jt1vbWNQuPqbayG7la2HgIhXZf6ytcmMSJEHz4LYXXxVzUq8203SC_Povsp4s/pub?embedded=true',
    medium: null,
    youtube: null,
    bgimg: 'https://www.dropbox.com/scl/fi/be3rsdeie0u7h5smy25as/das.webp?rlkey=p1jbwqtktq4va2rj2qm2hqohw&st=12dwtcnw&raw=1',
    genre: 'Exploration, Visual Novel, Narrative',
    platform: 'PC',
    duration: null,
    teamsize: null,
    released: null
  },


  // WEB PROJECTS
  {
    id: 'nyxr-bot',
    title: 'NYXR Bot',
    role: null,
    company: null,
    companylink: null,
    thumb: 'https://www.dropbox.com/scl/fi/9rydl28tg3zr28wdnt6nv/nyxr-bot.mp4?rlkey=wzt4u1mk9bbk7acfznxdk39xj&st=fjngntoh&raw=1',
    tags: [
      { label: 'React', isWebTag: true },
      { label: 'Tailwind CSS', isWebTag: true },
      { label: 'JavaScript', isWebTag: true }
    ],
    description: 'An interactive terminal-style interface simulating a command-line portfolio.',
    tools: ['react', 'javascript', 'tailwind'],
    category: 'web',
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
    itchio: null,
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
    role: null,
    company: null,
    companylink: null,
    thumb: 'https://www.dropbox.com/scl/fi/sozpwxykpepl3806vx9ac/vzoo.mp4?rlkey=108ob8rlotqxzod1legswvhe8&st=xxar4x1g&raw=1',
    tags: [
      { label: 'Go', isWebTag: true },
      { label: 'Python', isWebTag: true },
      { label: 'YAML', isWebTag: true }
    ],
    description: 'A minimal Infrastructure as Code (IaC) experiment where pets are deployed, aged, and cared for like virtual machines in a cloud.',
    tools: ['go', 'python'],
    category: 'web',
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
    itchio: null,
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
    role: null,
    company: null,
    companylink: null,
    thumb: 'https://www.dropbox.com/scl/fi/3jwv4q4rmf972hmagaimp/aib.mp4?rlkey=zd82071rib4ns5qjjfouwjkoo&st=1gkv8y57&raw=1',
    tags: [
      { label: 'JavaScript', isWebTag: true },
      { label: 'Google Books API', isWebTag: true },
      { label: 'NASA API', isWebTag: true }
    ],
    description: "A platform to discover books related to astronomical events by tapping into NASA's astronomical data and Google Books' vast library.",
    tools: ['javascript', 'api'],
    category: 'web',
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
    itchio: null,
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
    role: null,
    company: null,
    companylink: null,
    thumb: 'https://www.dropbox.com/scl/fi/lfdbtzg243ou6jti1jbm5/walkthrupoke.mp4?rlkey=gmkgvgvtct6usp7jp9cz0j521&st=vvrin2f3&raw=1',
    tags: [
      { label: 'C#', isWebTag: true },
      { label: 'ASP.NET MVC', isWebTag: true }
    ],
    description: 'An ASP.NET Core Web App that helps users to check the stats of their pokémon by attaching held items and a battle item and save the builds.',
    tools: ['csharp', 'aspnet'],
    category: 'web',
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
    itchio: null,
    steam: null,
    liveDemo: null,
    designDoc: 'https://docs.google.com/document/d/e/2PACX-1vS1GDRRVBHrkmJ6SVZbWtAxOWWnHQ0NUEdlpGQYoi8lHsrKVoo3LErhPA5gpJVbRrNd4XPZZ90P-H9F/pub?embedded=true',
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