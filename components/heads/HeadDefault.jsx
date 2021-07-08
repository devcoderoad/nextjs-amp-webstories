import Head from 'next/Head';
import { useRouter } from 'next/router';

import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const {
  publicRuntimeConfig: {
    ENV,
    THEME,
    TITLE = '',
    DESCRIPTION = '',
    KEYWORD = '',
    BASE_URL = '',
    STATIC = '',
  },
} = getConfig();

function HeadDefault({
  title = TITLE,
  description = DESCRIPTION,
  keyword = KEYWORD,
  ogTitle = TITLE,
  ogDescription = DESCRIPTION,
  ogImageUrl = `${BASE_URL}${STATIC}/vercel.svg`,
  ogImageAlt = TITLE,
  ogUrl = BASE_URL,
  canonical = BASE_URL,
  theme = THEME,
  isAmp,
}) {
  const { basePath = '' } = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={theme} />
      {/* META ROBOTS */}
      <meta
        name="robots"
        content={`${ENV === 'PROD' ? 'index, follow' : 'noindex, nofollow'}`}
      ></meta>
      {!isAmp && (
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"
        ></meta>
      )}

      {/* META SEO */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      <link rel="canonical" href={`${canonical}${basePath}`} />

      {/* META OG */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:url" content={ogImageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <link rel="icon" href="/favicon.ico" />

      {/* OG TWITTER */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@roommeid" />
      <meta property="twitter:creator" content="@roommeid" />
      <meta
        property="twitter:title"
        content="RoomMe.id - Cari Kost Nyaman, Harga Aman"
      />
      <meta
        property="twitter:description"
        content="RoomMe.id memudahkan mencari kost via aplikasi untuk sewa kosan harian atau bulanan dilengkapi fasilitas lengkap dan harga yang anda inginkan."
      />
      <meta property="twitter:creator:id" content="@roommeid" />
      <meta
        property="twitter:image"
        content="https://dev.roomme.id/images/og-image.jpg"
      />
      <meta
        property="twitter:image:alt"
        content="RoomMe.id - Cari Kost Nyaman, Harga Aman"
      />
    </Head>
  );
}

export default HeadDefault;
