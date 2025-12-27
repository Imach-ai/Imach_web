/**
 * Home Page (index.jsx)
 * Landing page with featured books and editorial sections
 * 
 * Features:
 * - Hero section
 * - Featured books grid
 * - Editorial content sections
 * - Call-to-actions
 */

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { getFeaturedBooks, getCategories } from '@/data/books';
import styles from './home.module.css';

export default function Home() {
  const featuredBooks = getFeaturedBooks();
  const categories = getCategories();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Bokly - Premium Bookstore</title>
        <meta name="description" content="Discover extraordinary books with premium curation and minimal friction." />
      </Head>

      {/* Premium Hero Section with Video Background */}
      <section className={styles.hero}>
        {/* Video Background */}
        <div className={styles.videoBg}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            className={styles.backgroundVideo}
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Crect fill='%23f5f5f5' width='1280' height='720'/%3E%3C/svg%3E"
          >
            <source src="/4866054-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoBgOverlay}></div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Discover Your Next<br />Great Read
            </h1>
            <p className={styles.heroSubtitle}>
              Curated book collections by literary experts. Quality over quantity.
            </p>
            <div className={styles.heroButtonGroup}>
              <Link href="/books" className={styles.heroBtn}>
                Explore Books
              </Link>
              <Link href="#about" className={styles.heroBtnSecondary}>
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Animated decorative elements */}
          <div className={styles.floatingElements}>
            <div className={styles.floatingBook}></div>
            <div className={styles.floatingBook2}></div>
            <div className={styles.floatingBook3}></div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Editor's Picks</h2>
            <p className={styles.sectionDesc}>
              Handpicked collection of exceptional books across genres
            </p>
          </div>

          <div className={styles.productsGrid}>
            {featuredBooks.map(book => (
              <ProductCard key={book.id} book={book} />
            ))}
          </div>

          <div className={styles.ctaContainer}>
            <Link href="/books" className={styles.ctaBtn}>
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Browse by Category</h2>
          <div className={styles.categoriesGrid}>
            {categories.map(category => (
              <div key={category} className={styles.categoryCard}>
                <h3 className={styles.categoryName}>{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>About Bokly</h2>
            <p className={styles.aboutText}>
              We believe in the power of reading to transform lives. Our curated selection 
              features books that provoke thought, inspire action, and provide genuine enjoyment. 
              We partner with independent bookstores and publishers to bring you exceptional literature.
            </p>
            <ul className={styles.aboutPoints}>
              <li>Expertly curated collections</li>
              <li>Fast, reliable shipping</li>
              <li>Transparent pricing</li>
              <li>Support for independent authors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Stay Informed</h2>
            <p className={styles.newsletterDesc}>
              Get weekly book recommendations and exclusive offers directly in your inbox.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className={styles.newsletterInput}
                aria-label="Subscribe to newsletter"
              />
              <button type="submit" className={styles.newsletterSubmit}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
