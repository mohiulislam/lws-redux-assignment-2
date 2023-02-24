import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";
function bookingReducer(state = {}, action) {
  const payloadWithBookingId = {
    ...action.payload,
    bookingId: (() => {
      return Math.floor(Math.random()) - Date.now();
    })(),
  };
  switch (action.type) {
    case ADD_BOOKING:
      if ((state.bookings?.length ?? 0) < 3) {
        return {
          ...state,
          bookings: state.bookings
            ? [...state.bookings, payloadWithBookingId]
            : [payloadWithBookingId],
        };
      } else {
        return state;
      }
    case DELETE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.bookingId !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default bookingReducer;
