# PageTurner - Premium European-Style eCommerce Bookstore

A sophisticated, production-ready eCommerce website for selling books with minimalist European design principles, built with Next.js, React, and modern web standards.

## 🎯 Design Philosophy

This project embodies **Scandinavian/European design** principles:

- **Minimalist Aesthetic**: Clean layouts with generous whitespace
- **Typography-First**: Emphasis on readable, elegant typography
- **Muted Palette**: Sophisticated colors (#2c2c2c primary, #c9a876 accent)
- **Subtle Interactions**: Smooth transitions without flashy animations
- **Performance Focused**: Optimized for speed and accessibility
- **Accessibility First**: WCAG compliant, semantic HTML, ARIA attributes

## 📁 Project Structure

```
premium-bookstore/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── common/       # Header, Footer, Layout
│   │   ├── product/      # ProductCard, ProductFilters
│   │   └── auth/         # LoginForm, SignupForm
│   ├── pages/            # Next.js pages & routing
│   │   ├── _app.jsx      # App wrapper with providers
│   │   ├── _document.jsx # Document wrapper
│   │   ├── index.jsx     # Home page
│   │   ├── auth/         # Authentication pages
│   │   ├── books/        # Product pages
│   │   └── cart/         # Shopping cart
│   ├── styles/           # Global & component styles
│   │   ├── globals.css   # Global styles & CSS variables
│   │   └── components.css # Reusable component classes
│   ├── utils/            # Utility functions & hooks
│   │   ├── cartContext.js   # Cart state management
│   │   └── formatting.js    # Formatting utilities
│   └── data/             # Mock data & sample books
├── package.json
├── next.config.js
└── jsconfig.json
```

## 🚀 Key Features

### Pages
- **Home**: Hero section, featured books, categories, newsletter signup
- **Books Listing**: Advanced filtering, search, sorting, responsive grid
- **Product Detail**: Full product information, reviews, related products
- **Shopping Cart**: Item management, order summary, checkout flow
- **Authentication**: Login & signup with form validation

### Components
- **Header**: Sticky navigation, search, cart icon with badge
- **Footer**: Multiple columns, newsletter, social links
- **ProductCard**: Responsive product display with ratings & pricing
- **ProductFilters**: Category, price range, sort options
- **LoginForm**: Email/password auth with validation

### Features
- **Cart Management**: useContext for state, add/remove/update items
- **Search & Filter**: Real-time filtering and search across books
- **Responsive Design**: Mobile-first, supports all device sizes
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: CSS modules, static generation with ISR
- **Modern CSS**: Variables, Flexbox, Grid, smooth transitions

## 🛠 Technology Stack

- **Framework**: Next.js 14+ (React 18+)
- **Styling**: CSS Modules + Global CSS with CSS Variables
- **State Management**: React Context API (Cart)
- **Data**: Mock JSON data (easily replaceable with API)
- **Build Tools**: Webpack (Next.js), SWC minification
- **Package Manager**: npm or yarn

## 📦 Installation

```bash
# Navigate to project
cd premium-bookstore

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

## 🎨 Styling Architecture

### CSS Variables
All colors, spacing, and typography are defined in `globals.css`:

```css
:root {
  --color-primary: #2c2c2c;
  --color-accent: #c9a876;
  --space-lg: 1.5rem;
  --font-size-xl: 1.5rem;
  /* ... */
}
```

### Component Styling
Each component has its own CSS Module:
- `Header.jsx` + `Header.module.css`
- `ProductCard.jsx` + `ProductCard.module.css`
- Clean separation of concerns

### Responsive Design
Mobile-first approach with breakpoints:
- `768px`: Tablet
- `480px`: Mobile
- All utilities include responsive variants

## 🔧 Usage Examples

### Using the Cart
```jsx
import { useCart } from '@/utils/cartContext';

export default function Component() {
  const { items, addItem, removeItem, total } = useCart();
  
  return (
    // Component JSX
  );
}
```

### Formatting Utilities
```jsx
import { formatPrice, truncateText } from '@/utils/formatting';

formatPrice(19.99); // "$19.99"
truncateText("Long text...", 50); // "Long text..."
```

### Getting Books Data
```jsx
import { 
  getBookById, 
  searchBooks, 
  getBooksByCategory 
} from '@/data/books';

const book = getBookById('book-001');
const results = searchBooks('query');
const fiction = getBooksByCategory('Fiction');
```

## 🚢 Production Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deployment Checklist
- [ ] Set environment variables
- [ ] Configure database for real data
- [ ] Implement authentication API
- [ ] Set up payment processing (Stripe/PayPal)
- [ ] Configure email notifications
- [ ] Add error tracking (Sentry)
- [ ] Set up CDN for images
- [ ] Performance optimization (compression, caching)
- [ ] Security headers & CORS
- [ ] Analytics integration

## 🔐 Security Considerations

- Input validation on all forms
- XSS protection (Next.js built-in)
- CSRF tokens for state-changing operations
- Secure password hashing (implement in backend)
- HTTPS only in production
- Rate limiting for API endpoints
- Secure session management

## ♿ Accessibility

All components include:
- Semantic HTML (`<button>`, `<nav>`, `<article>`, etc.)
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meeting WCAG AA standards
- Screen reader friendly structure
- Focus visible states on all interactive elements

## 📱 Responsive Breakpoints

- **Desktop**: 1280px max container width
- **Tablet**: 768px - optimized grid layout
- **Mobile**: 480px - single column, touch-friendly buttons

## 🎯 Performance Optimizations

- Static generation with ISR for product pages
- CSS-in-JS (CSS Modules) for zero runtime overhead
- Image optimization ready (Next.js Image component)
- Lazy loading of components
- Minimized JavaScript bundle
- Code splitting per route

## 📚 Code Style & Comments

- Extensive JSDoc comments for components
- Clear variable naming
- Modular, reusable components
- Single responsibility principle
- DRY (Don't Repeat Yourself)
- Consistent formatting and structure

## 🔄 State Management

### Cart State
```javascript
{
  items: [
    { id, title, price, image, quantity },
    // ...
  ],
  total: number,
  itemCount: number
}
```

Actions: `ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QUANTITY`, `CLEAR_CART`

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication with JWT
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Payment processing (Stripe)
- [ ] Email notifications
- [ ] User reviews & ratings
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Advanced analytics
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Multi-language support

## 📄 License

This project is provided as-is for educational and commercial use.

## 📧 Support

For questions or issues, refer to the component comments and documentation throughout the codebase.

---

**Built with ❤️ using Next.js, React, and modern web standards**
