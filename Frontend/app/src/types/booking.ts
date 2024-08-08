export type Booking = {
    id: number;
    date: string;
    start_time: string;
    doctor_name: string;
    service: string;
    end_time: string;
  };
  
export type BookingForm = Omit<Booking, 'id'>;