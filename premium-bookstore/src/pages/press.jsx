import Head from 'next/head';
import { useState } from 'react';
import styles from './press.module.css';

export default function Press() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const pressReleases = [
    {
      id: 1,
      date: 'December 15, 2024',
      title: 'Bokly Launches Premium Bookstore Platform',
      excerpt: 'New online bookstore combines luxury design with curated literary collections...',
      content: 'We are thrilled to announce the launch of Bokly, a revolutionary online bookstore that reimagines how readers discover and purchase books. With its premium design, personalized recommendations, and exclusive collections, Bokly sets a new standard in the world of independent bookstores.'
    },
    {
      id: 2,
      date: 'December 10, 2024',
      title: 'Bokly Partners with Independent Authors',
      excerpt: 'Exclusive partnerships aim to bring emerging literary voices to readers worldwide...',
      content: 'Bokly is proud to announce partnerships with over 500 independent authors, providing them with a premium platform to reach readers. This initiative demonstrates our commitment to supporting the literary community and promoting diverse voices in publishing.'
    },
    {
      id: 3,
      date: 'December 1, 2024',
      title: 'Bokly Sustainability Initiative',
      excerpt: 'New eco-friendly packaging reduces carbon footprint by 40%...',
      content: 'In our commitment to environmental responsibility, Bokly has implemented sustainable packaging solutions that reduce carbon emissions by 40%. All books are now shipped in recyclable, biodegradable packaging made from 100% post-consumer recycled materials.'
    }
  ];

  const mediaKit = [
    { icon: '📷', name: 'Brand Assets', description: 'High-resolution logos and brand guidelines' },
    { icon: '📊', name: 'Company Statistics', description: 'Key metrics and growth figures' },
    { icon: '👤', name: 'Leadership Bios', description: 'Team member profiles and photos' },
    { icon: '🎥', name: 'Video Content', description: 'B-roll and promotional videos' }
  ];

  return (
    <>
      <Head>
        <title>Press - Bokly</title>
        <meta name="description" content="Press releases, media kit, and news about Bokly bookstore." />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.videoBg}>
            <div className={styles.videoBgOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Press Center</h1>
            <p className={styles.subtitle}>
              Latest news and updates from Bokly
            </p>
          </div>
        </section>

        {/* Press Releases */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Latest Press Releases</h2>
            <p>Stay informed about Bokly's latest news and announcements</p>
          </div>

          <div className={styles.pressList}>
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className={`${styles.pressCard} ${selectedArticle === release.id ? styles.expanded : ''}`}
                onClick={() => setSelectedArticle(selectedArticle === release.id ? null : release.id)}
              >
                <div className={styles.pressHeader}>
                  <div>
                    <span className={styles.date}>{release.date}</span>
                    <h3>{release.title}</h3>
                    <p className={styles.excerpt}>{release.excerpt}</p>
                  </div>
                  <span className={styles.arrow}>→</span>
                </div>
                {selectedArticle === release.id && (
                  <div className={styles.pressContent}>
                    <p>{release.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Media Kit */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Media Kit</h2>
            <p>Download resources for press coverage and media inquiries</p>
          </div>

          <div className={styles.mediaGrid}>
            {mediaKit.map((item, index) => (
              <div key={index} className={styles.mediaCard}>
                <div className={styles.mediaIcon}>{item.icon}</div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <button className={styles.downloadBtn}>Download</button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <h2>Media Inquiries</h2>
          <p>Have a question or looking for an interview?</p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <h4>📧 Email</h4>
              <p>press@bokly.com</p>
            </div>
            <div className={styles.contactCard}>
              <h4>📱 Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className={styles.contactCard}>
              <h4>🏢 Address</h4>
              <p>123 Book Street<br />New York, NY 10001</p>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Follow Bokly</h2>
            <p>Stay connected with our latest updates on social media</p>
          </div>

          <div className={styles.socialGrid}>
            <a href="#" className={styles.socialCard}>
              <span className={styles.socialIcon}>f</span>
              <h4>Facebook</h4>
              <p>@BoklyBooks</p>
            </a>
            <a href="#" className={styles.socialCard}>
              <span className={styles.socialIcon}>𝕏</span>
              <h4>Twitter</h4>
              <p>@BoklyBooks</p>
            </a>
            <a href="#" className={styles.socialCard}>
              <span className={styles.socialIcon}>📸</span>
              <h4>Instagram</h4>
              <p>@BoklyBooks</p>
            </a>
            <a href="#" className={styles.socialCard}>
              <span className={styles.socialIcon}>in</span>
              <h4>LinkedIn</h4>
              <p>Bokly Inc</p>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
