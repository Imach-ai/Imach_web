/**
 * LoginForm Component
 * Minimalist authentication UI
 * 
 * Features:
 * - Email/password inputs with validation
 * - Remember me checkbox
 * - Sign up link
 * - Accessibility attributes
 */

import { useState } from 'react';
import Link from 'next/link';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (formData.email && formData.password) {
        // In a real app, validate credentials here
        console.log('Login attempt:', formData);
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {error && (
        <div className={styles.error} role="alert">
          {error}
        </div>
      )}

      <div className={styles.group}>
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          className={styles.input}
          placeholder="you@example.com"
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          aria-required="true"
          className={styles.input}
          placeholder="••••••••"
        />
      </div>

      <div className={styles.options}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <span>Remember me</span>
        </label>
        <Link href="#" className={styles.forgotLink}>
          Forgot password?
        </Link>
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className={styles.submitBtn}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>

      <p className={styles.signupText}>
        Don't have an account?{' '}
        <Link href="/auth/signup">Create one</Link>
      </p>
    </form>
  );
}
