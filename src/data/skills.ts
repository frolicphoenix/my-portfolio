export type SkillCategory = 'core' | 'languages' | 'tools';

export interface Skill {
  name: string;
  icon: string;
  img?: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Core Skills
  { name: 'Software Development', icon: '🎮', img: 'https://img.icons8.com/stickers/100/imac-settings.png', category: 'core' },
  { name: 'Technical Game Design', icon: '🎲', img: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-game-development-online-marketing-flaticons-lineal-color-flat-icons.png', category: 'core' },
  { name: 'Level Design', icon: '🎲', img: 'https://img.icons8.com/external-others-pike-picture/100/external-app-video-game-development-others-pike-picture-9.png', category: 'core' },
  { name: 'Graphics Programming', icon: '🎲', img: 'https://img.icons8.com/color/96/overclocking-graphics.png', category: 'core' },
  { name: 'Product Management', icon: '🎲', img: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-product-management-computer-programming-flaticons-lineal-color-flat-icons.png', category: 'core' },
  { name: 'UI & UX', icon: '🎲', img: 'https://img.icons8.com/external-soft-fill-juicy-fish/60/external-experience-user-experience-soft-fill-soft-fill-juicy-fish-15.png', category: 'core' },
  { name: 'Working Remotely', icon: '🎲', img: 'https://img.icons8.com/external-others-pike-picture/100/external-Remote-Work-nomad-others-pike-picture-4.png', category: 'core' },
  { name: 'Mentoring', icon: '🎲', img: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-mentoring-online-education-flaticons-lineal-color-flat-icons.png', category: 'core' },


  // Languages and technologies
  { name: 'C#', icon: 'C++', img: "https://img.icons8.com/color/144/c-sharp-logo.png", category: 'languages' },
  { name: 'JavaScript', icon: 'JS', img: "https://img.icons8.com/color/48/javascript--v1.png", category: 'languages' },
  { name: 'Python', icon: 'JS', img: "https://img.icons8.com/color/144/python--v1.png", category: 'languages' },
  { name: 'TypeScript', icon: '⚛️', img: "https://img.icons8.com/color/144/typescript.png", category: 'languages' },
  { name: 'ThreeJS', icon: 'C++', img: "https://img.icons8.com/nolan/128/three-js.png", category: 'languages' },
  { name: 'React/Native', icon: '⚛️', img: "https://img.icons8.com/color/48/react-native.png", category: 'languages' },
  { name: 'C++', icon: 'C++', img: "https://img.icons8.com/color/48/c-plus-plus-logo.png", category: 'languages' },
  { name: 'NodeJS', icon: 'C++', img: "https://img.icons8.com/fluency/144/node-js.png", category: 'languages' },
  { name: 'GOLANG', icon: 'C++', img: "https://img.icons8.com/color/144/golang.png", category: 'languages' },
  { name: 'TailwindCSS', icon: 'C++', img: "https://img.icons8.com/color/144/tailwind_css.png", category: 'languages' },
  { name: 'Objective-C', icon: 'JS', img: "https://img.icons8.com/fluency/144/c-programming.png", category: 'languages' },
  { name: 'ASP.NET', icon: '⚛️', img: "https://img.icons8.com/color/144/net-framework.png", category: 'languages' },
  { name: 'PHP', icon: 'C++', img: "https://img.icons8.com/nolan/96/php--v2.png", category: 'languages' },
  

  // Tools
  { name: 'Unreal Engine', icon: 'U', img: "https://img.icons8.com/dusk/128/unreal-engine-574.png", category: 'tools' },
  { name: 'Unity', icon: 'GH', img: "https://img.icons8.com/dusk/256/unity.png", category: 'tools' },
  { name: 'Blender', icon: 'U', img: "https://img.icons8.com/color/240/blender-3d.png", category: 'tools' },
  { name: 'GitHub', icon: 'GH', img: "https://img.icons8.com/color-glass/240/github--v1.png", category: 'tools' },
  { name: 'Git', icon: 'U', img: "https://img.icons8.com/color/144/git.png", category: 'tools' },  
  { name: 'Firebase', icon: 'GH', img: "https://img.icons8.com/color/240/firebase.png", category: 'tools' },
  { name: 'Docker', icon: 'GH', img: "https://img.icons8.com/color/240/docker.png", category: 'tools' },
  { name: 'Jira', icon: 'U', img: "https://img.icons8.com/color/240/jira.png", category: 'tools' }
  
];

export const categoryTitles: Record<SkillCategory, string> = {
  'core': 'Core Skills',
  'languages': 'Languages & Techs',
  'tools': 'Tools'
};