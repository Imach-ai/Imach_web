import Head from 'next/head';
import Link from 'next/link';
import styles from './cookies.module.css';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Bokly</title>
        <meta name="description" content="Information about cookies and tracking on Bokly." />
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.videoBg}>
            <div className={styles.videoBgOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Cookie Policy</h1>
            <p className={styles.subtitle}>How Bokly uses cookies and similar technologies.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.content}>
            <h2>What are Cookies?</h2>
            <p>Cookies are small text files stored on your device that help our site function and improve your experience.</p>

            <h3>Types of Cookies We Use</h3>
            <p>We use essential cookies for site operation, analytics cookies to understand usage, and marketing cookies to personalize offers.</p>

            <h3>Managing Cookies</h3>
            <p>You can control cookie preferences in your browser settings. For assistance, <Link href="/contact">contact us</Link>.</p>
          </div>
        </section>
      </main>
    </>
  );
}
