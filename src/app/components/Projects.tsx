'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'
import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations('Home');
  const featuredProjects = projects.filter(project => project.isFeatured);

  return (
    <section className="pb-10 md:pb-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-secondary dark:text-slate-200"
          {...fadeInUp}
        >
          {t('projects.title')}
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              className="bg-slate-100 dark:bg-slate-950 rounded-lg shadow-[0px_0px_8px_0px] shadow-slate-300 dark:shadow-slate-800 p-6"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="relative aspect-[1/1.1] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(`projects.project_${project.id}_title`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <motion.h3 
                className="text-xl font-semibold text-secondary dark:text-slate-200 mb-2"
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
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
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
                    <motion.div className="text-secondary dark:text-slate-400 text-xs italic">
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
                  <span>{t('projects.live_demo')}</span>
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 