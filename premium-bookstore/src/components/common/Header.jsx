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
import { useState } from 'react';
import { useCart } from '@/utils/cartContext';
import styles from './Header.module.css';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to search results page
    if (searchQuery.trim()) {
      window.location.href = `/books?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>📚</span>
          <span className={styles.logoText}>PageTurner</span>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/books" className={styles.navLink}>Books</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          {/* Search */}
          <div className={styles.searchContainer}>
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className={styles.searchInput}
                  aria-label="Search books"
                />
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className={styles.searchBtn}
                aria-label="Open search"
              >
                🔍
              </button>
            )}
          </div>

          {/* Login */}
          <Link href="/auth/login" className={styles.authLink}>
            Login
          </Link>

          {/* Cart */}
          <Link href="/cart" className={styles.cartButton}>
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
        </div>
      </div>
    </header>
  );
}
