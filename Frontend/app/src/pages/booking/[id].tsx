'use client';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Booking } from '@/components/BookingsList';

const BookingDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const fetchBooking = async () => {
      if (id) {
        try {
          const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`, { cache: 'no-store' });
          if (!res.ok) {
            throw new Error('Failed to fetch booking');
          }
          const data: Booking = await res.json();
          setBooking(data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchBooking();
  }, [id]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Booking Details</h1>
      <p>This Booking is with {booking.doctor_name} for {booking.service} and it ends on {booking.end_time}</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default BookingDetails;