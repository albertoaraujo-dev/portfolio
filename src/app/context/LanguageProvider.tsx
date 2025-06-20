'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useState, useEffect } from 'react';
import enMessages from '../../../messages/en.json'; 
import ptBRMessages from '../../../messages/pt-BR.json';
import { useSearchParams } from 'next/navigation';

const allMessages = {
  'en': enMessages,
  'pt-BR': ptBRMessages,
};

const locales = ['en', 'pt-BR'];
const defaultLocale = 'en';

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams(); // Obtenha os searchParams

  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

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

  return (
    <NextIntlClientProvider
      locale={currentLocale}
      messages={allMessages[currentLocale as keyof typeof allMessages]}
    >
      {children}
    </NextIntlClientProvider>
  );
}