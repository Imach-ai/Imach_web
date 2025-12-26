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
import ProductCard from '@/components/product/ProductCard';
import { getFeaturedBooks, getCategories } from '@/data/books';
import styles from './home.module.css';

export default function Home() {
  const featuredBooks = getFeaturedBooks();
  const categories = getCategories();

  return (
    <>
      <Head>
        <title>PageTurner - Premium Bookstore</title>
        <meta name="description" content="Discover extraordinary books with premium curation and minimal friction." />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Discover Your Next<br />Great Read
          </h1>
          <p className={styles.heroSubtitle}>
            Curated book collections by literary experts. Quality over quantity.
          </p>
          <Link href="/books" className={styles.heroBtn}>
            Explore Books
          </Link>
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
              <Link 
                key={category}
                href={`/books?category=${category}`}
                className={styles.categoryCard}
              >
                <span className={styles.categoryIcon}>📚</span>
                <span className={styles.categoryName}>{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>About PageTurner</h2>
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
