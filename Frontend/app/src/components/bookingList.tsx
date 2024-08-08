import { Booking } from "@/types/booking";
import Link from "next/link";

type BookingsListProps = {
  entries: Booking[];
};

function BookingsList({ entries }: BookingsListProps) {
  const getLocalDateString = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="space-y-4 p-4 flex flex-col items-center">
      <Link
        href={"/create"}
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create Booking
      </Link>
      <ul className="flex flex-col space-y-4 w-fit">
        {entries.map((entry) => (
          <Link
            key={entry.id}
            href={`/booking/${entry.id}`}
            className="text-blue-600 hover:text-blue-800"
          >
            <li className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              A Booking on {getLocalDateString(entry.date)} starting at{" "}
              {entry.start_time}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default BookingsList;
