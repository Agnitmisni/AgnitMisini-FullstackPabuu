import Link from 'next/link';

export interface Booking {
  id: number;
  date: string;
  start_time: string;
  doctor_name: string;
  service: string;
  end_time: string;
}

type BookingsListProps = {
    entries:Booking[]
}

function BookingsList ({entries}:BookingsListProps)  {
  return (
    <div>
      <h1>Bookings</h1>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <Link href={`/booking/${entry.id}`}>
              <a>A Booking on {entry.date} starting at {entry.start_time}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsList;
