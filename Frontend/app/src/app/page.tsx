import BookingsList from "@/components/bookingList";
import { getBookings } from "@/helperFunctions/getBookings";

const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="p-4 flex flex-col items-center">
      <h1>Current booking count: {bookings.length}</h1>
      <BookingsList entries={bookings} />
    </div>
  );
};

export default Home;