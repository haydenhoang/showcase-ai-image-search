import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { GithubIcon } from '@/components/icons';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${robotoMono.variable} px-[4vw] font-sans`}
      >
        <header className='flex items-center justify-between py-[4vh]'>
          <a
            href='https://typesense.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-base text-accent'
          >
            type<b>sense|</b>
          </a>
          <a
            href='https://github.com/typesense/showcase-ai-image-search'
            target='_blank'
            rel='noopener noreferrer'
            id='typesense'
            title='Source code'
          >
            <GithubIcon className='size-6' />
          </a>
        </header>
        <main className='flex flex-col gap-[2vh] py-10 '>{children}</main>
      </body>
    </html>
  );
}
