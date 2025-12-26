/**
 * Login Page (auth/login.jsx)
 * User authentication interface
 */

import Head from 'next/head';
import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';
import styles from './auth.module.css';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Sign In | PageTurner</title>
        <meta name="description" content="Sign in to your PageTurner account" />
      </Head>

      <section className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Sign in to your PageTurner account</p>
          
          <LoginForm />

          <div className={styles.divider}>Or continue as guest</div>

          <Link href="/" className={styles.guestLink}>
            Browse as Guest
          </Link>
        </div>

        {/* Decorative Section */}
        <div className={styles.decoration}>
          <h2>Discover Great Books</h2>
          <p>Explore our curated collection and find your next favorite read.</p>
          <Link href="/books">Browse Books</Link>
        </div>
      </section>
    </>
  );
}
