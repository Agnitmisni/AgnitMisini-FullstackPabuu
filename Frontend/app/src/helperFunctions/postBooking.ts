import { Booking, BookingForm } from "@/types/booking";

export async function postBooking(formData: BookingForm): Promise<string> {
  try {
    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return "";
    } else {
      const errorData = await response.json();
      return errorData.message;
    }
  } catch (error) {
    return "An unexpected error occurred. Please try again later.";
  }
}
