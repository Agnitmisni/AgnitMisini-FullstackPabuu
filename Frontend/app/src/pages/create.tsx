// pages/create-booking.tsx

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { BookingForm } from "@/types/booking";
import { postBooking } from "@/helperFunctions/postBooking";

const CreateBookingPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<BookingForm>({
    service: "",
    doctor_name: "",
    start_time: "",
    end_time: "",
    date: "",
  });
  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await postBooking(formData);

    if (response === "") {
      router.push("/");
    } else {
      setErrors(response);
    }
  };

  return (
    <div>
      <h1>Create Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service:</label>
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Doctor Name:</label>
          <input
            type="text"
            name="doctor_name"
            value={formData.doctor_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Time:</label>
          <input
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Time:</label>
          <input
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Booking</button>
      </form>
      {errors && <div style={{ color: "red" }}>{errors}</div>}
    </div>
  );
};

export default CreateBookingPage;
