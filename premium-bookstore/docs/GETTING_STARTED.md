# GETTING_STARTED.md

## Quick Start Guide

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

### Installation

```bash
# Navigate to project
cd premium-bookstore

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### Project Structure at a Glance

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Header, Footer
│   ├── product/        # Product card, filters
│   └── auth/           # Login, signup forms
├── pages/              # Next.js pages (routes)
│   ├── index.jsx       # Home
│   ├── books/          # Book listing & detail
│   ├── cart/           # Shopping cart
│   └── auth/           # Login & signup
├── styles/             # Global CSS & design system
├── utils/              # Helpers & cart state
└── data/               # Mock books data
```

## Key Pages to Explore

### 1. Home Page (`/`)
- Featured books grid
- Category browse
- Newsletter signup
- Hero section

### 2. Books Listing (`/books`)
- Advanced filtering (category, price)
- Search functionality
- Sorting options
- Responsive grid

### 3. Product Detail (`/books/:id`)
- Full product information
- Customer reviews
- Related products
- Add to cart

### 4. Shopping Cart (`/cart`)
- Item management
- Quantity controls
- Order summary
- Checkout flow

### 5. Authentication
- Login page (`/auth/login`)
- Signup page (`/auth/signup`)
- Form validation

## Core Features to Try

### Add Items to Cart
1. Navigate to `/books`
2. Click "Add to Cart" on any product
3. See cart badge update in header
4. Go to `/cart` to manage items

### Filter & Search
1. Go to `/books`
2. Use sidebar filters (category, price)
3. Use search bar in header
4. Try sorting options

### Responsive Design
1. Open DevTools (F12)
2. Toggle device toolbar
3. Test on mobile, tablet, desktop
4. All layouts adapt smoothly

## Customization Guide

### Change Colors
Edit `/src/styles/globals.css`:
```css
:root {
  --color-primary: #2c2c2c;      /* Dark Gray */
  --color-accent: #c9a876;        /* Gold */
  --color-success: #388e3c;       /* Green */
  /* ... */
}
```

### Add New Books
Edit `/src/data/books.js`:
```javascript
{
  id: 'book-new',
  title: 'New Book Title',
  author: 'Author Name',
  price: 19.99,
  category: 'Fiction',
  rating: 4.5,
  description: 'Book description...',
  // ... other fields
}
```

### Modify Typography
Edit `/src/styles/globals.css`:
```css
:root {
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-weight-light: 300;
  /* ... */
}
```

### Add Navigation Links
Edit `/src/components/common/Header.jsx`:
```jsx
<nav className={styles.nav}>
  <Link href="/books">Books</Link>
  <Link href="/new-page">New Page</Link>
</nav>
```

## Development Workflow

### Creating a New Page
1. Create file in `/src/pages/newpage.jsx`
2. Write React component
3. Add styling if needed
4. Access at `http://localhost:3000/newpage`

### Creating a New Component
1. Create file in `/src/components/category/NewComponent.jsx`
2. Write component with props
3. Create `.module.css` file for styling
4. Import and use in pages

### Managing State
Use the cart hook anywhere:
```jsx
import { useCart } from '@/utils/cartContext';

export default function Component() {
  const { items, addItem, total } = useCart();
  // Use cart state
}
```

## Common Tasks

### Run Production Build
```bash
npm run build
npm start
```

### Clear Cache & Rebuild
```bash
rm -rf .next
npm run dev
```

### Check for Errors
```bash
npm run lint
```

## Design System Reference

### Colors
- **Primary**: #2c2c2c (Dark gray for text, buttons)
- **Secondary**: #6b6b6b (Medium gray for secondary text)
- **Accent**: #c9a876 (Gold for highlights)
- **Light**: #f5f5f5 (Light gray backgrounds)
- **White**: #ffffff (Pure white for cards)

### Spacing Scale
- **xs**: 4px, **sm**: 8px, **md**: 16px
- **lg**: 24px, **xl**: 32px, **2xl**: 48px, **3xl**: 64px

### Typography Scale
- **xs**: 12px, **sm**: 14px, **base**: 16px
- **lg**: 18px, **xl**: 24px, **2xl**: 32px, **3xl**: 40px

## Responsive Breakpoints

- **Desktop**: 1280px container (default)
- **Tablet**: 768px and below
- **Mobile**: 480px and below

All components scale beautifully across devices!

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ High color contrast (WCAG AA)
- ✅ Screen reader friendly

Test with: Tab key for navigation, screen reader (NVDA, JAWS)

## Performance Tips

- 📦 Code splitting per page
- 🚀 Static generation with ISR
- 🎨 CSS Modules (no runtime overhead)
- 📱 Mobile-first responsive design
- ⚡ Optimized for Core Web Vitals

## Troubleshooting

### Port 3000 in Use?
```bash
lsof -i :3000
kill -9 <PID>
npm run dev
```

### Styles Not Updating?
```bash
# Clear cache
rm -rf .next
npm run dev
```

### Dependencies Not Found?
```bash
# Reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Explore the UI and interactions
2. ✅ Customize colors and typography
3. ✅ Add your own book data
4. ✅ Integrate with a backend API
5. ✅ Set up payment processing
6. ✅ Deploy to production

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Web Accessibility**: https://www.w3.org/WAI/

## Architecture Documentation

For deeper understanding of project structure and design patterns, see **ARCHITECTURE.md**

## Questions?

All code is thoroughly commented. Check:
- Component JSDoc comments
- Inline code comments
- README.md for overview
- ARCHITECTURE.md for detailed guide

---

**Happy coding! 🚀**
