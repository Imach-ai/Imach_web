/**
 * ProductFilters Component
 * Advanced filtering and sorting interface
 * 
 * Features:
 * - Category filtering
 * - Price range filtering
 * - Sort options
 * - Active filter indicators
 * - Reset functionality
 * - Accessibility features
 */

import { useState } from 'react';
import styles from './ProductFilters.module.css';

export default function ProductFilters({ 
  categories = [],
  onFilterChange,
  onSortChange,
  activeCategory,
  activeSortBy
}) {
  const [priceRange, setPriceRange] = useState([0, 50]);

  const handleCategoryChange = (category) => {
    onFilterChange({
      category: category === activeCategory ? null : category,
      priceRange,
    });
  };

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    onFilterChange({
      category: activeCategory,
      priceRange: newRange,
    });
  };

  const handleSortChange = (sortBy) => {
    onSortChange(sortBy);
  };

  const handleReset = () => {
    setPriceRange([0, 50]);
    onFilterChange({ category: null, priceRange: [0, 50] });
    onSortChange('newest');
  };

  return (
    <aside className={styles.filters}>
      <div className={styles.header}>
        <h3 className={styles.title}>Filters</h3>
        {(activeCategory || priceRange[0] > 0 || priceRange[1] < 50) && (
          <button 
            className={styles.reset}
            onClick={handleReset}
            aria-label="Reset all filters"
          >
            Reset
          </button>
        )}
      </div>

      <div className={styles.content}>
        {/* Categories */}
        {categories.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Category</h4>
            <ul className={styles.categoryList}>
              {categories.map(category => (
                <li key={category}>
                  <button
                    className={`${styles.categoryBtn} ${
                      activeCategory === category ? styles.active : ''
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price Range */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Price Range</h4>
          <div className={styles.priceInputs}>
            <input
              type="number"
              min="0"
              max="50"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange([parseFloat(e.target.value), priceRange[1]])}
              className={styles.priceInput}
              aria-label="Minimum price"
            />
            <span className={styles.priceSeparator}>−</span>
            <input
              type="number"
              min="0"
              max="50"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange([priceRange[0], parseFloat(e.target.value)])}
              className={styles.priceInput}
              aria-label="Maximum price"
            />
          </div>
        </div>

        {/* Sort */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Sort By</h4>
          <select
            className={styles.sortSelect}
            value={activeSortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            aria-label="Sort products"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
