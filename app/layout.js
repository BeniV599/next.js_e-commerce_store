import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'BCV DigiArt Gallery',
    template: '%s | BCV DigiArt Gallery',
  },
  description:
    "Servus, y'all! This is BCV! And welcome to my digital art gallery! Where NFTs are actually not NFTs, cuz first of all, heast; why tho, oida? I mean, howdy! And second of all, you can help me support my art, so I can contribute our precious world to be inspired by witnessing & appreciating my dear art, and so I can continue working hard in service to both you & me, partner. :]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header data-test-id="products-link"></header>
        <nav className="link">
          <Link href="/">My Homepage</Link>{' '}
          <Link href="/artworks">My Artworks</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
