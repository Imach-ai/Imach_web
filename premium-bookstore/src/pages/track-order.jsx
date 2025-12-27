import Head from 'next/head';
import { useState } from 'react';
import styles from './track-order.module.css';

export default function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [searched, setSearched] = useState(false);

  // Mock tracking data for demonstration
  const mockTrackingData = {
    'ORD-123456': {
      orderNumber: 'ORD-123456',
      status: 'Delivered',
      estimatedDelivery: 'Dec 25, 2024',
      trackingNumber: 'TRK-987654321',
      carrier: 'FedEx',
      orderDate: 'Dec 20, 2024',
      items: [
        { name: 'The Great Gatsby', quantity: 1 },
        { name: 'To Kill a Mockingbird', quantity: 1 }
      ],
      milestones: [
        { date: 'Dec 20', time: '2:30 PM', event: 'Order Placed', icon: '📦', completed: true },
        { date: 'Dec 21', time: '9:00 AM', event: 'Processing', icon: '⚙️', completed: true },
        { date: 'Dec 22', time: '3:45 PM', event: 'Shipped', icon: '🚚', completed: true },
        { date: 'Dec 25', time: '10:15 AM', event: 'Delivered', icon: '✅', completed: true }
      ]
    },
    'ORD-654321': {
      orderNumber: 'ORD-654321',
      status: 'In Transit',
      estimatedDelivery: 'Dec 28, 2024',
      trackingNumber: 'TRK-456789123',
      carrier: 'UPS',
      orderDate: 'Dec 23, 2024',
      items: [
        { name: '1984', quantity: 1 },
        { name: 'Pride and Prejudice', quantity: 2 }
      ],
      milestones: [
        { date: 'Dec 23', time: '4:15 PM', event: 'Order Placed', icon: '📦', completed: true },
        { date: 'Dec 24', time: '10:30 AM', event: 'Processing', icon: '⚙️', completed: true },
        { date: 'Dec 25', time: '2:00 PM', event: 'Shipped', icon: '🚚', completed: true },
        { date: 'Dec 28', time: 'TBD', event: 'Estimated Delivery', icon: '🎯', completed: false }
      ]
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    if (mockTrackingData[orderNumber]) {
      setTrackingData(mockTrackingData[orderNumber]);
    } else {
      setTrackingData(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return '#4caf50';
      case 'in transit':
        return '#ff9800';
      case 'processing':
        return '#2196f3';
      default:
        return '#1d1d1f';
    }
  };

  return (
    <>
      <Head>
        <title>Track Order - Bokly</title>
        <meta name="description" content="Track your Bokly order in real-time." />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.videoBg}>
            <div className={styles.videoBgOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Track Your Order</h1>
            <p className={styles.subtitle}>
              Follow your package every step of the way
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <h2>Track Shipment</h2>
            <p>Enter your order number to see real-time tracking updates</p>
            
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <input
                type="text"
                placeholder="e.g., ORD-123456"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
                className={styles.searchInput}
                required
              />
              <button type="submit" className={styles.searchButton}>
                Track Order
              </button>
            </form>

            <p className={styles.hint}>Try: ORD-123456 or ORD-654321</p>
          </div>
        </section>

        {/* Results Section */}
        {searched && (
          <section className={styles.resultsSection}>
            {trackingData ? (
              <div className={styles.trackingDetails}>
                {/* Status Card */}
                <div className={styles.statusCard} style={{ borderColor: getStatusColor(trackingData.status) }}>
                  <div className={styles.statusHeader}>
                    <h3>Order Status</h3>
                    <span className={styles.status} style={{ color: getStatusColor(trackingData.status) }}>
                      {trackingData.status}
                    </span>
                  </div>
                  <div className={styles.statusInfo}>
                    <div className={styles.infoItem}>
                      <label>Order Number</label>
                      <p>{trackingData.orderNumber}</p>
                    </div>
                    <div className={styles.infoItem}>
                      <label>Tracking Number</label>
                      <p>{trackingData.trackingNumber}</p>
                    </div>
                    <div className={styles.infoItem}>
                      <label>Carrier</label>
                      <p>{trackingData.carrier}</p>
                    </div>
                    <div className={styles.infoItem}>
                      <label>Estimated Delivery</label>
                      <p>{trackingData.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className={styles.milestonesSection}>
                  <h3>Delivery Timeline</h3>
                  <div className={styles.timeline}>
                    {trackingData.milestones.map((milestone, index) => (
                      <div 
                        key={index} 
                        className={`${styles.milestone} ${milestone.completed ? styles.completed : ''}`}
                      >
                        <div className={styles.milestoneIcon}>{milestone.icon}</div>
                        <div className={styles.milestoneContent}>
                          <h4>{milestone.event}</h4>
                          <p>{milestone.date} at {milestone.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Items */}
                <div className={styles.itemsSection}>
                  <h3>Items in This Order</h3>
                  <div className={styles.itemsList}>
                    {trackingData.items.map((item, index) => (
                      <div key={index} className={styles.item}>
                        <span className={styles.itemIcon}>📚</span>
                        <div>
                          <h5>{item.name}</h5>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.noResults}>
                <div className={styles.noResultsIcon}>❌</div>
                <h3>Order Not Found</h3>
                <p>No matching order found for "{orderNumber}"</p>
                <p className={styles.tryAgain}>Please check your order number and try again</p>
              </div>
            )}
          </section>
        )}

        {/* Info Section */}
        <section className={styles.infoSection}>
          <h2>Tracking Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h4>📧 Email Notifications</h4>
              <p>Receive automatic email updates at each stage of your delivery process.</p>
            </div>
            <div className={styles.infoCard}>
              <h4>🔗 Carrier Link</h4>
              <p>Click the tracking number in your email to visit the carrier's tracking page directly.</p>
            </div>
            <div className={styles.infoCard}>
              <h4>📞 Need Help?</h4>
              <p>If your package is lost or delayed, contact our support team immediately.</p>
            </div>
            <div className={styles.infoCard}>
              <h4>⏰ Delivery Time</h4>
              <p>Most deliveries arrive within the estimated timeframe. Some delays may occur during peak seasons.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
