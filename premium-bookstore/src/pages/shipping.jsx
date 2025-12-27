import Head from 'next/head';
import { useState } from 'react';
import styles from './shipping.module.css';

export default function ShippingInfo() {
  const [selectedOption, setSelectedOption] = useState(null);

  const shippingOptions = [
    {
      id: 1,
      name: 'Standard Shipping',
      duration: '5-7 Business Days',
      cost: 'Free on orders over $50',
      description: 'Perfect for planned reading. We carefully package each book to ensure it arrives in perfect condition.',
      icon: '📦'
    },
    {
      id: 2,
      name: 'Express Shipping',
      duration: '2-3 Business Days',
      cost: '$12.99',
      description: 'For when you can\'t wait! Your books will be shipped via priority carrier.',
      icon: '🚀'
    },
    {
      id: 3,
      name: 'Overnight Shipping',
      duration: 'Next Business Day',
      cost: '$24.99',
      description: 'Need it NOW? We\'ll get your order to you by tomorrow morning.',
      icon: '⚡'
    },
    {
      id: 4,
      name: 'International Shipping',
      duration: '10-21 Business Days',
      cost: 'Calculated at checkout',
      description: 'We ship worldwide! International rates vary by location and weight.',
      icon: '🌍'
    }
  ];

  const shippingInfo = [
    {
      title: 'Order Processing',
      content: 'Orders are processed Monday-Friday, 9am-5pm EST. Orders placed after 5pm or on weekends will be processed the next business day.'
    },
    {
      title: 'Package Tracking',
      content: 'Once your order ships, you\'ll receive an email with a tracking number. You can monitor your package\'s journey in real-time.'
    },
    {
      title: 'Delivery Confirmation',
      content: 'All shipments include signature confirmation for orders over $100. Standard orders may require a signature at delivery.'
    },
    {
      title: 'Lost or Damaged Shipments',
      content: 'Rare cases do happen. If your package arrives damaged, contact us within 48 hours with photos. We\'ll send a replacement immediately.'
    }
  ];

  return (
    <>
      <Head>
        <title>Shipping Information - Bokly</title>
        <meta name="description" content="Learn about our shipping options, delivery times, and policies." />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.videoBg}>
            <div className={styles.videoBgOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Shipping Information</h1>
            <p className={styles.subtitle}>
              Fast, reliable delivery to your doorstep
            </p>
          </div>
        </section>

        {/* Shipping Options */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>Shipping Options</h2>
            <p>Choose the perfect delivery speed for your needs</p>
          </div>

          <div className={styles.optionsGrid}>
            {shippingOptions.map((option) => (
              <div
                key={option.id}
                className={`${styles.optionCard} ${selectedOption === option.id ? styles.selected : ''}`}
                onClick={() => setSelectedOption(selectedOption === option.id ? null : option.id)}
              >
                <div className={styles.optionIcon}>{option.icon}</div>
                <h3>{option.name}</h3>
                <p className={styles.duration}>{option.duration}</p>
                <p className={styles.cost}>{option.cost}</p>
                <p className={styles.description}>{option.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shipping Info Grid */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>How It Works</h2>
          </div>

          <div className={styles.infoGrid}>
            {shippingInfo.map((item, index) => (
              <div key={index} className={styles.infoCard}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2>Common Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>Do you ship to PO boxes?</h4>
              <p>We can ship to PO boxes via USPS only. Express and Overnight options are not available for PO box addresses.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>What about international customs?</h4>
              <p>International orders may be subject to customs duties and taxes. These are the customer's responsibility.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Can I change my shipping address?</h4>
              <p>You can change your address within 1 hour of placing your order. Contact support immediately if you need to make changes.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Do you offer free shipping?</h4>
              <p>Yes! Free standard shipping on all orders over $50. Some restrictions apply to international orders.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
