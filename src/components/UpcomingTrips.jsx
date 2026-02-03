import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, MapPin, Calendar, Users, AlertCircle } from 'lucide-react';
import './UpcomingTrips.css';

function UpcomingTrips() {
  // Dummy upcoming trips data
  const [trips] = useState([
    {
      id: 1,
      destination: 'Tokyo, Japan',
      departureDate: '2024-05-15',
      returnDate: '2024-05-30',
      days: 15,
      travelers: 2,
      status: 'Confirmed',
      flights: 2,
      hotels: 1,
      activities: 3,
      color: '#FF6B6B',
    },
    {
      id: 2,
      destination: 'Paris, France',
      departureDate: '2024-06-20',
      returnDate: '2024-07-05',
      days: 15,
      travelers: 1,
      status: 'Pending',
      flights: 2,
      hotels: 1,
      activities: 2,
      color: '#4ECDC4',
    },
    {
      id: 3,
      destination: 'Sydney, Australia',
      departureDate: '2024-08-10',
      returnDate: '2024-08-25',
      days: 15,
      travelers: 4,
      status: 'Confirmed',
      flights: 2,
      hotels: 2,
      activities: 5,
      color: '#95E1D3',
    },
  ]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    hidden: { opacity: 0, y: 40, x: -30 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
    exit: {
      opacity: 0,
      y: -40,
      x: 30,
      transition: { duration: 0.3 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100 },
    },
  };

  const daysCounterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="upcoming-trips-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background */}
      <div className="trips-background">
        <div className="animated-plane-trips">✈️</div>
        <div className="animated-cloud trips-cloud-1">☁️</div>
        <div className="animated-cloud trips-cloud-2">☁️</div>
      </div>

      {/* Header Section */}
      <motion.div className="trips-header" variants={headerVariants}>
        <h1>Upcoming Trips</h1>
        <p>Your future travels at a glance</p>
      </motion.div>

      {/* Trips Grid */}
      <motion.div
        className="trips-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {trips.length > 0 ? (
          trips.map((trip) => (
            <motion.div
              key={trip.id}
              className="trip-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 25px 50px rgba(102, 126, 234, 0.25)',
              }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            >
              {/* Status Badge */}
              <div className="trip-status-badge" style={{ borderLeftColor: trip.color }}>
                <AlertCircle size={18} />
                <span>{trip.status}</span>
              </div>

              {/* Trip Header */}
              <div className="trip-header-content">
                <div className="destination-info">
                  <MapPin size={24} style={{ color: trip.color }} />
                  <h3>{trip.destination}</h3>
                </div>

                {/* Days Counter */}
                <motion.div
                  className="days-counter"
                  style={{ backgroundColor: trip.color }}
                  variants={daysCounterVariants}
                >
                  <span className="days-number">{trip.days}</span>
                  <span className="days-label">Days</span>
                </motion.div>
              </div>

              {/* Trip Dates */}
              <div className="trip-dates">
                <div className="date-item">
                  <Calendar size={16} />
                  <div>
                    <p className="label">Departure</p>
                    <p className="date-value">
                      {new Date(trip.departureDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>

                <div className="date-arrow">→</div>

                <div className="date-item">
                  <Calendar size={16} />
                  <div>
                    <p className="label">Return</p>
                    <p className="date-value">
                      {new Date(trip.returnDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Travelers */}
              <div className="trip-travelers">
                <Users size={18} style={{ color: trip.color }} />
                <span>{trip.travelers} traveler{trip.travelers > 1 ? 's' : ''}</span>
              </div>

              {/* Bookings Summary */}
              <div className="trip-bookings-summary">
                <div className="booking-item">
                  <Plane size={16} />
                  <span>{trip.flights} Flight{trip.flights > 1 ? 's' : ''}</span>
                </div>
                <div className="booking-item">
                  <span className="emoji">🏨</span>
                  <span>{trip.hotels} Hotel{trip.hotels > 1 ? 's' : ''}</span>
                </div>
                <div className="booking-item">
                  <span className="emoji">🎫</span>
                  <span>{trip.activities} Activity</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="trip-actions">
                <motion.button
                  className="btn-primary"
                  whileHover={{
                    backgroundColor: trip.color,
                    boxShadow: `0 10px 25px ${trip.color}40`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Trip
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  whileHover={{
                    borderColor: trip.color,
                    color: trip.color,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Edit
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div className="no-trips" variants={cardVariants}>
            <Plane size={80} />
            <h2>No Upcoming Trips</h2>
            <p>Plan your next adventure! Book a flight and start exploring.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default UpcomingTrips;
