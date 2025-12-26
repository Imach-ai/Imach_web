/**
 * Home Page (_app.jsx)
 * Next.js App wrapper with cart provider
 */

import { CartProvider } from '@/utils/cartContext';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import '@/styles/globals.css';
import '@/styles/components.css';

/**
 * MyApp Component
 * Wraps all pages with necessary providers and layout
 */
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default MyApp;
