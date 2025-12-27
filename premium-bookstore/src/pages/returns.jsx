import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from './returns.module.css';

export default function Returns() {
  const [expandedStep, setExpandedStep] = useState(null);

  const returnProcess = [
    {
      id: 1,
      title: 'Request Return',
      description: 'Contact our support team within 30 days of purchase. Provide your order number and reason for return.'
    },
    {
      id: 2,
      title: 'Receive Label',
      description: 'We\'ll send you a prepaid shipping label via email. Simply print it and attach to your return package.'
    },
    {
      id: 3,
      title: 'Ship Back',
      description: 'Drop off your package at any shipping location. Books must be in original condition with original packaging if possible.'
    },
    {
      id: 4,
      title: 'Refund Issued',
      description: 'Once we receive and inspect your return, we\'ll process your refund within 5-7 business days.'
    }
  ];

  const returnReasons = [
    { icon: '❌', title: 'Unwanted Item', eligible: true },
    { icon: '📖', title: 'Damaged Condition', eligible: true },
    { icon: '🚫', title: 'Wrong Item Sent', eligible: true },
    { icon: '📦', title: 'Better Price Found', eligible: true },
    { icon: '🔄', title: 'Changed Mind', eligible: true },
    { icon: '⚠️', title: 'Defective Product', eligible: true }
  ];

  return (
    <>
      <Head>
        <title>Returns & Refunds - Bokly</title>
        <meta name="description" content="Easy returns and refunds policy. 30-day money-back guarantee on all orders." />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.videoBg}>
            <div className={styles.videoBgOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Returns & Refunds</h1>
            <p className={styles.subtitle}>
              30-day money-back guarantee on all purchases
            </p>
          </div>
        </section>

        {/* Policy Overview */}
        <section className={styles.section}>
          <div className={styles.policyBox}>
            <h2>Our Return Policy</h2>
            <p>
              We stand behind every book we sell. If you're not completely satisfied, we'll accept returns within 30 days 
              of purchase for a full refund. Books must be in their original condition. It's that simple.
            </p>
            <div className={styles.highlights}>
              <div>
                <strong>30 Days</strong>
                <span>Return Window</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Money Back</span>
              </div>
              <div>
                <strong>Free</strong>
                <span>Return Shipping</span>
              </div>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Return an Item</h2>
          <div className={styles.processSteps}>
            {returnProcess.map((step, index) => (
              <div key={step.id} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < returnProcess.length - 1 && <div className={styles.stepArrow}>↓</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Eligible Returns */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Can Be Returned</h2>
          <div className={styles.reasonsGrid}>
            {returnReasons.map((reason, index) => (
              <div key={index} className={styles.reasonCard}>
                <div className={styles.reasonIcon}>{reason.icon}</div>
                <h4>{reason.title}</h4>
                {reason.eligible && <span className={styles.eligible}>✓ Eligible</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Conditions */}
        <section className={styles.conditionsSection}>
          <h2>Return Conditions</h2>
          <div className={styles.conditionsList}>
            <div className={styles.conditionItem}>
              <h4>✓ Books in Original Condition</h4>
              <p>Pages unwritten, binding intact, no significant wear or creasing.</p>
            </div>
            <div className={styles.conditionItem}>
              <h4>✓ Original Packaging</h4>
              <p>If possible, return in original box or packaging to protect the book in transit.</p>
            </div>
            <div className={styles.conditionItem}>
              <h4>✗ No Excessive Damage</h4>
              <p>Books with water damage, excessive highlighting, or torn pages may not be returnable.</p>
            </div>
            <div className={styles.conditionItem}>
              <h4>✗ No Personal Items</h4>
              <p>Books that show clear signs of being read or used extensively are subject to review.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>Ready to Start a Return?</h2>
          <p>Contact our support team and we'll take care of the rest</p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Support
          </Link>
        </section>
      </main>
    </>
  );
}
