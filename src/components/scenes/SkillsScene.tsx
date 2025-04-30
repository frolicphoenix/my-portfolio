import { motion } from 'framer-motion'
import SkillItem from '../../components/skills/SkillItem'
import { skills, categoryTitles } from '../../data/skills'

const SkillsScene = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.2
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
    <motion.div 
      className="absolute inset-0 flex items-center justify-center "
      initial={{ opacity: 0, x: 100, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -100, rotateY: -10 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-7xl h-4/5">

        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div 
            key={category}
            className="bg-[#1e1e1e]/50 backdrop-blur-md rounded-xl p-6 flex flex-col gap-5 overflow-y-auto scrollbar"
          >
            <h2 className="text-2xl font-semibold relative inline-block">
              {categoryTitles[category as keyof typeof categoryTitles]}
              <div className="absolute h-[3px] w-10 bg-[#88a035] rounded left-0 -bottom-2"></div>
            </h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-2 gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {categorySkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SkillItem icon={skill.icon} name={skill.name} img={skill.img} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillsScene