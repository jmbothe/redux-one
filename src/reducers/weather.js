import { FETCH_WEATHER } from '../actions'

export const weather = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
  }
  return state;
}