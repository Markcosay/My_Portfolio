import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaRobot,
  FaServer,
  FaSearchLocation,
  FaGlobe,
  FaCalendarCheck,
  FaGamepad,
  FaGithub,            // ✅ added
  FaExternalLinkAlt,
  FaStethoscope,   // ✅ added
} from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'Filter Out',
      description:
        'End-to-end toxic comment detection system that scrapes social media comments from user-provided URLs, processes over 1,000 comments per request, and detects harmful behavior in real time using a machine-learning model with 92% accuracy and 88% F1-score. Containerized and deployed on AWS for 50 concurrent users/second with <500 ms response times.',
      tech: ['Python', 'Flask', 'REST API', 'Selenium', 'Docker', 'AWS', 'NLP', 'Scikit-learn'],
      github: '',
      demo: '',
      icon: FaRobot,
      color: 'from-rose-500 to-pink-500',
    },
    {
      title: 'Cloud Load Balancer',
      description:
        'Java-based cloud storage simulator with CRUD operations, secure login, and enterprise-style load-balancing algorithms (FCFS, SJN) improving efficiency by 15%. Features AES encryption of file chunks and detailed monitoring dashboards.',
      tech: ['Java', 'JavaFX', 'Apache Maven', 'Docker', 'SQLite', 'AWT'],
      github: 'https://github.com/Markcosay/cloud-load-balancer',
      demo: '',
      icon: FaServer,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'DocBook',
      description:
        'Full-stack MERN application for booking doctor appointments and generating digital prescriptions. Streamlines scheduling for patients and doctors with real-time availability, secure patient records, and automated email reminders.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT Auth', 'Tailwind CSS'],
      github: 'https://github.com/markcosay/docbook',  
      demo: '',                                           
      icon: FaStethoscope,                                
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Accommodate Me',
      description:
        'Automation tool for large-scale accommodation search across 1,000+ cities using Selenium and Beautiful Soup. Eliminates 90% of manual effort, boosts dataset coverage by 150%, and accelerates search speed by 50%.',
      tech: ['Python', 'Selenium', 'Beautiful Soup', 'Flask', 'MySQL', 'HTML', 'JavaScript', 'Tailwind CSS'],
      github: '',
      demo: '',
      icon: FaSearchLocation,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Team GarVIT Website',
      description:
        'Full-stack website to enhance team presence, attracting 270+ unique visitors in 6 months and increasing sponsorships by 20%. Deployed via Netlify with ReactJS frontend and SQLite backend.',
      tech: ['ReactJS', 'Bootstrap', 'SQLite', 'Netlify'],
      github: '',
      demo: '',
      icon: FaGlobe,
      color: 'from-indigo-500 to-violet-500',
    },
    {
      title: 'Event Booking Web App',
      description:
        'ASP.NET Core web application for event registration and ticket management with role-based access, payment integration, and admin dashboards to handle hundreds of simultaneous bookings.',
      tech: ['.NET Core', 'C#', 'ASP.NET MVC', 'SQL Server'],
      github: 'https://github.com/Markcosay/Bookify',
      demo: '',
      icon: FaCalendarCheck,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Desktop Arcade Game',
      description:
        '2-D desktop game built with Pygame featuring multiple levels, custom sprites, collision detection, sound effects, and scoring system; packaged for cross-platform distribution.',
      tech: ['Python', 'Pygame'],
      github: 'https://github.com/Markcosay/Space_warrior',
      demo: '',
      icon: FaGamepad,
      color: 'from-red-500 to-pink-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20 mr-4`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <project.icon className="text-2xl text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                        >
                          <FaGithub size={20} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                        >
                          <FaExternalLinkAlt size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          inView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          delay: 0.5 + index * 0.1 + techIndex * 0.05,
                          duration: 0.5,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 text-sm bg-gradient-to-r ${project.color} bg-opacity-20 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 cursor-default`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/markcosay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div whileHover={{ rotate: 12 }} transition={{ duration: 0.3 }}>
                <FaGithub className="mr-2" />
              </motion.div>
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
