import { COLUMNS, ROWS } from '../constants/gameGridSize'

const initialState = {
  columns: COLUMNS['650'],
  rows: ROWS['600']
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLUMNS':
      return {
        ...state,
        columns: action.columns
      }
    case 'SET_ROWS':
      return {
        ...state,
        rows: action.rows
      }
    default:
      return state
  }
}
