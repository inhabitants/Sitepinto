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
