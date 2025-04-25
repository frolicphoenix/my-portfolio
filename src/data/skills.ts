export type SkillCategory = 'core' | 'languages' | 'tools';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Core Skills
  { name: 'Software Development', icon: '🎮', category: 'core' },
  { name: 'Technical Game Design', icon: '🎲', category: 'core' },
  { name: 'Level Design', icon: '🏗️', category: 'core' },
  { name: 'Product Management', icon: '📊', category: 'core' },
  { name: 'UX & UI', icon: '🎨', category: 'core' },
  { name: 'Remote Work', icon: '👥', category: 'core' },
  { name: 'Pair Programming', icon: '🤝', category: 'core' },
  
  // Languages & Technologies
  { name: 'JavaScript', icon: 'JS', category: 'languages' },
  { name: 'Python', icon: 'PY', category: 'languages' },
  { name: 'C#', icon: 'C#', category: 'languages' },
  { name: 'C++', icon: 'C++', category: 'languages' },
  { name: 'React', icon: '⚛️', category: 'languages' },
  { name: 'PHP', icon: 'PHP', category: 'languages' },
  { name: 'TypeScript', icon: 'TS', category: 'languages' },
  { name: 'Golang', icon: 'GO', category: 'languages' },
  
  // Tools
  { name: 'Unreal Engine', icon: 'UE', category: 'tools' },
  { name: 'Unity', icon: 'U', category: 'tools' },
  { name: 'Blender', icon: 'B', category: 'tools' },
  { name: 'GitHub', icon: 'GH', category: 'tools' },
  { name: 'Docker', icon: '🐳', category: 'tools' },
  { name: 'Git', icon: 'G', category: 'tools' },
  { name: 'Jira', icon: 'J', category: 'tools' },
  { name: 'Three.js', icon: '3JS', category: 'tools' }
];

export const categoryTitles: Record<SkillCategory, string> = {
  'core': 'Core Skills',
  'languages': 'Languages & Technologies',
  'tools': 'Tools'
};