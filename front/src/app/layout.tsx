import Head from 'next/head';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Support from '@/components/support';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'On My Ticket',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
