import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import toast, { Toaster } from 'react-hot-toast';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCopy,
} from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'tanay.kashyap26@gmail.com',
      link: 'tanay.kashyap26@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      showCopy: true,
    },
    // {
    //   icon: FaPhone,
    //   title: 'Phone',
    //   value: '',
    //   link: 'tel:',
    //   color: 'from-green-500 to-teal-500',
    //   showCopy: true,
    // },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Bhopal, India',
      link: '',
      color: 'from-purple-500 to-pink-500',
      showCopy: false,
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tanaykashyap26/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/markcosay/',
      color: 'hover:text-gray-800 dark:hover:text-gray-400',
    },
    // {
    //   icon: FaTwitter,
    //   name: 'Twitter',
    //   url: 'https://x.com/',
    //   color: 'hover:text-cyan-600 dark:hover:text-cyan-400',
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <Toaster position="top-right" />
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Let's discuss your next project or just say hello!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities and
                  exciting projects. Whether you have a question or just want to
                  say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 dark:hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-20 mr-4`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <info.icon className="text-xl text-white" />
                        </motion.div>
                        <div>
                          <h4 className="text-gray-800 dark:text-white font-semibold">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-400">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                      {info.showCopy && (
                        <button
                          onClick={() => handleCopy(info.value)}
                          className="ml-4 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                          title={`Copy ${info.title}`}
                        >
                          <FaCopy size={16} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-gray-800 dark:text-white font-semibold mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 dark:hover:border-blue-400/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send a Message
              </h3>

              <div className="relative h-96 rounded-xl overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeDwum6ix5XEL4EgYfR9IMF_fLwlw7ekTCoyh-y86-sDdKefQ/viewform?usp=header"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="Contact Form"
                  className="rounded-xl"
                >
                  Loading…
                </iframe>
                <div className="absolute inset-0 pointer-events-none border border-gray-200/50 dark:border-gray-700/50 rounded-xl"></div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 text-center">
                Or reach out directly via email or social media
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;