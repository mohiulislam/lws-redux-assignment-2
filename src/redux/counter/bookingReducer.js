import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";
function bookingReducer(state = {}, action) {
  switch (action.type) {
    case ADD_BOOKING:
      if (Object.keys(state).length - 1 < 3) {
        return {
          ...state,
          [`booking_${(state.currentlyBooked ?? 0) + 1}`]: {
            from: action.payload.from,
            to: action.payload.to,
            date: action.payload.date,
            guests: action.payload.guests,
            ticketClass: action.payload.ticketClass,
          },
          currentlyBooked: (state.currentlyBooked ?? 0) + 1,
        };
      } else {
        return state;
      }
    case DELETE_BOOKING:
      const copyState = { ...state };
      delete copyState[action.payload];
      return {
        ...copyState,
        currentlyBooked: copyState.currentlyBooked - 1,
      };
    default:
      return state;
  }
}

export default bookingReducer;
