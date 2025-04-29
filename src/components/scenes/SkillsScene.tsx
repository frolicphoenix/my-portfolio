import React, { Suspense, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SkillItem from '../../components/skills/SkillItem';
import { skills, categoryTitles, type Skill, type SkillCategory } from '../../data/skills';

// Lazy-load the galaxy background
const GalaxyStars = React.lazy(() => import('../effects/GalaxyStars'));

const SkillsScene: React.FC = () => {
  const reduceMotion = useReducedMotion();

  // Group skills by category
  const skillsByCategory = useMemo(() => {
    const acc: Record<SkillCategory, Skill[]> = {} as Record<SkillCategory, Skill[]>;
    skills.forEach(skill => {
      const cat = skill.category as SkillCategory;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(skill);
    });
    return acc;
  }, []);

  // Variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: reduceMotion ? 0 : 0.05,
        delayChildren: reduceMotion ? 0 : 0.2,
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.section
      role="region"
      aria-label="Skills Showcase"
      className="absolute inset-0 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: 100, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0, transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.23,1,0.32,1] } }}
      exit={{ opacity: 0, x: -100, rotateY: -10, transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.23,1,0.32,1] } }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl h-4/5">
        {/* Galaxy Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0a]" />}>
            <GalaxyStars />
          </Suspense>
        </div>

        {(Object.keys(skillsByCategory) as SkillCategory[]).map(category => (
          <section
            key={category}
            aria-labelledby={`skills-${category}-heading`}
            className="bg-[#1e1e1e]/50 backdrop-blur-md rounded-xl p-6 flex flex-col gap-5 overflow-y-auto scrollbar-thin scrollbar-thumb-[#88a035]/50"
          >
            <h2
              id={`skills-${category}-heading`}
              className="text-2xl font-semibold relative text-white"
            >
              {categoryTitles[category]}
              <span className="absolute h-[3px] w-10 bg-[#88a035] rounded left-0 -bottom-2" aria-hidden="true" />
            </h2>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillsByCategory[category].map((skill, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <SkillItem icon={skill.icon} name={skill.name} img={skill.img} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </div>
    </motion.section>
  );
};

export default React.memo(SkillsScene);