import { Booking } from "@/types/booking";

export async function getBooking(id: number) {
  const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    throw new Error("Booking not found", { cause: 404 });
  }

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Booking>;
}

