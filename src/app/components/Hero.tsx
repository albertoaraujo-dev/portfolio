'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Home')
  return (
    <section className="pt-0 pb-10 md:pt-5">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
            
          >
            <Image 
               src="/portfolio/profile.jpg" 
               alt="Profile"
               width={100}
               height={100}
               priority
               className="rounded-full mb-4 w-40 h-40 object-cover ring-1 ring-slate-400" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-400"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {t('hero.title')} <motion.span 

              className="text-primary dark:text-slate-100"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Alberto Araujo
              {/* <p>{t('title')}</p> */}
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/albertoaraujo-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-500 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/albertoaraujodev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-500 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              download={"AlbertoAraujo.pdf"}
              href="/portfolio/AlbertoAraujo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-500 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFileAlt />
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-slate-700 hover:bg-slate-800 dark:bg-slate-800 hover:dark:bg-slate-700 inline-block w-full md:w-auto text-slate-100 px-8 py-3 rounded-lg  transition-colors"
              >
                {t('hero.projects_button')}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className=" inline-block w-full bg-slate-700 hover:bg-slate-800 dark:bg-slate-800 hover:dark:bg-slate-700 md:w-auto text-slate-100 dark:text-slate-100 px-8 py-3 rounded-lg transition-colors"
              >
                {t('hero.contact_button')}

              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 