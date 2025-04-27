import { motion } from 'framer-motion'

const ContactScene = () => {
  const contactLinks = [
    // {
    //   icon: 'R',
    //   img: "https://img.icons8.com/bubbles/200/resume.png",
    //   label: 'Download Resume',
    //   href: '/resume/pranjallokhande_resume_FullStack.pdf'
    // },
    {
      icon: 'M',
      img: 'https://img.icons8.com/bubbles/200/apple-mail.png',
      label: 'E-Mail',
      href: 'mailto:pranjalmlokhande@gmail.com'
    },
    {
      icon: 'L',
      img: "https://img.icons8.com/bubbles/200/linkedin.png",
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pranjallokhande/'
    },
    {
      icon: 'G',
      img: "https://img.icons8.com/bubbles/200/github.png",
      label: 'GitHub',
      href: 'https://github.com/frolicphoenix'
    },
    {
      icon: 'T',
      img: "https://img.icons8.com/bubbles/200/tumblr.png",
      label: 'Tumblr',
      href: 'https://theunrealdesigner.tumblr.com/'
    }
  ];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#0a0a0a]/95 to-[#0a0a0a]/85 bg-[url('https://www.dropbox.com/scl/fi/0b36orybelijtfsah63fo/ss.png?rlkey=sbqmki7mb0tsw1n4jyo02szwx&st=9nt86hpo&raw=1')] bg-cover"
      initial={{ opacity: 0, x: 100, rotateY: 10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -100, rotateY: -10 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="flex flex-col items-center text-center max-w-7xl w-full px-6">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-[#88a035] to-[#bbcf64] bg-clip-text text-transparent">
          Contact Me
        </h2>

        {/* Flex Layout for Links + Form */}
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-start">

          {/* Contact Links */}
          <div className="flex flex-col w-70 max-w-md gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#1e1e1e]/70 backdrop-blur-md p-1.5 rounded-lg text-amber-300 transition-all duration-300 hover:bg-[#88a035] hover:translate-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.1 + 0.2 } 
                }}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {link.img ? (
                    <img
                      src={link.img}
                      alt={link.label}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    link.icon
                  )}
                </div>
                <div className="font-medium text-left">{link.label}</div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <form 
            action="https://formsubmit.co/pranjalmlokhande@gmail.com" 
            method="POST"
            className="flex flex-col gap-4 w-full max-w-md bg-[#1e1e1e]/70 backdrop-blur-md p-6 rounded-lg text-white shadow-lg"
          >
            {/* Name Field */}
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required
              className="bg-transparent border border-[#88a035]/50 rounded p-3 focus:outline-none focus:border-[#88a035] transition-all"
            />

            {/* Email Field */}
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required
              className="bg-transparent border border-[#88a035]/50 rounded p-3 focus:outline-none focus:border-[#88a035] transition-all"
            />

            {/* Email Field */}
            <input 
              type="message" 
              name="currentgame" 
              placeholder="Current game you're playing OR any fun fact?" 
              required
              className="bg-transparent border border-[#88a035]/50 rounded p-3 focus:outline-none focus:border-[#88a035] transition-all"
            />

            {/* Message Field */}
            <textarea 
              name="message" 
              placeholder="Message" 
              rows={5}
              required
              className="bg-transparent border border-[#88a035]/50 rounded p-3 focus:outline-none focus:border-[#88a035] transition-all resize-none"
            ></textarea>

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Submit Button */}
            <button 
              type="submit"
              className="bg-[#88a035] text-amber-300 rounded p-3 font-bold hover:bg-[#bbcf64] transition-all"
            >
              Send Message
            </button>
          </form>

        </div>

        {/* Footer */}
        <motion.div 
          className="mt-20 text-bold opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9, transition: { delay: 0.8 } }}
        >
          &copy; 2025 Pranjall. All Rights Reserved.
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactScene;
