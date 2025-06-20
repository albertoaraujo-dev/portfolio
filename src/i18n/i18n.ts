import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server'; 
import { type AbstractIntlMessages } from 'next-intl';

const locales = ['en', 'pt-BR'];

export default getRequestConfig(async ({ locale }) => { 

  if (!locales.includes(locale as string)) {
    notFound();
  }

  const validLocale = locale as string;

  try {
    const messages: AbstractIntlMessages = (await import(`../../messages/${validLocale}.json`)).default;
    return {
      locale: validLocale,
      messages: messages 
    };
  } catch (error) {
    console.error(`Could not load messages for locale ${validLocale}:`, error);
    notFound(); 
  }
});