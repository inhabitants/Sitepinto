import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/index.css';

import { Analytics } from "@vercel/analytics/next";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Head>
          <title>Pinto DAO - Irreverência, experimentação e cooperação para além do alpha na Web3 e AI</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Pinto DAO - Irreverência, experimentação e cooperação para além do alpha na Web3 e AI" />
          <meta name="author" content="Pinto DAO" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Pinto DAO - Irreverência, experimentação e cooperação para além do alpha na Web3 e AI" />
          <meta property="og:description" content="Pinto DAO - Irreverência, experimentação e cooperação para além do alpha na Web3 e AI" />
          <meta property="og:image" content="/Logo-Pinto-DAO.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Pinto DAO - Irreverência, experimentação e cooperação para além do alpha na Web3 e AI" />
          <meta name="twitter:description" content="Pinto DAO - Irreverência, experimentação e cooperação para além do alpha na Web3 e AI" />
          <meta name="twitter:image" content="/Logo-Pinto-DAO.png" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://pinto.wtf/#org",
              name: "Pinto Brasil DAO",
              alternateName: "PBrasilDAO",
              url: "https://pinto.wtf/",
              logo: "https://pinto.wtf/Logo-Pinto-DAO.png",
              sameAs: [
                "https://discord.pinto.wtf",
                "https://x.pinto.wtf",
                "https://helenai.wtf/",
                "https://inhabitants.zone/",
                "https://sapiensinteticos.com/",
              ],
            })}
          </script>
        </Head>
        <Toaster />
        <Sonner />
        <Component {...pageProps} />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
