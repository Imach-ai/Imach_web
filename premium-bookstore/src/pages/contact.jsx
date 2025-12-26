/**
 * Contact Page
 * Allows users to get in touch with PageTurner
 * 
 * Features:
 * - Contact form with validation
 * - Multiple contact methods
 * - FAQs
 * - Business hours
 * - Location information
 */

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'support@pageturner.com',
      description: 'Response within 24 hours'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Reader Street, Book City, BC 12345',
      description: 'Headquarters & Support Center'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      value: 'Available on website',
      description: 'Real-time customer support'
    }
  ];

  const faqs = [
    {
      question: 'How long does delivery take?',
      answer: 'We offer standard (5-7 business days) and express (2-3 business days) shipping options. International orders typically arrive within 2-3 weeks.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee on all books. If you\'re not satisfied, simply return the book in original condition for a full refund.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to over 45 countries. Shipping costs and times vary by location. Check your cart for details.'
    },
    {
      question: 'Are your books new or used?',
      answer: 'All books sold through PageTurner are brand new unless specifically marked as "pre-owned" or "classic editions".'
    },
    {
      question: 'How can I track my order?',
      answer: 'You\'ll receive a tracking number via email once your order ships. You can track your package in real-time on our website.'
    },
    {
      question: 'Do you offer wholesale pricing?',
      answer: 'Yes! For bulk orders or wholesale inquiries, please contact our corporate sales team at corporate@pageturner.com'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - in production, you would send this to a backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Head>
        <title>Contact PageTurner - Get In Touch</title>
        <meta name="description" content="Contact PageTurner for customer support, questions, or inquiries. We're here to help!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Get In Touch</h1>
            <p className={styles.subtitle}>
              We'd love to hear from you. Reach out anytime!
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className={styles.section}>
          <h2>Contact Methods</h2>
          <div className={styles.methodsGrid}>
            {contactMethods.map((method, index) => (
              <div key={index} className={styles.methodCard}>
                <span className={styles.methodIcon}>{method.icon}</span>
                <h3>{method.title}</h3>
                <p className={styles.methodValue}>{method.value}</p>
                <p className={styles.methodDesc}>{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={styles.section}>
          <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
              <h2>Send us a Message</h2>
              <p>Have a question or feedback? Fill out the form below and we'll get back to you soon.</p>

              {submitted && (
                <div className={styles.successMessage}>
                  ✓ Thank you for your message! We'll be in touch within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={errors.name ? styles.inputError : ''}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={errors.email ? styles.inputError : ''}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={errors.subject ? styles.inputError : ''}
                  />
                  {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    className={errors.message ? styles.inputError : ''}
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>

            <div className={styles.businessInfo}>
              <h3>Business Hours</h3>
              <div className={styles.hours}>
                <div className={styles.hourRow}>
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className={styles.hourRow}>
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className={styles.hourRow}>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <h3 style={{ marginTop: '32px' }}>Quick Facts</h3>
              <ul className={styles.factsList}>
                <li>Response time: Under 24 hours</li>
                <li>Average resolution: 48 hours</li>
                <li>Available in 5 languages</li>
                <li>24/7 automated support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className={styles.section}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>Didn't Find Your Answer?</h2>
          <p>Check out our help center or contact our support team directly.</p>
          <div className={styles.ctaButtons}>
            <Link href="/books" className={styles.primaryBtn}>
              Continue Shopping
            </Link>
            <Link href="/about" className={styles.secondaryBtn}>
              Learn About Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
