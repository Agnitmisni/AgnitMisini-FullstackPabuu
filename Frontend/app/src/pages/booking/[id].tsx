// pages/booking/[id].tsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Booking {
  id: number;
  date: string;
  start_time: string;
  doctor_name: string;
  service: string;
  end_time: string;
}

const BookingDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [booking, setBooking] = useState<Booking | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundBooking = bookings.find((b) => b.id === parseInt(id as string));
      setBooking(foundBooking);
    }
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
