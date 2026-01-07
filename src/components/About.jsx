import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaLaptopCode, FaBrain } from 'react-icons/fa'
import photo from '../images/photo.jpg'; 

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

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

  const skills = [
    { icon: FaCode, label: 'Full Stack', color: 'from-blue-500 to-cyan-500' },
    { icon: FaLaptopCode, label: 'Web Dev', color: 'from-green-500 to-teal-500' },
    { icon: FaBrain, label: 'AI/ML', color: 'from-purple-500 to-pink-500' },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <motion.div
  className="w-20 h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-lg relative"
  whileHover={{ scale: 1.5 }} // increase size by 1.5x on hover
  transition={{ duration: 0.3 }}
>
  <img
    src={photo}
    alt="Profile"
    className="w-full h-full object-cover"
  />
</motion.div>


                  
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                    Tanay Kashyap
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                    Full Stack Developer & AI Enthusiast
                  </p>
                  
                  {/* Skill Icons */}
                  <div className="flex space-x-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-20`}
                        whileHover={{ scale: 1.2, y: -5 }}
                        transition={{ duration: 0.3 }}
                        title={skill.label}
                      >
                        <skill.icon className="text-lg text-white" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 dark:bg-purple-400/30 rounded-full blur-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
            >
              <p>
                I am <span className="text-blue-600 dark:text-blue-400 font-semibold">Tanay</span>, a passionate and results-driven Software Developer with a solid foundation in computer science. I hold a B.Tech in Computer Science from <span className="text-blue-600 dark:text-blue-400 font-semibold">VIT, Bhopal</span>, where I honed my skills in programming and software development.
              </p>
              
              <p>
                With extensive experience in <span className="text-blue-600 dark:text-blue-400 font-semibold">C++</span>, <span className="text-blue-600 dark:text-blue-400 font-semibold">Python</span>, and the <span className="text-blue-600 dark:text-blue-400 font-semibold">MERN</span> stack, I specialize in developing scalable applications and robust backend systems.
              </p>
              
              <p>
                I thrive in dynamic environments and am always eager to learn new skills. I am well-versed in <span className="text-blue-600 dark:text-blue-400 font-semibold">cloud technologies</span> such as <span className="text-blue-600 dark:text-blue-400 font-semibold">AWS</span> and <span className="text-blue-600 dark:text-blue-400 font-semibold">Docker</span>, which I leverage for efficient deployment and scaling of applications.
              </p>
              
              <p>
                I believe in the power of technology to solve real-world problems and am dedicated to making a positive impact through my work.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: '6+', label: 'Months Experience' },
                { number: '20+', label: 'Projects Completed' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About