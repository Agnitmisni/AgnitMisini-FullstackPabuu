import BookingsList, { Booking } from "@/components/BookingsList";
import React, { useEffect, useState } from "react";

async function getBookings() {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store', mode: 'no-cors' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Home: React.FC = async () => {

  const bookingsValue = await getBookings()
  const [bookings, setBookings] = useState <Booking[]> ([]);
 
  useEffect(() => {
  setBookings(bookingsValue)
  }, [bookingsValue]);
  return (
    <div>
      <h1>Current booking count: {bookings.length}</h1>
      <BookingsList entries={bookings} />
    </div>
  );
};

export default Home;
