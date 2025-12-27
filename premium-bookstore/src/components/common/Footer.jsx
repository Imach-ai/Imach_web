/**
 * Footer Component
 * Comprehensive footer with links, information, and newsletter
 * 
 * Features:
 * - Multiple column layout
 * - Newsletter subscription
 * - Legal links
 * - Social links
 * - Accessibility features
 */

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.column}>
          <img 
            src="/logo.png"
            alt="Bokly Logo"
            className={styles.logoImg}
          />
          <p className={styles.description}>
            Discover extraordinary books and support independent literature.
            Premium curation, minimum friction.
          </p>
        </div>

        {/* Shop Links */}
        <div className={styles.column}>
          <h4 className={styles.subheading}>Shop</h4>
          <ul className={styles.linkList}>
            <li><Link href="/books">All Books</Link></li>
            <li><Link href="/books?category=Fiction">Fiction</Link></li>
            <li><Link href="/books?category=Non-Fiction">Non-Fiction</Link></li>
            <li><Link href="/books?category=Biography">Biography</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className={styles.column}>
          <h4 className={styles.subheading}>Support</h4>
          <ul className={styles.linkList}>
            <li><Link href="/help-faqs">Help & FAQs</Link></li>
            <li><Link href="/shipping">Shipping Info</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/track-order">Track Order</Link></li>
          </ul>
        </div>

        {/* About */}
        <div className={styles.column}>
          <h4 className={styles.subheading}>About</h4>
          <ul className={styles.linkList}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/press">Press</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className={styles.newsletter}>
        <h4 className={styles.newsletterHeading}>Subscribe for Updates</h4>
        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            aria-label="Newsletter subscription"
            className={styles.newsletterInput}
          />
          <button type="submit" className={styles.newsletterBtn}>
            Subscribe
          </button>
        </form>
        <p className={styles.newsletterText}>
          Get curated book recommendations and exclusive offers delivered to your inbox.
        </p>
      </div>

      {/* Legal */}
      <div className={styles.legal}>
        <p className={styles.copyright}>
          &copy; {currentYear} Bokly. All rights reserved.
        </p>
        <nav className={styles.legalLinks}>
          <Link href="/privacy">Privacy</Link>
          <span className={styles.separator}>·</span>
          <Link href="/terms">Terms</Link>
          <span className={styles.separator}>·</span>
          <Link href="/cookies">Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
