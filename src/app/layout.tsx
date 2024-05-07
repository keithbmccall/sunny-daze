import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import './styles/tachyons.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SunniyDaze',
  description: 'NEXT!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Navigation</div>
        {children}
        <div>Bottom</div>
      </body>
    </html>
  );
}
