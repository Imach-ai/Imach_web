import Head from 'next/head';
import Link from 'next/link';
import styles from './privacy.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Bokly</title>
        <meta name="description" content="Bokly privacy policy and data practices." />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.videoBg}>
            <div className={styles.videoBgOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.subtitle}>How we collect, use, and protect your information.</p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2>Overview</h2>
            <p>
              At Bokly we respect your privacy. This policy explains what information we collect, how we use it,
              and the choices you have regarding your information.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information when you create an account, place an order, subscribe to newsletters, or use our services.</p>

            <h2>How We Use Your Information</h2>
            <p>We use information to process orders, improve our services, personalize recommendations, and send updates.</p>

            <h2>Security</h2>
            <p>We maintain reasonable administrative, technical, and physical safeguards to protect your personal information.</p>

            <h2>Contact</h2>
            <p>If you have questions about this policy, please <Link href="/contact">contact us</Link>.</p>
          </div>
        </section>
      </main>
    </>
  );
}
