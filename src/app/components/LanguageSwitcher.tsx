'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const locales = ['en', 'pt-BR'];
const defaultLocale = 'en';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

export default function LanguageSwitcher({ isMobile = false }: LanguageSwitcherProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const localeDisplayNames: { [key: string]: string } = {
    'en': 'EN',
    'pt-BR': 'PT-BR',
  };

  useEffect(() => {
    const localeFromUrl = searchParams.get('lang');
    if (localeFromUrl && locales.includes(localeFromUrl)) {
      setCurrentLocale(localeFromUrl);
      localStorage.setItem('preferredLocale', localeFromUrl);
    } else {
      const savedLocale = localStorage.getItem('preferredLocale');
      if (savedLocale && locales.includes(savedLocale)) {
        setCurrentLocale(savedLocale);
      } else {
        setCurrentLocale(defaultLocale);
      }
    }
  }, [searchParams]);

  const handleLocaleChange = (newLocale: string) => {
    if (locales.includes(newLocale)) {
      setCurrentLocale(newLocale);
      localStorage.setItem('preferredLocale', newLocale);
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set('lang', newLocale);
      router.push(`?${newSearchParams.toString()}`, { scroll: false });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const dropdownContainerClasses = `absolute mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-10 ${isMobile ? 'left-0' : 'right-0'}`;
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-lg text-sm transition-colors
                   bg-gray-200 text-gray-600 hover:bg-gray-300
                   dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
                   flex items-center gap-1"
      >
        {localeDisplayNames[currentLocale]}
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className={dropdownContainerClasses}
          style={{ minWidth: '120px' }}
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-600
                         hover:bg-gray-100 dark:hover:bg-gray-700
                         dark:text-gray-200"
              disabled={currentLocale === locale}
            >
              {localeDisplayNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}