/**
 * About Page
 * Tells the story of Bokly bookstore
 * 
 * Features:
 * - Company story and mission with video background
 * - Team information with animations
 * - Values and beliefs with premium styling
 * - Statistics with animated counters
 * - Call to action
 */

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './about.module.css';
import InteractiveGradientBackground from '../components/common/InteractiveGradientBackground';

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const values = [
    {
      title: 'Curated Selection',
      description: 'We handpick every book to ensure quality and relevance for our readers.',
      icon: '📚'
    },
    {
      title: 'Reader First',
      description: 'Your reading experience and satisfaction is at the heart of everything we do.',
      icon: '❤️'
    },
    {
      title: 'Knowledge Sharing',
      description: 'We believe books are vessels of knowledge that connect minds across time and space.',
      icon: '💡'
    },
    {
      title: 'Community',
      description: 'Building a community of passionate readers who share and celebrate great books.',
      icon: '🤝'
    }
  ];

  const stats = [
    { label: 'Books Sold', value: '50,000+' },
    { label: 'Happy Readers', value: '25,000+' },
    { label: 'Years in Business', value: '8' },
    { label: 'Countries Served', value: '45' }
  ];

  const team = [
    {
      name: 'Sarah Anderson',
      role: 'Founder & CEO',
      bio: 'Passionate reader and book lover since childhood.'
    },
    {
      name: 'James Mitchell',
      role: 'Head of Curation',
      bio: 'Librarian with 15+ years of book selection experience.'
    },
    {
      name: 'Emma Thompson',
      role: 'Customer Experience',
      bio: 'Dedicated to making every reader feel valued and heard.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Bokly - Premium Book Store</title>
        <meta name="description" content="Learn about Bokly, your trusted source for curated books since 2017." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        {/* Premium Hero Section with Video Background */}
        <section className={styles.hero}>
          {/* Video Background */}
          <div className={styles.videoBg}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className={styles.backgroundVideo}
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Crect fill='%232c2c2c' width='1280' height='720'/%3E%3C/svg%3E"
            >
              <source src="/4866054-uhd_4096_2160_25fps.mp4" type="video/mp4" />
              <source src="/4866054-uhd_4096_2160_25fps.mp4" type="video/webm" />
            </video>
            <div className={styles.videoBgOverlay}></div>
            <InteractiveGradientBackground intensity={0.35} blend="overlay" />
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About Bokly</h1>
            <p className={styles.subtitle}>
              Connecting readers with exceptional books since 2017
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2>Our Story</h2>
            <p>
              Bokly was founded in 2017 with a simple vision: to make great books accessible to everyone. 
              What started as a passion project by a small group of book enthusiasts has grown into a trusted 
              platform serving readers across 45 countries.
            </p>
            <p>
              We believe that books have the power to transform lives, broaden perspectives, and create 
              connections between people. Our mission is to curate and deliver exceptional reading experiences 
              to book lovers everywhere.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.section}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>Our Mission</h3>
              <p>
                To curate and deliver exceptional books that inspire, educate, and entertain readers 
                of all ages and backgrounds.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Our Vision</h3>
              <p>
                A world where quality literature is accessible to everyone, and reading communities 
                thrive globally.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.section}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <span className={styles.icon}>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.section}>
          <div className={styles.statsContainer}>
            <h2>By The Numbers</h2>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.section}>
          <h2>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.avatar}>👤</div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.section}>
          <h2>Why Choose Bokly?</h2>
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>Expertly Curated Selection</h4>
                <p>Every book is handpicked by our team of book enthusiasts and experts.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>Fast & Reliable Delivery</h4>
                <p>Get your books delivered quickly and safely to your doorstep.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>Competitive Pricing</h4>
                <p>Enjoy premium books at fair prices with regular discounts and offers.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>Exceptional Customer Service</h4>
                <p>Our team is here to help with any questions or concerns.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>Community & Connection</h4>
                <p>Join thousands of readers sharing their love of great books.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>Secure & Easy Checkout</h4>
                <p>Safe payment processing with multiple options for your convenience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>Ready to Explore?</h2>
          <p>Discover thousands of curated books waiting for you.</p>
          <div className={styles.ctaButtons}>
            <Link href="/books" className={styles.primaryBtn}>
              Browse Our Collection
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
