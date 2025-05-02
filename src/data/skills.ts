export type SkillCategory = 'core' | 'languages' | 'tools';

export interface Skill {
  name: string;
  icon: string;
  img?: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Core Skills
  { name: 'Software Development', icon: '🎮', img: 'skills/core/imac-settings.webp', category: 'core' },
  { name: 'Technical Game Design', icon: '🎲', img: 'skills/core/external-game-development-online-marketing-flaticons-lineal-color-flat-icons.webp', category: 'core' },
  { name: 'Level Design', icon: '🎲', img: 'skills/core/external-app-video-game-development-others-pike-picture-9.webp', category: 'core' },
  { name: 'Graphics Programming', icon: '🎲', img: 'skills/core/overclocking-graphics.webp', category: 'core' },
  { name: 'Product Management', icon: '🎲', img: 'skills/core/external-product-management-computer-programming-flaticons-lineal-color-flat-icons.webp', category: 'core' },
  { name: 'UI & UX', icon: '🎲', img: 'skills/core/external-experience-user-experience-soft-fill-soft-fill-juicy-fish-15.webp', category: 'core' },
  { name: 'Working Remotely', icon: '🎲', img: 'skills/core/external-Remote-Work-nomad-others-pike-picture-4.webp', category: 'core' },
  { name: 'Mentoring', icon: '🎲', img: 'skills/core/external-mentoring-online-education-flaticons-lineal-color-flat-icons.webp', category: 'core' },


  // Languages and technologies
  { name: 'C#', icon: 'C++', img: "skills/languages/c-sharp-logo.webp", category: 'languages' },
  { name: 'JavaScript', icon: 'JS', img: "skills/languages/javascript--v1.webp", category: 'languages' },
  { name: 'Python', icon: 'JS', img: "skills/languages/python-v1.webp", category: 'languages' },
  { name: 'TypeScript', icon: '⚛️', img: "skills/languages/tp.webp", category: 'languages' },
  { name: 'ThreeJS', icon: 'C++', img: "skills/languages/three-js.webp", category: 'languages' },
  { name: 'React/Native', icon: '⚛️', img: "skills/languages/react-native.webp", category: 'languages' },
  { name: 'C++', icon: 'C++', img: "skills/languages/c-plus-plus-logo.webp", category: 'languages' },
  { name: 'NodeJS', icon: 'C++', img: "skills/languages/node-js.webp", category: 'languages' },
  { name: 'GOLANG', icon: 'C++', img: "skills/languages/golang.webp", category: 'languages' },
  { name: 'TailwindCSS', icon: 'C++', img: "skills/languages/tailwind_css.webp", category: 'languages' },
  { name: 'Objective-C', icon: 'JS', img: "skills/languages/c-programming.webp", category: 'languages' },
  { name: 'ASP.NET', icon: '⚛️', img: "skills/languages/net-framework.webp", category: 'languages' },
  { name: 'PHP', icon: 'C++', img: "skills/languages/php-v2.webp", category: 'languages' },
  

  // Tools
  { name: 'Unreal Engine', icon: 'U', img: "/skills/tools/unreal-engine-574.webp", category: 'tools' },
  { name: 'Unity', icon: 'GH', img: "/skills/tools/unity.webp", category: 'tools' },
  { name: 'Blender', icon: 'U', img: "/skills/tools/blender-3d.webp", category: 'tools' },
  { name: 'GitHub', icon: 'GH', img: "/skills/tools/github--v1.webp", category: 'tools' },
  { name: 'Git', icon: 'U', img: "/skills/tools/git.webp", category: 'tools' },  
  { name: 'Firebase', icon: 'GH', img: "/skills/tools/firebase.webp", category: 'tools' },
  { name: 'Docker', icon: 'GH', img: "/skills/tools/docker.webp", category: 'tools' },
  { name: 'Jira', icon: 'U', img: "/skills/tools/jira.webp", category: 'tools' }
  
];

export const categoryTitles: Record<SkillCategory, string> = {
  'core': 'Core Skills',
  'languages': 'Languages & Techs',
  'tools': 'Tools'
};