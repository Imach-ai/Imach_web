/**
 * Checkout Page (cart/checkout.jsx)
 * Secure checkout with integrated login/registration
 * 
 * Features:
 * - Login/Registration form
 * - Shipping information
 * - Payment method selection
 * - Order summary
 * - Premium secure checkout experience
 */

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/utils/cartContext';
import { formatPrice } from '@/utils/formatting';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [shippingData, setShippingData] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = total;
  const shipping = subtotal > 50 ? 0 : 12.99;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + shipping + tax;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Validate and process login
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Validate and process registration
    if (
      registerData.email &&
      registerData.password &&
      registerData.password === registerData.confirmPassword
    ) {
      setIsLoggedIn(true);
    }
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData(prev => ({ ...prev, [name]: value }));
  };

  if (items.length === 0) {
    return (
      <>
        <Head>
          <title>Checkout | Bokly</title>
        </Head>
        <div className={styles.emptyCheckout}>
          <div className={styles.container}>
            <h1>Your Cart is Empty</h1>
            <p>Add some books before proceeding to checkout.</p>
            <Link href="/books" className={styles.returnLink}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Secure Checkout | Bokly</title>
        <meta name="description" content="Complete your purchase securely" />
      </Head>

      <div className={styles.checkoutContainer}>
        <div className={styles.container}>
          {/* Main Grid */}
          <div className={styles.grid}>
            {/* Left Column - Forms */}
            <div className={styles.formSection}>
              {/* Authentication Section */}
              {!isLoggedIn ? (
                <div className={styles.authSection}>
                  <h2 className={styles.sectionTitle}>Account</h2>
                  
                  {/* Auth Mode Tabs */}
                  <div className={styles.authTabs}>
                    <button
                      className={`${styles.authTab} ${authMode === 'login' ? styles.active : ''}`}
                      onClick={() => setAuthMode('login')}
                    >
                      Sign In
                    </button>
                    <button
                      className={`${styles.authTab} ${authMode === 'register' ? styles.active : ''}`}
                      onClick={() => setAuthMode('register')}
                    >
                      Create Account
                    </button>
                  </div>

                  {/* Login Form */}
                  {authMode === 'login' && (
                    <form onSubmit={handleLoginSubmit} className={styles.form}>
                      <div className={styles.formGroup}>
                        <label htmlFor="login-email">Email Address</label>
                        <input
                          id="login-email"
                          type="email"
                          placeholder="you@example.com"
                          value={loginData.email}
                          onChange={(e) =>
                            setLoginData({ ...loginData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="login-password">Password</label>
                        <input
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          value={loginData.password}
                          onChange={(e) =>
                            setLoginData({ ...loginData, password: e.target.value })
                          }
                          required
                        />
                      </div>
                      <button type="submit" className={styles.submitBtn}>
                        Sign In & Continue
                      </button>
                      <p className={styles.formHint}>
                        <Link href="/password-reset">Forgot password?</Link>
                      </p>
                    </form>
                  )}

                  {/* Register Form */}
                  {authMode === 'register' && (
                    <form onSubmit={handleRegisterSubmit} className={styles.form}>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="register-first">First Name</label>
                          <input
                            id="register-first"
                            type="text"
                            placeholder="John"
                            value={registerData.firstName}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                firstName: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="register-last">Last Name</label>
                          <input
                            id="register-last"
                            type="text"
                            placeholder="Doe"
                            value={registerData.lastName}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                lastName: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="register-email">Email Address</label>
                        <input
                          id="register-email"
                          type="email"
                          placeholder="you@example.com"
                          value={registerData.email}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="register-password">Password</label>
                        <input
                          id="register-password"
                          type="password"
                          placeholder="••••••••"
                          value={registerData.password}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              password: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="register-confirm">Confirm Password</label>
                        <input
                          id="register-confirm"
                          type="password"
                          placeholder="••••••••"
                          value={registerData.confirmPassword}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              confirmPassword: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <button type="submit" className={styles.submitBtn}>
                        Create Account & Continue
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                <div className={styles.authSuccess}>
                  <div className={styles.successIcon}>✓</div>
                  <p>Welcome! Account verified.</p>
                </div>
              )}

              {/* Shipping Section */}
              {isLoggedIn && (
                <div className={styles.shippingSection}>
                  <h2 className={styles.sectionTitle}>Shipping Address</h2>
                  <form className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="address">Street Address</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        placeholder="123 Main Street"
                        value={shippingData.address}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="city">City</label>
                        <input
                          id="city"
                          type="text"
                          name="city"
                          placeholder="New York"
                          value={shippingData.city}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="state">State</label>
                        <input
                          id="state"
                          type="text"
                          name="state"
                          placeholder="NY"
                          value={shippingData.state}
                          onChange={handleShippingChange}
                          maxLength="2"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="zipCode">ZIP Code</label>
                        <input
                          id="zipCode"
                          type="text"
                          name="zipCode"
                          placeholder="10001"
                          value={shippingData.zipCode}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Payment Section */}
              {isLoggedIn && (
                <div className={styles.paymentSection}>
                  <h2 className={styles.sectionTitle}>Payment Method</h2>
                  <div className={styles.paymentOptions}>
                    <label className={styles.paymentOption}>
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className={styles.paymentLabel}>
                        <span className={styles.paymentIcon}>💳</span>
                        Credit / Debit Card
                      </span>
                    </label>
                    <label className={styles.paymentOption}>
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className={styles.paymentLabel}>
                        <span className={styles.paymentIcon}>🅿️</span>
                        PayPal
                      </span>
                    </label>
                    <label className={styles.paymentOption}>
                      <input
                        type="radio"
                        name="payment"
                        value="apple"
                        checked={paymentMethod === 'apple'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className={styles.paymentLabel}>
                        <span className={styles.paymentIcon}>🍎</span>
                        Apple Pay
                      </span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className={styles.summarySection}>
              <div className={styles.summaryCard}>
                <h2 className={styles.summaryTitle}>Order Summary</h2>

                {/* Items List */}
                <div className={styles.itemsList}>
                  {items.map((item) => (
                    <div key={item.id} className={styles.summaryItem}>
                      <div className={styles.itemInfo}>
                        <p className={styles.itemTitle}>{item.title}</p>
                        <p className={styles.itemQty}>Qty: {item.quantity}</p>
                      </div>
                      <p className={styles.itemPrice}>
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className={styles.totalsSection}>
                  <div className={styles.totalRow}>
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className={styles.totalRow}>
                    <span>Shipping</span>
                    <span className={shipping === 0 ? styles.free : ''}>
                      {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                    </span>
                  </div>
                  <div className={styles.totalRow}>
                    <span>Tax</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <div className={`${styles.totalRow} ${styles.grand}`}>
                    <span>Total</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className={styles.securityBadge}>
                  <span className={styles.badgeIcon}>🔒</span>
                  <p>Secure checkout powered by Stripe</p>
                </div>

                {/* Checkout Button */}
                {isLoggedIn ? (
                  <button className={styles.checkoutBtn}>
                    Complete Purchase
                  </button>
                ) : (
                  <p className={styles.loginPrompt}>
                    Sign in or create an account to proceed
                  </p>
                )}

                {/* Continue Shopping */}
                <Link href="/books" className={styles.continueLink}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
