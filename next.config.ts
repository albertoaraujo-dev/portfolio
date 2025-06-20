// next.config.ts
import type { NextConfig } from "next";
// Importe o plugin next-intl usando a sintaxe de importação ESM
import createNextIntlPlugin from 'next-intl/plugin'; 

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  basePath: '/portfolio', // Seu basePath está aqui, o que é correto
};

// Chame o plugin createNextIntlPlugin diretamente com o caminho para seu i18n.ts
const withNextIntl = createNextIntlPlugin('./src/i18n/i18n.ts'); 

// Exporte a configuração combinada
export default withNextIntl(nextConfig);