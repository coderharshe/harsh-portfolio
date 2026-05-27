import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Harsh Aggarwal — Advanced Python, AI/ML & High-Velocity Vibe Coding',
  description: 'Futuristic portfolio of Harsh Aggarwal. Advanced Python & AI/ML Engineer merging BBA business strategy with AI-agentic high-velocity development (Vibe Coding) to build production-grade web solutions.',
  keywords: [
    'vibe coding',
    'agentic developer',
    'advanced python developer',
    'AI ML engineer',
    'full stack developer',
    'web developer India',
    'SaaS developer',
    'AI web developer',
    'Next.js developer',
    'freelance web developer',
    'Harsh Aggarwal',
    'coderharsh'
  ],
  authors: [{ name: 'Harsh Aggarwal', url: 'https://github.com/coderharshe' }],
  creator: 'Harsh Aggarwal',
  metadataBase: new URL('https://harshaggarwal.dev'),
  openGraph: {
    title: 'Harsh Aggarwal — Advanced Python, AI/ML & High-Velocity Vibe Coding',
    description: 'Sleek, futuristic, high-performance portfolio featuring actual digital lending apps, computer vision photo splitters, and custom SaaS platforms built at agentic speeds.',
    url: 'https://harshaggarwal.dev',
    siteName: 'Harsh Aggarwal Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Aggarwal — Advanced Python, AI/ML & High-Velocity Vibe Coding',
    description: 'Sleek, futuristic, high-performance portfolio featuring actual digital lending apps, computer vision photo splitters, and custom SaaS platforms built at agentic speeds.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD SEO schema
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Harsh Aggarwal',
    jobTitle: 'Advanced Python, AI/ML & High-Velocity Vibe Coding Engineer',
    url: 'https://harshaggarwal.dev',
    sameAs: [
      'https://github.com/coderharshe',
      'https://www.linkedin.com/in/harsh-aggarwal-122405322'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressCountry: 'India'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Business Administration (BBA)'
    },
    knowsAbout: [
      'Advanced Python & AI/ML',
      'AI-Agentic Software Development (Vibe Coding)',
      'Full Stack Web Development',
      'SaaS Architecture',
      'React & Next.js 15/16',
      'Node.js & Python FastAPI',
      'Database Modeling & PostgreSQL'
    ]
  };

  return (
    <html lang="en" className="h-full dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans min-h-full flex flex-col antialiased bg-primary-bg text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
