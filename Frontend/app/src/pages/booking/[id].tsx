"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBooking } from "@/helperFunctions/getBooking";
import { Booking } from "@/types/booking";

const BookingDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [booking, setBooking] = useState<Booking>();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getCurrentBooking();
  }, [id]);

  const getCurrentBooking = async () => {
    const idAsNumber = Number(id);
    if (!isNaN(idAsNumber)) {
      try {
        const currentBooking = await getBooking(Number(id));
        setBooking(currentBooking);
      } catch (error) {
        if (error.cause === 404) {
          setNotFound(true);
        }
      }
    }
  };

  if (notFound) {
    return (
      <>
        <h1>Booking not found</h1>
        <Link href="/">Back to Home</Link>
      </>
    );
  }

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Booking Details</h1>
      <p>
        This Booking is with {booking.doctor_name} for {booking.service} and it
        ends on {booking.end_time}
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default BookingDetails;
