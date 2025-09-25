import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const experiences = [
    {
      company: 'NuAIg, Indore',
      position: 'Software Engineer',
      period: 'September 2024 - Present',
      description: [
        'Developed solutions using advanced Python for AI-driven projects.',
        'Focused on optimization and scaling for high-performance applications.',
        'Collaborated with cross-functional teams to deliver innovative AI solutions.',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'Shourya Packaging, Indore',
      position: 'Director',
      period: 'April 2020 - April 2024',
      description: [
        'Led a family-owned packaging company serving pharmaceutical industries.',
        'Optimized production workflows, increasing efficiency by 20%.',
        'Introduced modern production techniques, improving product quality and customer satisfaction.',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Alepo Technologies, Mumbai',
      position: 'Software Engineer',
      period: 'June 2018 - March 2020',
      description: [
        'Worked on 4G/5G telecom projects, developing components with C++.',
        'Developed C++ libraries for JSON parsing, Couchbase DB interactions, and YAML-based server generation.',
        'Collaborated with telecom giants like Etisalat and ACT, contributing to mission-critical applications.',
      ],
      color: 'from-green-500 to-teal-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey through various roles and technologies
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-800 z-10 shadow-lg"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content card */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 dark:opacity-10`}></div>
                    
                    <div className="relative z-10">
                      {/* Company and position */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                            {exp.company}
                          </h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {exp.position}
                          </p>
                        </div>
                        <FaBriefcase className="text-blue-600 dark:text-blue-400 text-xl flex-shrink-0 ml-4" />
                      </div>

                      {/* Period */}
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <FaCalendarAlt className="mr-2" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience