'use client';

import React, { useEffect, useState } from 'react';
import BookingsList, { Booking } from '@/components/BookingsList';

const getBookings = async (): Promise<Booking[]> => {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Home: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings();
        setBookings(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Current booking count: {bookings.length}</h1>
      <BookingsList entries={bookings} />
    </div>
  );
};

export default Home;