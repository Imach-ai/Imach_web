/**
 * Cart Page (cart/index.jsx)
 * Shopping cart with item management and checkout
 * 
 * Features:
 * - Cart items list
 * - Quantity controls
 * - Order summary
 * - Proceed to checkout
 * - Continue shopping
 */

import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '@/utils/cartContext';
import { formatPrice } from '@/utils/formatting';
import styles from './cart.module.css';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();

  const subtotal = total;
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + shipping + tax;

  return (
    <>
      <Head>
        <title>Shopping Cart | Bokly</title>
        <meta name="description" content="Review and checkout your shopping cart" />
      </Head>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.title}>Shopping Cart</h1>
        </div>
      </div>

      {/* Cart Content */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          {items.length > 0 ? (
            <div className={styles.grid}>
              {/* Cart Items */}
              <div className={styles.cartItems}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <tr key={item.id}>
                        <td className={styles.productCell}>
                          <span className={styles.icon}>{item.image}</span>
                          <span className={styles.productName}>{item.title}</span>
                        </td>
                        <td className={styles.priceCell}>
                          {formatPrice(item.price)}
                        </td>
                        <td className={styles.quantityCell}>
                          <div className={styles.quantityControl}>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              min="1"
                            />
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className={styles.totalCell}>
                          {formatPrice(item.price * item.quantity)}
                        </td>
                        <td className={styles.actionCell}>
                          <button
                            onClick={() => removeItem(item.id)}
                            className={styles.removeBtn}
                            aria-label={`Remove ${item.title}`}
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className={styles.continueShoppingBtn}>
                  <Link href="/books">Continue Shopping</Link>
                </div>
              </div>

              {/* Order Summary */}
              <aside className={styles.summary}>
                <h2 className={styles.summaryTitle}>Order Summary</h2>
                
                <div className={styles.summaryLines}>
                  <div className={styles.summaryLine}>
                    <span>Subtotal ({items.length} items)</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  
                  <div className={styles.summaryLine}>
                    <span>Shipping</span>
                    <span className={shipping === 0 ? styles.free : ''}>
                      {shipping === 0 ? 'Free' : formatPrice(shipping)}
                    </span>
                  </div>
                  
                  <div className={styles.summaryLine}>
                    <span>Tax</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                </div>

                <div className={styles.summaryDivider}></div>

                <div className={styles.grandTotal}>
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>

                {subtotal <= 50 && (
                  <div className={styles.shippingNote}>
                    <p>Free shipping on orders over $50!</p>
                  </div>
                )}

                <Link href="/cart/checkout" className={styles.checkoutBtn}>
                  Proceed to Checkout
                </Link>

                <p className={styles.guaranteeText}>
                  ✓ Secure checkout · ✓ 30-day guarantee
                </p>
              </aside>
            </div>
          ) : (
            <div className={styles.emptyCart}>
              <h2>Your cart is empty</h2>
              <p>Discover our curated collection of books and add some to your cart.</p>
              <Link href="/books" className={styles.emptyCartBtn}>
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
