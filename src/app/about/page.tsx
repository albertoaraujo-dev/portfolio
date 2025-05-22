'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary dark:text-slate-200"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary dark:text-slate-400 max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title text-primary dark:text-slate-200"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary dark:text-slate-200 mb-4" />
            <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">Frontend</h3>
            <ul className="text-secondary dark:text-slate-400 space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary dark:text-slate-200 mb-4" />
            <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">Backend</h3>
            <ul className="text-secondary dark:text-slate-400 space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary dark:text-slate-200 mb-4" />
            <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">Tools & Others</h3>
            <ul className="text-secondary dark:text-slate-400  space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Postman</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title text-primary dark:text-slate-200"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">Developer and UI/UX Design</h3>
            <p className="text-primary dark:text-slate-200 mb-2">Freelancer • 2022 - Present</p>
            <ul className="text-secondary dark:text-slate-400 list-disc list-inside space-y-2">
              <li>Designed layouts for websites, business cards, posts, and screen prototypes using Figma</li>
              <li>Developed websites using HTML5, CSS, JavaScript, and React</li>
              <li>Integrated jQuery templates with a CMS platform for e-commerce creation and configuration</li>
              <li>Responsible for website hosting and version control using GIT and GitHub</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">Full Stack Developer</h3>
            <p className="text-primary dark:text-slate-200 mb-2">COOP • 2024 - 2024</p>
            <ul className="text-secondary dark:text-slate-400 list-disc list-inside space-y-2">
              <li>Responsible for creating layouts and prototypes for both new and existing screens using Figma</li>
              <li>Refactored screens to implement new designs and functionalities with Bootstrap and PHP</li>
              <li>Resolved tickets involving data entry or corrections directly in the SQL database</li>
              <li>Performed API testing and documentation using Postman</li>
              <li>Managed version control using GIT and GitHub repositories</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">Junior Systems Analyst</h3>
            <p className="text-primary dark:text-slate-200 mb-2">Target Sistemas • 2021 - 2023</p>
            <ul className="text-secondary dark:text-slate-400 list-disc list-inside space-y-2">
              <li>Responsible for maintaining the legacy system developed in Centura</li>
              <li>Developed new features and refactored legacy code to C# (.NET) and TypeScript (Angular)</li>
              <li>Created and modified SQL scripts</li>
              <li>Produced documentation related to development tasks</li>
              <li>Provided Level 2 support and trained new analysts on workflow processes</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">Bachelor of Information Systems</h3>
            <p className="text-primary dark:text-slate-200 mb-2">UNESA - Universidade Estácio de Sá • 2020 - 2023</p>
            <p className="text-secondary dark:text-slate-400">
              GPA 9,37 - Focused on software and web development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 