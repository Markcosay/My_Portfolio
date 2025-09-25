import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/tanaykashyap26/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
    },
    {
      icon: FaGithub,
      url: 'https://github.com/markcosay/',
      color: 'hover:text-gray-800 dark:hover:text-gray-300',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-700/30',
    },
    // {
    //   icon: FaTwitter,
    //   url: 'https://x.com/markcosay31',
    //   color: 'hover:text-cyan-600 dark:hover:text-cyan-400',
    //   bgColor: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/30',
    // },
    {
      icon: FaEnvelope,
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=tanay.kashyap26@gmail.com&su=Hello%20Tanay,%20would%20like%20to%20connect',
      color: 'hover:text-red-600 dark:hover:text-red-400',
      bgColor: 'hover:bg-red-100 dark:hover:bg-red-900/30',
     },
  ]

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 ${social.color} ${social.bgColor} transition-all duration-300`}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
        
        {/* Vertical line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto"
        />
      </div>
    </motion.div>
  )
}

export default SocialSidebar