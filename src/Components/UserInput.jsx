import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/counter/actions";
import Frame from "../img/icons/Frame.svg";
import Vector1 from "../img/icons/Vector (1).svg";
import Vector3 from "../img/icons/Vector (3).svg";
function UserInput() {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.bookings);
  function handleDispatch(event) {
    event.preventDefault();
    const from = event.target.from.value;
    const to = event.target.to.value;
    const date = event.target.date.value;
    const guests = event.target.guests.value;
    const ticketClass = event.target.ticketClass.value;
    const submittedData = {
      from,
      to,
      date,
      guests,
      ticketClass,
    };
    dispatch(addBooking(submittedData));
  }
  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          onSubmit={(event) => {
            handleDispatch(event);
          }}
          className="first-hero lws-inputform"
        >
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={Frame} alt="" />
              <select
                required
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={Frame} alt="" />
              <select
                required
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>
          <div className="des-from">
            <p>Journey Date</p>
            <input
              required
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
            />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={Vector1} alt="" />
              <select
                required
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>
          <div className="des-from !border-r-0">
            <p>Class Name</p>
            <div className="flex flex-row">
              <img src={Vector3} alt="" />
              <select
                required
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>
          <button
            disabled={booking?.length === 3}
            className="addCity"
            type="submit"
            id="lws-addCity"
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserInput;
