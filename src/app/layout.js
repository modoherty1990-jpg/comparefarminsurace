// src/app/layout.js
// Swap GA_MEASUREMENT_ID once you create the GA4 property

import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // replace after creating GA4 property

export const metadata = {
  title: 'Compare Farm Insurance Australia | Find the Right Broker for Your Farm',
  description: 'Answer 6 quick questions and get matched with specialist farm insurance brokers who know your type of farming. Free, no obligation. Compare farm insurance brokers across Australia.',
  keywords: 'farm insurance Australia, farm insurance broker, compare farm insurance, crop insurance, livestock insurance, hobby farm insurance, agribusiness insurance',
  authors: [{ name: 'Compare Farm Insurance' }],
  creator: 'Compare Farm Insurance',
  metadataBase: new URL('https://comparefarminsurace.com.au'),
  alternates: {
    canonical: 'https://comparefarminsurace.com.au',
  },
  openGraph: {
    title: 'Compare Farm Insurance Australia',
    description: 'Find the right farm insurance broker for your operation. Matched by farm type, location, and scale.',
    url: 'https://comparefarminsurace.com.au',
    siteName: 'Compare Farm Insurance',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // add a 1200x630 farm photo here
        width: 1200,
        height: 630,
        alt: 'Compare Farm Insurance Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Farm Insurance Australia',
    description: 'Find the right farm insurance broker for your operation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

// Schema markup — WebSite + Organization + FAQPage (homepage)
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://comparefarminsurace.com.au/#website',
      url: 'https://comparefarminsurace.com.au',
      name: 'Compare Farm Insurance',
      description: 'Australia\'s farm insurance broker matching service',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://comparefarminsurace.com.au/guides?search={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://comparefarminsurace.com.au/#organization',
      name: 'Compare Farm Insurance',
      url: 'https://comparefarminsurace.com.au',
      logo: {
        '@type': 'ImageObject',
        url: 'https://comparefarminsurace.com.au/logo.svg',
      },
      description: 'Farm insurance broker matching service for Australian farmers',
      areaServed: 'AU',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        {/* GA4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
            `,
          }}
        />
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
