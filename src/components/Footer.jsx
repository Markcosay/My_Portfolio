import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/tanaykashyap26/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: FaGithub,
      url: 'https://github.com/markcosay/',
      color: 'hover:text-gray-800 dark:hover:text-gray-400',
    },
    // {
    //   icon: FaTwitter,
    //   url: 'https://x.com/markcosay31',
    //   color: 'hover:text-cyan-600 dark:hover:text-cyan-400',
    // },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center text-gray-600 dark:text-gray-400 mb-4 md:mb-0"
          >
            <span>© {year} Tanay Kashyap</span>
            {/* <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-2"
            >
              <FaHeart className="text-red-500" />
            </motion.div> */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;