const PROD = process.env.NODE_ENV !== 'development';
module.exports = {
  publicRuntimeConfig: {
    /** Will be available on both server and client */
    // ENV
    ENV: process.env.NODE_ENV !== 'development' ? 'PROD' : 'DEV',
    // URL
    BASE_URL: !PROD ? 'http://localhost:3000' : 'http://localhost:3000',
    // Metas
    NAME: 'WebStorify',
    TITLE: 'Next SEO with next-seo',
    DESCRIPTION: 'Next SEO with next-seo',
    KEYWORD: 'Next.js, React, SEO, Meta Tags',
    THEME: '#f05147',
    STATIC: '',
  },
};
