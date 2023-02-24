import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

export function addBooking(data) {
  return {
    type: ADD_BOOKING,
    payload: data,
  };
}
export function deleteBooking(bookingId) {
  return {
    type: DELETE_BOOKING,
    payload: bookingId,
  };
}
