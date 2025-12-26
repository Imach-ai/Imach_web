/**
 * Mock Book Data
 * Curated collection of books for demonstration
 * 
 * Structure:
 * - id: Unique identifier
 * - title: Book title
 * - author: Author name
 * - price: Current price
 * - originalPrice: Original price (for discounts)
 * - category: Book category for filtering
 * - rating: User rating (0-5)
 * - reviews: Number of reviews
 * - image: Placeholder image (using emojis for demo)
 * - description: Short description
 * - featured: Boolean for featuring on home page
 * - inStock: Availability
 */

export const books = [
  {
    id: 'book-001',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 16.99,
    originalPrice: 18.99,
    category: 'Fiction',
    rating: 4.5,
    reviews: 2847,
    image: '📖',
    description: 'A dazzling novel about all the choices that go into a life well lived.',
    featured: true,
    inStock: true,
  },
  {
    id: 'book-002',
    title: 'Educated',
    author: 'Tara Westover',
    price: 18.99,
    originalPrice: null,
    category: 'Biography',
    rating: 4.7,
    reviews: 5632,
    image: '📚',
    description: 'A memoir about a young woman who leaves her survivalist family to pursue education.',
    featured: true,
    inStock: true,
  },
  {
    id: 'book-003',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 17.99,
    originalPrice: 19.99,
    category: 'Self-Help',
    rating: 4.8,
    reviews: 8923,
    image: '📕',
    description: 'Transform your life through small, consistent changes and habit building.',
    featured: true,
    inStock: true,
  },
  {
    id: 'book-004',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 15.99,
    originalPrice: null,
    category: 'Thriller',
    rating: 4.3,
    reviews: 3421,
    image: '📗',
    description: 'A shocking psychological thriller about a woman who refuses to speak.',
    featured: true,
    inStock: true,
  },
  {
    id: 'book-005',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 19.99,
    originalPrice: null,
    category: 'Non-Fiction',
    rating: 4.6,
    reviews: 6541,
    image: '📘',
    description: 'A fascinating journey through the history of humankind from the Stone Age to modern times.',
    featured: false,
    inStock: true,
  },
  {
    id: 'book-006',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.99,
    originalPrice: null,
    category: 'Classic',
    rating: 4.4,
    reviews: 4782,
    image: '📙',
    description: 'A classic American novel exploring wealth, love, and the American Dream.',
    featured: true,
    inStock: true,
  },
  {
    id: 'book-007',
    title: 'Braiding Sweetgrass',
    author: 'Robin Wall Kimmerer',
    price: 18.99,
    originalPrice: null,
    category: 'Nature',
    rating: 4.7,
    reviews: 3892,
    image: '📓',
    description: 'Reflections on the gifts of Indigenous wisdom and plant knowledge.',
    featured: false,
    inStock: true,
  },
  {
    id: 'book-008',
    title: 'Piranesi',
    author: 'Susanna Clarke',
    price: 17.99,
    originalPrice: 19.99,
    category: 'Fantasy',
    rating: 4.5,
    reviews: 2156,
    image: '📔',
    description: 'A mysterious and enchanting novel set in a house of impossible architecture.',
    featured: false,
    inStock: true,
  },
  {
    id: 'book-009',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    price: 16.99,
    originalPrice: null,
    category: 'Self-Help',
    rating: 4.2,
    reviews: 7821,
    image: '📕',
    description: 'A counterintuitive approach to living a good life.',
    featured: false,
    inStock: true,
  },
  {
    id: 'book-010',
    title: 'Circe',
    author: 'Madeline Miller',
    price: 17.99,
    originalPrice: null,
    category: 'Fantasy',
    rating: 4.6,
    reviews: 4203,
    image: '📚',
    description: 'A retelling of the life of Circe, the enchantress from Greek mythology.',
    featured: true,
    inStock: true,
  },
  {
    id: 'book-011',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    price: 19.99,
    originalPrice: null,
    category: 'Psychology',
    rating: 4.4,
    reviews: 5634,
    image: '📖',
    description: 'Insights into the two systems that drive the way we think.',
    featured: false,
    inStock: true,
  },
  {
    id: 'book-012',
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    price: 17.99,
    originalPrice: null,
    category: 'Fantasy',
    rating: 4.7,
    reviews: 6789,
    image: '📗',
    description: 'A reimagining of the Trojan War through the eyes of Patroclus.',
    featured: false,
    inStock: true,
  },
];

/**
 * Get unique categories from books
 * @returns {string[]} Array of unique categories
 */
export const getCategories = () => {
  const categories = books.map(book => book.category);
  return [...new Set(categories)].sort();
};

/**
 * Get featured books
 * @returns {Object[]} Array of featured books
 */
export const getFeaturedBooks = () => {
  return books.filter(book => book.featured).slice(0, 6);
};

/**
 * Get book by ID
 * @param {string} id - Book ID
 * @returns {Object|null} Book object or null
 */
export const getBookById = (id) => {
  return books.find(book => book.id === id) || null;
};

/**
 * Search books by query
 * @param {string} query - Search query
 * @returns {Object[]} Array of matching books
 */
export const searchBooks = (query) => {
  const lowercaseQuery = query.toLowerCase().trim();
  if (!lowercaseQuery) return books;

  return books.filter(book =>
    book.title.toLowerCase().includes(lowercaseQuery) ||
    book.author.toLowerCase().includes(lowercaseQuery) ||
    book.description.toLowerCase().includes(lowercaseQuery)
  );
};

/**
 * Filter books by category
 * @param {string} category - Category name
 * @returns {Object[]} Array of books in category
 */
export const getBooksByCategory = (category) => {
  if (!category) return books;
  return books.filter(book => book.category === category);
};

/**
 * Sort books
 * @param {Object[]} booksArray - Books to sort
 * @param {string} sortBy - Sort criteria: 'price-asc', 'price-desc', 'rating', 'newest'
 * @returns {Object[]} Sorted books array
 */
export const sortBooks = (booksArray, sortBy = 'newest') => {
  const sorted = [...booksArray];

  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
    default:
      return sorted;
  }
};
