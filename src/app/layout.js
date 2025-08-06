'use client';
import { Open_Sans, Poppins } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import CustomCursor from './ui/CustomCursor';
import Footer from './ui/Footer';
import Header from './ui/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--primary-font',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--secondary-font',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Sadman Siam" />
        <link rel="icon" href="/images/teams/logo.svg" sizes="any" />
        <title>Filmcutt - Best Video Editing Agency in Bangladesh</title>
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
