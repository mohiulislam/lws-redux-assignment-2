import React from "react";
import { useSelector } from "react-redux";
import SinglePreview from "./SinglePreview";

function PreviewContainer() {
  const bookings = useSelector((state) => state.bookings);
  console.log(bookings);
  return bookings?.length ? (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">className</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          {bookings.map((booking, index) => (
            <SinglePreview
              key={index}
              bookingId={index}
              from={booking.from}
              to={booking.to}
              date={booking.date}
              guests={booking.guests}
              ticketClass={booking.ticketClass}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
}

export default PreviewContainer;
