import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from './help-faqs.module.css';

export default function HelpFAQs() {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I place an order?',
      answer: 'Browse our collection of books, add items to your cart, and proceed to checkout. Fill in your shipping and payment information, and your order will be processed immediately.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and digital wallets. All transactions are secured with industry-standard encryption.'
    },
    {
      id: 3,
      question: 'Can I change or cancel my order?',
      answer: 'Orders can be modified or canceled within 2 hours of placement. After this period, your order enters our fulfillment system. Contact our support team immediately if you need assistance.'
    },
    {
      id: 4,
      question: 'Do you offer gift wrapping?',
      answer: 'Yes! We offer premium gift wrapping for $5 per item. Select this option during checkout. Personalized gift messages are included at no extra cost.'
    },
    {
      id: 5,
      question: 'How do I track my order?',
      answer: 'You\'ll receive a tracking number via email once your order ships. Use this number on our Track Order page to monitor your package in real-time.'
    },
    {
      id: 6,
      question: 'What\'s your return policy?',
      answer: 'We offer a 30-day money-back guarantee. Books must be in original condition, unopened if possible. Visit our Returns page for detailed instructions.'
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>Help & FAQs - Bokly</title>
        <meta name="description" content="Frequently asked questions and help center for Bokly bookstore." />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.videoBg}>
            <div className={styles.videoBgOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Help & FAQs</h1>
            <p className={styles.subtitle}>
              Find answers to common questions about orders, shipping, and more.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <div className={styles.faqContainer}>
            {faqs.map((faq) => (
              <div key={faq.id} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={expandedId === faq.id}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faqToggle}>
                    {expandedId === faq.id ? '−' : '+'}
                  </span>
                </button>
                {expandedId === faq.id && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>Still need help?</h2>
          <p>Our customer support team is ready to assist you</p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Support
          </Link>
        </section>
      </main>
    </>
  );
}
