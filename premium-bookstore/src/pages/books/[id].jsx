/**
 * Product Detail Page (books/[id].jsx)
 * Individual product page with reviews, details, and CTA
 * 
 * Features:
 * - Product image and details
 * - Price and availability
 * - Customer reviews section
 * - Add to cart CTA
 * - Related products
 * - Breadcrumb navigation
 */

import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '@/utils/cartContext';
import { formatPrice, roundRating } from '@/utils/formatting';
import { getBookById, books } from '@/data/books';
import ProductCard from '@/components/product/ProductCard';
import styles from './product-detail.module.css';

export default function ProductDetailPage({ book, relatedBooks }) {
  const { addItem } = useCart();

  if (!book) {
    return (
      <div className={styles.notFound}>
        <h1>Book not found</h1>
        <Link href="/books">Back to Books</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
    });
  };

  const discount = book.originalPrice
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : null;

  return (
    <>
      <Head>
        <title>{book.title} by {book.author} | PageTurner</title>
        <meta name="description" content={book.description} />
      </Head>

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.separator}>/</span>
        <Link href="/books">Books</Link>
        <span className={styles.separator}>/</span>
        <span>{book.title}</span>
      </nav>

      {/* Product Details */}
      <article className={styles.container}>
        <div className={styles.content}>
          {/* Product Image */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <span className={styles.bookIcon}>{book.image}</span>
              {discount && (
                <span className={styles.discountBadge}>-{discount}%</span>
              )}
            </div>
          </div>

          {/* Product Information */}
          <div className={styles.infoSection}>
            {/* Title & Author */}
            <div className={styles.header}>
              <h1 className={styles.title}>{book.title}</h1>
              <p className={styles.author}>by {book.author}</p>
              <span className={styles.category}>{book.category}</span>
            </div>

            {/* Rating */}
            <div className={styles.ratingContainer}>
              <div className={styles.stars}>
                {'★'.repeat(Math.floor(book.rating))}
                {book.rating % 1 !== 0 && '½'}
                {'☆'.repeat(5 - Math.ceil(book.rating))}
              </div>
              <span className={styles.ratingValue}>
                {roundRating(book.rating)}/5
              </span>
              <span className={styles.reviewCount}>
                ({book.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className={styles.priceSection}>
              <div className={styles.price}>
                {formatPrice(book.price)}
              </div>
              {book.originalPrice && (
                <div className={styles.originalPrice}>
                  Originally {formatPrice(book.originalPrice)}
                </div>
              )}
            </div>

            {/* Description */}
            <p className={styles.description}>
              {book.description}
            </p>

            {/* Additional Details */}
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Availability</span>
                <span className={styles.detailValue}>
                  {book.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Category</span>
                <span className={styles.detailValue}>{book.category}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>ISBN</span>
                <span className={styles.detailValue}>978-0-123456-{Math.random().toString().slice(-2)}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Publisher</span>
                <span className={styles.detailValue}>Premium Books Ltd.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={styles.ctaSection}>
              <button 
                className={styles.addToCartBtn}
                onClick={handleAddToCart}
                disabled={!book.inStock}
              >
                Add to Cart
              </button>
              <button className={styles.wishlistBtn} aria-label="Add to wishlist">
                ♡ Wishlist
              </button>
            </div>

            {/* Shipping Info */}
            <div className={styles.shippingInfo}>
              <p>📦 Free shipping on orders over $50</p>
              <p>✓ 30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </article>

      {/* Reviews Section */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Customer Reviews</h2>
          <div className={styles.reviewsContainer}>
            {[1, 2, 3].map(i => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <span className={styles.reviewStars}>★★★★★</span>
                  <span className={styles.reviewAuthor}>Sarah M.</span>
                </div>
                <p className={styles.reviewText}>
                  An absolutely captivating read from start to finish. The author's 
                  writing style is both elegant and engaging.
                </p>
                <time className={styles.reviewDate}>2 weeks ago</time>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Books */}
      {relatedBooks.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>You Might Also Like</h2>
            <div className={styles.relatedGrid}>
              {relatedBooks.slice(0, 4).map(relatedBook => (
                <ProductCard key={relatedBook.id} book={relatedBook} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/**
 * Static Generation with ISR
 * Pre-generate pages for all books, revalidate every hour
 */
export async function getStaticProps({ params }) {
  const book = getBookById(params.id);
  
  if (!book) {
    return { notFound: true };
  }

  // Get related books from same category
  const relatedBooks = books
    .filter(b => b.category === book.category && b.id !== book.id)
    .slice(0, 8);

  return {
    props: { book, relatedBooks },
    revalidate: 3600, // Revalidate every hour
  };
}

/**
 * Static Paths
 * Generate paths for all books
 */
export async function getStaticPaths() {
  const paths = books.map(book => ({
    params: { id: book.id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
