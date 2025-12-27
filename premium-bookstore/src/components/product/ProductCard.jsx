/**
 * ProductCard Component
 * Reusable card for displaying book information
 * 
 * Features:
 * - Product image/icon
 * - Title and author
 * - Rating display
 * - Price display with discount
 * - Add to cart button
 * - Hover effects
 * - Accessibility attributes
 */

import Link from 'next/link';
import { useCart } from '@/utils/cartContext';
import { formatPrice, truncateText } from '@/utils/formatting';
import styles from './ProductCard.module.css';

export default function ProductCard({ book }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
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
    <Link href={`/books/${book.id}`}>
      <article className={styles.card}>
        {/* Image/Icon Area */}
        <div className={styles.imageContainer}>
          {book.image && book.image.startsWith('/') ? (
            <img 
              src={book.image} 
              alt={`Cover of ${book.title}`}
              className={styles.bookImage}
            />
          ) : (
            <span className={styles.bookIcon}>{book.image}</span>
          )}
          
          {discount && (
            <span className={styles.badge} aria-label={`${discount}% discount`}>
              -{discount}%
            </span>
          )}
        </div>

        {/* Content Area */}
        <div className={styles.content}>
          {/* Title and Author */}
          <div className={styles.info}>
            <h3 className={styles.title}>{book.title}</h3>
            <p className={styles.author}>{book.author}</p>
          </div>

          {/* Description */}
          <p className={styles.description}>
            {truncateText(book.description, 85)}
          </p>

          {/* Rating */}
          <div className={styles.rating} aria-label={`Rating: ${book.rating} out of 5 stars`}>
            <span className={styles.stars}>
              {'★'.repeat(Math.floor(book.rating))}
              {book.rating % 1 !== 0 && '½'}
              {'☆'.repeat(5 - Math.ceil(book.rating))}
            </span>
            <span className={styles.reviews}>
              ({book.reviews.toLocaleString()})
            </span>
          </div>

          {/* Price Section */}
          <div className={styles.priceSection}>
            <div className={styles.priceWrapper}>
              <span className={styles.price}>
                {formatPrice(book.price)}
              </span>
              {book.originalPrice && (
                <span className={styles.originalPrice}>
                  {formatPrice(book.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            className={styles.addToCart}
            onClick={handleAddToCart}
            aria-label={`Add ${book.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </article>
    </Link>
  );
}
