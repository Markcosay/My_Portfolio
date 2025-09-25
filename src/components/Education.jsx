import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCertificate, FaCalendarAlt } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const education = [
    {
      institution: 'Vellore Institute of Technology (VIT)-Bhopal',
      degree: 'B. Tech in Computer Science Engineering',
      period: '2022 - 2026',
      description: [
        'Graduated with a solid foundation in computer science principles.',
        'Participated in various tech workshops and hackathons.',
        'Strong focus on programming fundamentals and software engineering.',
      ],
      icon: FaGraduationCap,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      institution: 'New Horizon School, Bhaglpur',
      degree: 'Higher Secondary Certificate',
      period: '2008 - 2013',
      description: [
        'Completed schooling with a strong emphasis on science and mathematics.',
        'Involved in extracurricular activities, including music, choreography and quizzing competitions.',
      ],
      icon: FaGraduationCap,
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const certifications = [
    {
      title: 'Cloud Computing - Google',
      link:  '',
    },
    {
      title: 'Data Analytics with GenAI - Tata',
      link:  '',
    },
    {
      title: 'Full Stack Development - Oracle',
      link:  '',
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
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
              Education
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-8 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-5 dark:opacity-10`}></div>
                
                <div className="relative z-10 grid md:grid-cols-4 gap-6 items-center">
                  {/* Icon and period */}
                  <div className="md:col-span-1 text-center md:text-left">
                    <motion.div 
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${edu.color} bg-opacity-20 mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <edu.icon className="text-3xl text-white" />
                    </motion.div>
                    <div className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-400 text-sm">
                      <FaCalendarAlt className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3">
                    {/* Institution */}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.institution}
                    </h3>

                    {/* Degree */}
                    <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-4`}>
                      {edu.degree}
                    </p>

                    {/* Description */}
                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start text-sm">
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="grid md:grid-cols-2 gap-4">
  {certifications.map((cert, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -15 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
      transition={{
        delay: index * 0.05,       // minimal stagger
        duration: 0.6,             // slower entrance animation
        ease: 'easeOut'
      }}
      whileHover={{
        scale: 1.02,               // smaller zoom
        x: 6,                      // subtle slide
         transition: {
      duration: 0.25,    // ⬅️ slower scale-up
      ease: 'easeOut'
    }// starts instantly on hover
      }}
      className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/20 dark:border-green-400/30 hover:border-green-400/40 dark:hover:border-green-300/50 transition-colors duration-200"
    >
      <div className="flex items-center">
        <span className="text-green-600 dark:text-green-400 mr-3 w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full flex-shrink-0"></span>
        <span className="text-gray-700 dark:text-gray-300">{cert.title}</span>
      </div>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
        >
          <FaExternalLinkAlt size={18} />
        </a>
      )}
    </motion.div>
  ))}
</div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education