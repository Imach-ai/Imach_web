/**
 * Signup Page (auth/signup.jsx)
 * User registration interface
 */

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from './auth.module.css';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    console.log('Signup attempt:', formData);
  };

  return (
    <>
      <Head>
        <title>Create Account | PageTurner</title>
        <meta name="description" content="Create a new PageTurner account" />
      </Head>

      <section className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Join PageTurner to start your reading journey</p>
          
          <form onSubmit={handleSubmit} noValidate>
            {error && (
              <div style={{ 
                padding: 'var(--space-lg)', 
                background: 'rgba(211, 47, 47, 0.1)',
                color: 'var(--color-error)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-lg)',
                fontSize: 'var(--font-size-sm)',
              }}>
                {error}
              </div>
            )}

            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}>
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <label style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-sm)',
              }}>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
                <span>I agree to the <Link href="#" style={{color: 'var(--color-accent)'}}>Terms and Conditions</Link></span>
              </label>
            </div>

            <button 
              type="submit"
              style={{
                width: '100%',
                padding: 'var(--space-md) var(--space-lg)',
                background: 'var(--color-primary)',
                color: 'var(--color-white)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-base)',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
                marginTop: 'var(--space-md)',
              }}
            >
              Create Account
            </button>
          </form>

          <p style={{ 
            textAlign: 'center', 
            marginTop: 'var(--space-lg)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-secondary)',
          }}>
            Already have an account? <Link href="/auth/login" style={{color: 'var(--color-accent)', fontWeight: 'var(--font-weight-semibold)'}}>Sign In</Link>
          </p>
        </div>

        <div className={styles.decoration}>
          <h2>Great Books Await</h2>
          <p>Access exclusive collections and personalized recommendations.</p>
          <Link href="/books">Browse Books</Link>
        </div>
      </section>
    </>
  );
}
