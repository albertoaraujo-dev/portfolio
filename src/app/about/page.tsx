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
import { useTranslations } from 'next-intl';
import { experiences } from '@/contents/experiences';



export default function About() {

  const t = useTranslations('About');

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary dark:text-slate-200"
        {...fadeInDown}
      >
        {t('title')}
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary dark:text-slate-400 max-w-3xl mx-auto text-center">
          {t('subtitle')}
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
          {t('skills')}
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
              <li>HTMX</li>
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
              <li>Django</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary dark:text-slate-200 mb-4" />
            <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">
              {t('tools')}
            </h3>
            <ul className="text-secondary dark:text-slate-400  space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Postman</li>
              <li>CI/CD</li>
              <li>Figma</li>
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
          {t('experience')}
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {experiences.map((experience) => (
            <motion.div 
                key={experience.id}
                className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800"
                variants={fadeInUp}
                {...cardHoverSmall}
            >
             <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">
               {t(`experience_${experience.id}`)}
             </h3>
             <p className="text-primary dark:text-slate-200 mb-2">
               {experience.company} • {t(`experience_${experience.id}_date`)}
             </p>
             <ul className="text-secondary dark:text-slate-400 list-disc list-inside space-y-2">
            
             {(t.raw(`experience_${experience.id}_tasks`) as string[])
              .map((task: string, index: number) => (
                <li key={`${experience.id}-${index}`}>
                  {task}
                </li>
              ))}
             </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title text-primary dark:text-slate-200"
          {...fadeInUp}
        >
          {t('education')}
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
            <h3 className="text-xl font-semibold text-primary dark:text-slate-200 mb-2">
              {t('education_title')}
            </h3>
            <p className="text-primary dark:text-slate-200 mb-2">UNESA - Universidade Estácio de Sá • 2020 - 2023</p>
            <p className="text-secondary dark:text-slate-400">
              {t('education_description')}
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 