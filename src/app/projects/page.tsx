'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('Home');
  const tp = useTranslations('Projects');
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-4 text-center text-primary dark:text-slate-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {tp('title')}
      </motion.h1>
      <motion.p 
        className="text-lg text-secondary dark:text-slate-400 mb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {tp('description')}
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-slate-100 dark:bg-slate-950 p-6 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800 overflow-hidden"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={project.image}
                alt={t(`projects.project_${project.id}_title`)}
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </motion.div>
            
            <div className="p-6">
              <motion.h3 
                className="text-xl font-semibold text-primary dark:text-slate-200 mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t(`projects.project_${project.id}_title`)}
              </motion.h3>
              <motion.p 
                className="text-secondary dark:text-slate-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t(`projects.project_${project.id}_description`)}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-secondary dark:text-slate-300 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.isPrivateRepo ? (
                  <motion.div className='flex items-center gap-2 text-secondary hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 transition-colors'>
                    <FaGithub className="h-5 w-5" />
                    <motion.div className="text-secondary dark:text-slate-400 text-xs italic w-20">
                    <span >
                        {t('projects.private_repo_notice')}
                    </span>
                    </motion.div>
                  </motion.div>
                  
                ) : (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>{t('projects.code')}</span>
                </motion.a>)}

                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>{t(`projects.live_demo`)}</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 