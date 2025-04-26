import { motion } from 'framer-motion'

const ContactScene = () => {
  const contactLinks = [
    {
      icon: '✉️',
      label: 'pranjalmlokhande@gmail.com',
      href: 'mailto:pranjalmlokhande@gmail.com'
    },
    {
      icon: 'in',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pranjallokhande/'
    },
    {
      icon: '📄',
      label: 'Download Resume',
      href: '/resume/pranjallokhande_resume_FullStack.pdf'
    },
    {
      icon: 'GH',
      label: 'GitHub',
      href: 'https://github.com/frolicphoenix'
    }
  ]

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#0a0a0a]/95 to-[#0a0a0a]/85 bg-[url('assets/img/ss.png')] bg-cover"
      initial={{ opacity: 0, x: 100, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -100, rotateY: -10 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="flex flex-col items-center text-center max-w-xl px-6">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#88a035] to-[#bbcf64] bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl mb-10 opacity-90">
          Interested in collaborating on projects or want to chat about game design, software development, or anything tech-related? I'd love to connect!
        </p>
        
        <div className="flex flex-col w-full max-w-md gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1e1e1e]/70 backdrop-blur-md p-4 rounded-lg text-white transition-all duration-300 hover:bg-[#88a035] hover:translate-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: index * 0.1 + 0.2 } 
              }}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {link.icon}
              </div>
              <div className="font-medium">{link.label}</div>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          className="mt-10 text-sm opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, transition: { delay: 0.8 } }}
        >
          &copy; 2025 Pranjall. All Rights Reserved.
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactScene