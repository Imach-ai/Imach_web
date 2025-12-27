import Head from 'next/head';
import Link from 'next/link';
import styles from './terms.module.css';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Bokly</title>
        <meta name="description" content="Terms of service for Bokly bookstore." />
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.videoBg}>
            <div className={styles.videoBgOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Terms & Conditions</h1>
            <p className={styles.subtitle}>The rules and regulations for using Bokly services.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Acceptance of Terms</h2>
            <p>By accessing or using Bokly, you agree to be bound by these terms.</p>

            <h3>User Responsibilities</h3>
            <p>Users must provide accurate information and comply with applicable laws when using our services.</p>

            <h3>Intellectual Property</h3>
            <p>All content on Bokly is the property of Bokly or its licensors and is protected by copyright laws.</p>

            <h3>Limitation of Liability</h3>
            <p>We are not liable for indirect damages; our liability is limited to the extent permitted by law.</p>

            <h3>Contact</h3>
            <p>For questions about these terms, please <Link href="/contact">contact us</Link>.</p>
          </div>
        </section>
      </main>
    </>
  );
}
