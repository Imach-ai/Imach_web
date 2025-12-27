/**
 * Header Component
 * Navigation and branding - sticky, minimal design
 * 
 * Features:
 * - Logo/branding
 * - Main navigation with hover states
 * - Search functionality
 * - Cart icon with item count
 * - Responsive mobile menu
 */

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '@/utils/cartContext';
import styles from './Header.module.css';

export default function Header() {
  const { itemCount } = useCart();
  const router = useRouter();
  const [query, setQuery] = useState('');

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img 
            src="/logo.png"
            alt="Bokly Logo"
            className={styles.logoImg}
          />
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/books" className={styles.navLink}>Books</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          {/* Cart */}
          <Link href="/cart/checkout" className={styles.cartButton}>
            <span className={styles.cartIcon}>🛒</span>
            {itemCount > 0 && (
              <span 
                className={styles.cartBadge}
                aria-label={`${itemCount} items in cart`}
              >
                {itemCount}
              </span>
            )}
          </Link>

          {/* Header search form (functional) */}
          <div className={styles.searchContainer}>
            <form
              className={styles.newsletterForm}
              onSubmit={(e) => {
                e.preventDefault();
                const q = query.trim();
                if (q.length === 0) {
                  router.push('/books');
                } else {
                  const params = new URLSearchParams();
                  params.set('search', q);
                  router.push(`/books?${params.toString()}`);
                }
              }}
            >
              <input
                type="text"
                placeholder="Search books..."
                required
                className={styles.newsletterInput}
                aria-label="Search books"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className={styles.newsletterSubmit} aria-label="Search">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
