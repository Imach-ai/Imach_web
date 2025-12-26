/**
 * Books Listing Page (books/index.jsx)
 * Advanced product listing with filtering and search
 * 
 * Features:
 * - Product grid with cards
 * - Advanced filtering sidebar
 * - Search functionality
 * - Sort options
 * - Responsive layout
 */

import { useState, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductCard from '@/components/product/ProductCard';
import ProductFilters from '@/components/product/ProductFilters';
import { 
  books,
  getCategories, 
  searchBooks, 
  getBooksByCategory,
  sortBooks 
} from '@/data/books';
import styles from './books.module.css';

export default function BooksPage() {
  const router = useRouter();
  const { search = '', category = '' } = router.query;
  
  const [filters, setFilters] = useState({
    category: category || null,
    priceRange: [0, 50],
  });
  const [sortBy, setSortBy] = useState('newest');

  const categories = getCategories();

  // Filter and search books
  const filteredBooks = useMemo(() => {
    let result = search ? searchBooks(search) : books;
    
    if (filters.category) {
      result = getBooksByCategory(filters.category);
    }
    
    // Price filter
    result = result.filter(book => 
      book.price >= filters.priceRange[0] && 
      book.price <= filters.priceRange[1]
    );

    // Sort
    result = sortBooks(result, sortBy);
    
    return result;
  }, [search, filters, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Update URL
    const params = new URLSearchParams();
    if (newFilters.category) params.append('category', newFilters.category);
    if (search) params.append('search', search);
    const queryString = params.toString();
    router.push(`/books${queryString ? '?' + queryString : ''}`, undefined, { shallow: true });
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  return (
    <>
      <Head>
        <title>
          {search ? `Search: ${search}` : 'Books'} | PageTurner
        </title>
        <meta name="description" content="Browse our collection of curated books" />
      </Head>

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {search ? `Search Results for "${search}"` : 'All Books'}
          </h1>
          <p className={styles.subtitle}>
            {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Filters Sidebar */}
            <aside className={styles.sidebar}>
              <ProductFilters
                categories={categories}
                onFilterChange={handleFilterChange}
                onSortChange={handleSortChange}
                activeCategory={filters.category}
                activeSortBy={sortBy}
              />
            </aside>

            {/* Products Grid */}
            <div className={styles.productsContainer}>
              {filteredBooks.length > 0 ? (
                <div className={styles.productsGrid}>
                  {filteredBooks.map(book => (
                    <ProductCard key={book.id} book={book} />
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <h2>No books found</h2>
                  <p>Try adjusting your filters or search terms</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
