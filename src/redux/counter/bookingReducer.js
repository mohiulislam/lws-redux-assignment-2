import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";
function bookingReducer(state = {}, action) {
  switch (action.type) {
    case ADD_BOOKING:
      if ((state.bookings?.length ?? 0) < 3) {
        return {
          ...state,
          bookings: state.bookings
            ? [...state.bookings, action.payload]
            : [action.payload],
        };
      } else {
        return state;
      }
    case DELETE_BOOKING:
      return {
        ...state,
        items: state.bookings.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export default bookingReducer;
