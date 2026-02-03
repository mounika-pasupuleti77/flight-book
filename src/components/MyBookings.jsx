import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Calendar, DollarSign, MapPin, CheckCircle } from 'lucide-react';
import './MyBookings.css';

function MyBookings() {
  // Dummy booking data - simulating localStorage bookings
  const [bookings] = useState([
    {
      id: 1,
      flightName: 'SkyWings Airlines',
      flightNumber: 'SW101',
      from: 'New York (NYC)',
      to: 'Los Angeles (LAX)',
      date: '2024-02-15',
      time: '10:30 AM',
      price: 245,
      seats: ['1A', '1B'],
      status: 'Confirmed',
    },
    {
      id: 2,
      flightName: 'BlueSky Express',
      flightNumber: 'BSE202',
      from: 'New York (NYC)',
      to: 'Miami (MIA)',
      date: '2024-03-20',
      time: '2:45 PM',
      price: 185,
      seats: ['2C'],
      status: 'Confirmed',
    },
    {
      id: 3,
      flightName: 'CloudBurst Air',
      flightNumber: 'CA305',
      from: 'New York (NYC)',
      to: 'Chicago (ORD)',
      date: '2024-04-10',
      time: '8:15 AM',
      price: 145,
      seats: ['3A', '3B', '3C'],
      status: 'Confirmed',
    },
  ]);

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, x: -20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
    exit: {
      opacity: 0,
      y: -20,
      x: 20,
      transition: { duration: 0.3 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="my-bookings-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="bookings-background">
        <div className="animated-plane">✈️</div>
        <div className="animated-cloud cloud-1">☁️</div>
        <div className="animated-cloud cloud-2">☁️</div>
        <div className="animated-cloud cloud-3">☁️</div>
      </div>

      {/* Header Section with Animation */}
      <motion.div className="bookings-header" variants={headerVariants}>
        <h1>My Bookings</h1>
        <p>View your confirmed bookings and flight details</p>
      </motion.div>

      {bookings.length === 0 ? (
        <motion.div className="no-bookings" variants={cardVariants}>
          <Plane size={64} />
          <h2>No Bookings Yet</h2>
          <p>You haven't booked any flights yet. Start your journey today!</p>
        </motion.div>
      ) : (
        <motion.div
          className="bookings-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {bookings.map((booking) => (
            <motion.div
              key={booking.id}
              className="booking-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Status Badge */}
              <div className="booking-status">
                <CheckCircle size={20} />
                <span>{booking.status}</span>
              </div>

              {/* Flight Header */}
              <div className="booking-header-info">
                <div className="flight-airline">
                  <h3>{booking.flightName}</h3>
                  <span className="flight-number">Flight: {booking.flightNumber}</span>
                </div>
                <div className="booking-price">
                  <DollarSign size={24} />
                  <span>${booking.price}</span>
                </div>
              </div>

              {/* Route Information */}
              <div className="booking-route">
                <div className="route-point">
                  <MapPin size={18} className="icon" />
                  <div>
                    <p className="label">From</p>
                    <p className="value">{booking.from}</p>
                  </div>
                </div>

                <div className="route-arrow">→</div>

                <div className="route-point">
                  <MapPin size={18} className="icon" />
                  <div>
                    <p className="label">To</p>
                    <p className="value">{booking.to}</p>
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="booking-details">
                <div className="detail-item">
                  <Calendar size={18} />
                  <div>
                    <p className="label">Date</p>
                    <p className="value">{new Date(booking.date).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="detail-item">
                  <Plane size={18} />
                  <div>
                    <p className="label">Departure</p>
                    <p className="value">{booking.time}</p>
                  </div>
                </div>
              </div>

              {/* Seats Information */}
              <div className="booking-seats">
                <p className="label">Seats:</p>
                <div className="seats-badges">
                  {booking.seats.map((seat, idx) => (
                    <span key={idx} className="seat-badge">
                      {seat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                className="booking-action-btn"
                whileHover={{
                  backgroundColor: '#667eea',
                  boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default MyBookings;
