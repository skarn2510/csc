import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/common/Footer';
import NavbarTwo from '../components/common/NavbarTwo';
import { HomeOurservice } from '../components/HomeOurservice';
import styles from '../styles/Home.module.css';
import HomeService from '../components/HomeService';
import Partner from '../components/Partner';
import Associated from '../components/Associated';
import Testimonialone from '../components/Testimonialone';
import Testimonialtwo from '../components/Testimonialtwo';
import Heroone from '../components/Heroone';
import WhyChooseusoone from '../components/WhyChooseusoone';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSC</title>
        <meta name="description" content="AEM Project Solutions" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* tabsection file start */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css"
        />
        {/* tabsection file end */}
      </Head>

      <main>
        <NavbarTwo />
        <Heroone />
        <HomeService />
        <Testimonialone />
        <HomeOurservice />
        <WhyChooseusoone />
        <Partner />
        <Associated />
        <Testimonialtwo />
        <Footer />
      </main>

      <footer className={styles.footer}></footer>

      <Script
        src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
