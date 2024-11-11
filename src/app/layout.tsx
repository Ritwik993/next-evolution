import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
    <html lang="en">
      <body className={`${poppins.className} w-[100vw]   flex flex-col items-center justify-center overflow-x-hidden`}>
             <main>         
            {children}
            </main>
      </body>
    </html>
  );
}
