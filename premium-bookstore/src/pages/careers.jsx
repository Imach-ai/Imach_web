import Head from 'next/head';
import Link from 'next/link';
import styles from './careers.module.css';

export default function Careers() {
  const positions = [
    {
      id: 1,
      title: 'Senior Product Designer',
      department: 'Product & Design',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$120k - $160k',
      description: 'Lead the design of customer-facing products and features for our bookstore platform.'
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      salary: '$130k - $180k',
      description: 'Build scalable web applications using React, Node.js, and modern cloud technologies.'
    },
    {
      id: 3,
      title: 'Marketing Manager',
      department: 'Marketing',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$90k - $130k',
      description: 'Drive growth through innovative marketing campaigns and brand partnerships.'
    },
    {
      id: 4,
      title: 'Customer Success Specialist',
      department: 'Customer Success',
      type: 'Full-time',
      location: 'Remote',
      salary: '$60k - $85k',
      description: 'Support our customers and ensure they get the most value from our platform.'
    },
    {
      id: 5,
      title: 'Content Writer',
      department: 'Content',
      type: 'Part-time',
      location: 'Remote',
      salary: '$40k - $60k',
      description: 'Create engaging content about books, reading, and literary topics for our blog.'
    },
    {
      id: 6,
      title: 'Data Analyst',
      department: 'Analytics',
      type: 'Full-time',
      location: 'Remote',
      salary: '$100k - $140k',
      description: 'Analyze customer data and provide insights to drive product decisions.'
    }
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Compensation', description: 'Market-competitive salaries and bonus structure' },
    { icon: '🏥', title: 'Health Benefits', description: 'Comprehensive health, dental, and vision coverage' },
    { icon: '⏱️', title: 'Flexible Hours', description: 'Remote-friendly with flexible work arrangements' },
    { icon: '📚', title: 'Learning Budget', description: '$2,000 annual professional development budget' },
    { icon: '🎓', title: 'Mentorship', description: 'Work with experienced industry leaders' },
    { icon: '🌍', title: 'Diverse Team', description: 'Inclusive culture celebrating diverse backgrounds' }
  ];

  const values = [
    { title: 'Passion for Books', description: 'We love literature and want to share that passion with readers everywhere.' },
    { title: 'Innovation', description: 'We embrace new ideas and constantly push the boundaries of what\'s possible.' },
    { title: 'Customer Focus', description: 'Everything we do is centered around providing exceptional customer experiences.' },
    { title: 'Integrity', description: 'We operate with honesty and transparency in all our business practices.' }
  ];

  return (
    <>
      <Head>
        <title>Careers - Bokly</title>
        <meta name="description" content="Join our team at Bokly. We're hiring talented people to help us change the world of books." />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.videoBg}>
            <div className={styles.videoBgOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Join Our Team</h1>
            <p className={styles.subtitle}>
              Help us revolutionize how people discover and purchase books
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.section}>
          <div className={styles.aboutBox}>
            <h2>About Bokly</h2>
            <p>
              Bokly is a premium online bookstore dedicated to connecting readers with exceptional books from around 
              the world. We believe that books have the power to transform lives, and our mission is to make discovering 
              and purchasing books an extraordinary experience.
            </p>
            <p>
              We're a talented, passionate team of book lovers, engineers, designers, and marketers working together 
              to build something amazing. If you share our passion for literature and want to make a difference, 
              we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Join Bokly?</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className={styles.positionsSection}>
          <h2 className={styles.sectionTitle}>Open Positions</h2>
          <p className={styles.positionsSubtitle}>We're currently looking for talented people to join our team</p>

          <div className={styles.positionsList}>
            {positions.map((position) => (
              <div key={position.id} className={styles.positionCard}>
                <div className={styles.positionHeader}>
                  <div>
                    <h3>{position.title}</h3>
                    <p className={styles.department}>{position.department}</p>
                  </div>
                  <span className={styles.jobType}>{position.type}</span>
                </div>

                <div className={styles.positionDetails}>
                  <span className={styles.detail}>📍 {position.location}</span>
                  <span className={styles.detail}>💼 {position.salary}</span>
                </div>

                <p className={styles.description}>{position.description}</p>

                <button className={styles.applyBtn}>View Position</button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>Don't see the right position?</h2>
          <p>We're always interested in hearing from talented individuals</p>
          <Link href="/contact" className={styles.ctaButton}>
            Send us your resume
          </Link>
        </section>
      </main>
    </>
  );
}
