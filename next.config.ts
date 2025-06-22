import type { NextConfig } from "next";

import createNextIntlPlugin from 'next-intl/plugin'; 

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  basePath: '/portfolio',
};

const withNextIntl = createNextIntlPlugin('./src/i18n/i18n.ts'); 

export default withNextIntl(nextConfig);