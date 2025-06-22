'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Home')
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary dark:text-slate-300">
              Alberto Araujo
            </Link>
            <p className="text-sm text-secondary dark:text-slate-400 mt-2">
              © {new Date().getFullYear()} Alberto Araujo. {t('footer.copyright')}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/albertoaraujo-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/albertoaraujodev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              download={"AlbertoAraujo.pdf"}
              href="/portfolio/AlbertoAraujo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              <FaFileAlt className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 