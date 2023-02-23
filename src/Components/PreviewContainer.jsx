import React from "react";
import { useSelector } from "react-redux";
import SinglePreview from "./SinglePreview";

function PreviewContainer() {
  const state = useSelector((state) => state);
  console.log(state);
  const dataToPreview = {};
  Object.keys(state)
    .filter((key) => key.startsWith("booking_"))
    .forEach((key) => (dataToPreview[key] = state[key]));

  return Object.keys(dataToPreview).length ? (
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
          {Object.values(dataToPreview)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((booking, index) => (
              <SinglePreview
                key={`booking_${index + 1}`}
                bookingId={`booking_${index + 1}`}
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
